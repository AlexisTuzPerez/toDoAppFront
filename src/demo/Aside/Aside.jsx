

import styles from "./Aside.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import LinkButton from "../../shared/linkButton/LinkButton";

function Aside({setFilteredTasks, tasks}){

    









    const filterTasks = (priority) =>{

        let filtered

        if(priority == "COMPLETED"){
            filtered = tasks.filter( task => task.status === true)
            return setFilteredTasks(filtered)

        } 

        
        filtered = tasks.filter( task => task.status === false)
        

        if(priority){

            filtered = filtered.filter( task => task.priority === priority )

        } 

        

        setFilteredTasks(filtered)

        


    }







    
    return (

        <aside className={styles.sideBar}>
 
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "5px"}}>
 
            <h1 className={styles.h1}>To Do App</h1>
                <div style={{ display: "flex", flex: 1, width:"30px" }}></div>
                <FontAwesomeIcon icon={faBars} className={styles.icon}/>
                     
 
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
 
            <LinkButton link={"/"} text={"Log Out"} color={"blueButton"} ></LinkButton>
                 
             <br/>
 
        </aside>       


   

                   
    )
}



Aside.propTypes ={
    setFilteredTasks: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
}

export default Aside;