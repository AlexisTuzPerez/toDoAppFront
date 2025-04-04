

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import styles from "./Auth.module.css"

function Register(){

    const {register} = useAuth()
    const navigate = useNavigate()



    const nullForm= { 
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: "USER"

    }


    const [formData, setFormData] =  useState(nullForm)






    const handleInput = (e) =>{

        const {name, value} = e.target


        setFormData( (prevData) => ({
            ...prevData, 
            [name]: value
        
        }))


       
    
    }

    const getInputStyle =  (field) => {


        if(formData[field] != ""){
            return {backgroundColor: "white", color: "black"}
        }



    }

    const handleRegister = async (e) =>{
        e.preventDefault()



        try { 
            await register (formData)

            navigate("/dashboard")

            
        } catch (error){

            console.log("Something went bad in the registration", error)


            if(Object.values(formData).some(value => value.trim() === "")){
                setErrorMessage("Please fill all the data")
                
              }else{
                setErrorMessage("Something went bad :(")
            }


            
        }
    }

    const [errorMessage, setErrorMessage] = useState(null)


    return (
        <main>
            <form className="signInForm" onSubmit={handleRegister}>

            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <strong style={{ padding: "15px" , fontSize: "25px"}}>Enter your account info:   </strong>
                <strong style={{ padding: "15px" , fontSize: "15px", color: "red"}}> {errorMessage} </strong>

            </div>

            
            <label htmlFor="firstname"> First Name </label>

            <input
            type="text"
            id="firstname"
            name="firstname"
            className={styles.input}
            value={formData.firstname}
            onChange={handleInput}
            style = {getInputStyle("firstname")}


            />




            <label htmlFor="lastname"> Last Name </label>
            <input
            type="text"
            id="lastname"
            name="lastname"
            className={styles.input}
            value={formData.lastname}
            onChange={handleInput}
            style = {getInputStyle("lastname")}



            />


            <label htmlFor="email">  Email </label>
            <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            value={formData.email}
            onChange={handleInput}
            style = {getInputStyle("email")}



            />


            <label htmlFor="password">  Password </label>
            <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            value={formData.password}
            onChange={handleInput}
            style = {getInputStyle("password")}



            />

            <Link to= "/login"   className={styles.authLink}> Log In</Link>


            <button className={styles.button} type="submit"> <strong> Send</strong>    </button>
            




        </form>

        </main>
    )
}


export default Register