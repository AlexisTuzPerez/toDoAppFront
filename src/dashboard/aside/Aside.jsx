

import styles from "./Aside.module.css";


import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

function Aside({setFilteredTasks, setFilterText,tasks}){

    const {user,logout} = useAuth()

    const navigate = useNavigate()



    const handleLogout =  async () =>{


        try {
            await logout()
            navigate("/")
            console.log("logout succesful")

            
        } catch (error) {

            console.log("Error in the log out", error)
            
        }



    }

    









    const filterTasks = (priority) =>{

        let filtered

        if(priority == "COMPLETED"){
            filtered = tasks.filter( task => task.status === true)

            setFilterText(priority)

            
            return setFilteredTasks(filtered)

        } 

        
        filtered = tasks.filter( task => task.status === false)
        setFilterText("All Tasks")
        

        if(priority){

            setFilterText(priority)
            filtered = filtered.filter( task => task.priority === priority )

        } 




        

        setFilteredTasks(filtered)

        


    }







    
    return (

        <aside className={styles.sideBar}>
 
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "5px"}}>
 
            {/* <FontAwesomeIcon icon={faUser} className={styles.icon}/> */}
            <h1 className={styles.h1}>{user}</h1>
        {/*         <div style={{ display: "flex", flex: 1, width:"30px" }}></div>
                 */}
                     
 
            </div>
 
 
            <nav className={styles.nav}>
                <ul>

                    <li onClick={() => filterTasks()}>  All Tasks   </li>
                    <li onClick={() => filterTasks("HIGH")}>High Priority</li>
                    <li onClick={() => filterTasks("MEDIUM")}>Medium Priority</li>
                    <li onClick={() => filterTasks("LOW")}>Low Priority</li>
                    <li onClick={() => filterTasks("COMPLETED")}>Completed</li>
                </ul>
            </nav>
 
            <br/>

            <button className={styles.button} onClick={handleLogout}> <strong> Log Out</strong>    </button>
 
           {/*  <LinkButton link={"/"} text={"Log Out"} color={"blueButton"} ></LinkButton> */}
                 
             <br/>
 
        </aside>       


   

                   
    )
}



Aside.propTypes ={
    setFilteredTasks: PropTypes.func.isRequired,
    setFilterText: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}

export default Aside;