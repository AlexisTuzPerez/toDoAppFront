

import { useState } from "react"
import styles from "./Demo.module.css"

import LinkButton from "../shared/linkButton/LinkButton"


import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Aside from "./Aside/Aside"


function DemoMain(){




    const data = [
        {
            "id": 352,
            "user": {
                "id": 2,
                "firstname": "Alexis",
                "lastname": "Tuz",
                "email": "aa@gmail.com",
                "password": "$2a$10$ATE6E/TGpEVA2R7lkr5pG.3Mhwowtnndegaf6QMiExWUIg9g6bPbi",
                "role": "USER",
                "enabled": true,
                "credentialsNonExpired": true,
                "authorities": [
                    {
                        "authority": "USER"
                    }
                ],
                "username": "aa@gmail.com",
                "accountNonExpired": true,
                "accountNonLocked": true
            },
            "title": "Firssst ",
            "description": "first tast",
            "priority": "HIGH",
            "dateAdded": "2025-02-22",
            "dueDate": "2025-02-23",
            "status": false
        },
        {
            "id": 353,
            "user": {
                "id": 2,
                "firstname": "Alexis",
                "lastname": "Tuz",
                "email": "aa@gmail.com",
                "password": "$2a$10$ATE6E/TGpEVA2R7lkr5pG.3Mhwowtnndegaf6QMiExWUIg9g6bPbi",
                "role": "USER",
                "enabled": true,
                "credentialsNonExpired": true,
                "authorities": [
                    {
                        "authority": "USER"
                    }
                ],
                "username": "aa@gmail.com",
                "accountNonExpired": true,
                "accountNonLocked": true
            },
            "title": "Firssst ",
            "description": "first tast",
            "priority": "MEDIUM",
            "dateAdded": "2025-02-22",
            "dueDate": "2025-02-23",
            "status": false
        },
        {
            "id": 402,
            "user": {
                "id": 2,
                "firstname": "Alexis",
                "lastname": "Tuz",
                "email": "aa@gmail.com",
                "password": "$2a$10$ATE6E/TGpEVA2R7lkr5pG.3Mhwowtnndegaf6QMiExWUIg9g6bPbi",
                "role": "USER",
                "enabled": true,
                "credentialsNonExpired": true,
                "authorities": [
                    {
                        "authority": "USER"
                    }
                ],
                "username": "aa@gmail.com",
                "accountNonExpired": true,
                "accountNonLocked": true
            },
            "title": "Firssst ",
            "description": "first tast",
            "priority": "LOW",
            "dateAdded": "2025-02-22",
            "dueDate": "2025-02-23",
            "status": false
        },
        {
            "id": 403,
            "user": {
                "id": 2,
                "firstname": "Alexis",
                "lastname": "Tuz",
                "email": "aa@gmail.com",
                "password": "$2a$10$ATE6E/TGpEVA2R7lkr5pG.3Mhwowtnndegaf6QMiExWUIg9g6bPbi",
                "role": "USER",
                "enabled": true,
                "credentialsNonExpired": true,
                "authorities": [
                    {
                        "authority": "USER"
                    }
                ],
                "username": "aa@gmail.com",
                "accountNonExpired": true,
                "accountNonLocked": true
            },
            "title": "Firssst ",
            "description": "first tast",
            "priority": "LOW",
            "dateAdded": "2025-02-22",
            "dueDate": "2025-02-23",
            "status": false
        },  {
            "id": 405,
            "user": {
                "id": 2,
                "firstname": "Alexis",
                "lastname": "Tuz",
                "email": "aa@gmail.com",
                "password": "$2a$10$ATE6E/TGpEVA2R7lkr5pG.3Mhwowtnndegaf6QMiExWUIg9g6bPbi",
                "role": "USER",
                "enabled": true,
                "credentialsNonExpired": true,
                "authorities": [
                    {
                        "authority": "USER"
                    }
                ],
                "username": "aa@gmail.com",
                "accountNonExpired": true,
                "accountNonLocked": true
            },
            "title": "Firssst ",
            "description": "first tast",
            "priority": "LOW",
            "dateAdded": "2025-02-22",
            "dueDate": "2025-02-23",
            "status": false
        },
        {
            "id": 404,
            "user": {
                "id": 2,
                "firstname": "Alexis",
                "lastname": "Tuz",
                "email": "aa@gmail.com",
                "password": "$2a$10$ATE6E/TGpEVA2R7lkr5pG.3Mhwowtnndegaf6QMiExWUIg9g6bPbi",
                "role": "USER",
                "enabled": true,
                "credentialsNonExpired": true,
                "authorities": [
                    {
                        "authority": "USER"
                    }
                ],
                "username": "aa@gmail.com",
                "accountNonExpired": true,
                "accountNonLocked": true
            },
            "title": "Completed ",
            "description": "first tast",
            "priority": "LOW",
            "dateAdded": "2025-02-22",
            "dueDate": "2025-02-23",
            "status": true
        }
    ]




   const filtered = data.filter( task => task.status === false)


    const[filteredTasks, setFilteredTasks] = useState(filtered)




    

/* 


switch (selectedFilter) {
    case "high":
      return tasks.filter(task => task.priority === "high");
    case "low":
      return tasks.filter(task => task.priority === "low");
    default:
      return tasks;
      
      */


      



    const [selectedTaskId, setSelectedTaskId] = useState(null);


    const toggleDescription = (taskId) => {
        setSelectedTaskId(prevId => prevId === taskId ? null : taskId);
    };  



    const titleStatus = (status) =>{
        if(status){
            return {
                color:"#808080",
                textDecoration: "line-through"
            }
        }
        return
    }
       

    const priorityColor = (priority,status) => {

        if(status){


            return{
                backgroundColor: "white"




              
            }
        }
    
        if (priority === "HIGH" ) {

            return { 
                backgroundColor: "#9B0F0F",
                borderColor: "#9B0F0F"  
              };
            

        } else if (priority === "MEDIUM"){

            return{
                backgroundColor: "#A19510"
            }

        } else {
            return {
                backgroundColor: "#178928"
            }
        } 
        
   
       
   
       };
       




    return(


        <>

        <main className={styles.mainContainer}>



  
            <Aside     setFilteredTasks={setFilteredTasks}  tasks={data}  ></Aside>

            



            <div className={`main ${styles.main}`}>


                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "60vw", marginTop: "50px", marginBottom: "40px"}}>
                    <h2 style={{fontSize: "25px"}}>All Tasks</h2>
                    <div style={{ display: "flex", flex: 1 }}></div>
                    <LinkButton link={"/demo"} text={"Add Task"} color={"blueButton"} ></LinkButton>
                </div>

                

                <div className={styles.tasksBox}>

                    {filteredTasks.map(task =>(


                        <div key={task.id} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

             

                        <div  className={styles.task}>


                            <div  className={styles.priority}  style={priorityColor(task.priority, task.status)}/>
                            <button className={styles.checkbox} type="chekbox"  style={{backgroundColor: task.status ? "white" : "black" }}  />


                            <div  style={{display: "flex", flexDirection: "column"}}>
                                    <strong className={styles.taskTitle}  style ={titleStatus(task.status)}> {task.title}</strong>
                                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <p className={styles.dueDate}> {task.dueDate}</p>

                                  

                                        <button className={styles.descriptionBtn} onClick={() => toggleDescription(task.id)}  >

                                            <FontAwesomeIcon icon={faEllipsis} className={styles.ellipsisIcon} />

                                        </button>   
                                </div>

                           </div>



                            <div style={{display:"flex", flex: "1"}}/>


                            <button className={`${styles.btn} ${styles["blueButton"]}`}> <strong>Edit</strong>    </button>


                            <button className={`${styles.btn} ${styles["whiteButton"]}`}> <strong>Delete</strong>    </button>

                        </div>

                
                                                


                        <div className={styles.descriptionBox}  style={{ display: selectedTaskId === task.id ? "flex" : "none" }}> 

                            <p className={styles.descriptionP}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae natus amet expedita blanditiis mollitia quo ipsa, inventore, modi, accusantium neque porro minus debitis alias ipsum. Voluptate, quis! Voluptas, voluptate vero.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae natus amet expedita blanditiis mollitia quo ipsa, inventore, modi, accusantium neque porro minus debitis alias ipsum. Voluptate, quis! Voluptas, voluptate vero.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae natus amet expedita blanditiis mollitia quo ipsa, inventore, modi, accusantium neque porro minus debitis alias ipsum. Voluptate, quis! Voluptas, voluptate vero.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae natus amet expedita blanditiis mollitia quo ipsa, inventore, modi, accusantium neque porro minus debitis alias ipsum. Voluptate, quis! Voluptas, voluptate vero.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae natus amet expedita blanditiis mollitia quo ipsa, inventore, modi, accusantium neque porro minus debitis alias ipsum. Voluptate, quis! Voluptas, voluptate vero.

                            </p>



                            </div>

                        </div>
                


                  
                    ))}

                  

                </div>
  



              

            </div>

        </main>
        
        
        </>


      
    )
}


export default DemoMain