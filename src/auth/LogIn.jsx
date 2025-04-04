
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Auth.module.css";

import { useEffect, useState } from "react";





function LogIn() {



  const {login, user} = useAuth()
  const navigate = useNavigate()


  useEffect(() =>{
    if(user ){
      navigate("/dashboard")
    }
  })

  

  const nullForm ={

    email: "",
    password: ""

    


  }


  const [formData, setFormData] = useState(nullForm)


  const handleInput = (e) =>{

    const {name, value} = e.target


    setFormData( (prevData) =>({
      ...prevData, 
      [name]: value
    }))
  }


  const inputStyle = (field) =>{

    if(formData[field] != ""){
      return {backgroundColor: "white", color: "black"}
    }

  }

  const handleLogIn =  async (e) =>{
    e.preventDefault()



    try {

      await login(formData)


    } catch (error) {

      console.log("Login failed" , error)

      if(formData["email"] == "" || formData["password"] == ""){
        setErrorMessage("Please fill all the data")
        
      }else{
        setErrorMessage("Something went bad :(")
      }
      
    }
  }


  const [errorMessage, setErrorMessage] = useState(null)

  return (
    <main>

        <form className="signUpForm" onSubmit={handleLogIn}>

        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <strong style={{ padding: "15px" , fontSize: "25px"}}>Enter your account info:   </strong>
          <strong style={{ padding: "15px" , fontSize: "15px", color: "red"}}> {errorMessage} </strong>

        </div>





            <label htmlFor="email">  Email </label>
            <input
            type="text"
            id="email"
            name="email"

            className={styles.input}
            value={formData.email}
            onChange={handleInput}

            style= {inputStyle("email")}
            


            />
            
            
            <label htmlFor="password">  Password </label>
            <input
            type="password"
            id="password"
            name="password"
            className={styles.input}

            value={formData.password}
            onChange={handleInput}
            style = {inputStyle("password")}

            

            />


            <Link to= "/register"   className={styles.authLink}> Create account</Link>


            <button className={styles.button} type="submit"> <strong> Send</strong>    </button>

            

  


            
            



        </form>

    </main>
  );
}

export default LogIn
