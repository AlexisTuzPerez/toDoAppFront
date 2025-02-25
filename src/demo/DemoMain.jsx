

import { useState } from "react"
import styles from "./Demo.module.css"

import LinkButton from "../shared/linkButton/LinkButton"


import { faBars, faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function DemoMain(){

    const tasks = [
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
        }
    ]
      



    const [selectedTaskId, setSelectedTaskId] = useState(null);


    const toggleDescription = (taskId) => {
        setSelectedTaskId(prevId => prevId === taskId ? null : taskId);
    };  
       

    const priorityColor = (priority) => {

        console.log(tasks)

            

       
        if (priority === "HIGH" ) {

            return { 
                backgroundColor: "#9B0F0F",
                borderColor: "#9B0F0F"  
              };
            

        } else if (priority === "MEDIUM"){

            return{
                backgroundColor: "#A19510"
            }

        } else{
            return{
                backgroundColor: "#178928"
            }
        }

        
   
       
   
       };
       




    return(


        <>

        <main className={styles.mainContainer}>

            <aside className={styles.sideBar}>

                <div style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "5px"}}>

                    <h1 className={styles.h1}>To Do App</h1>
                    <div style={{ display: "flex", flex: 1, width:"30px" }}></div>
                    <FontAwesomeIcon icon={faBars} className={styles.icon}/>
                    

                </div>


                <nav className={styles.nav}>
                    <ul>
                        <li>All Tasks</li>
                        <li>High Priority</li>
                        <li>Medium Priority</li>
                        <li>Low Priority</li>
                        <li>Completed</li>
                    </ul>
                </nav>

                <br/>

                <LinkButton link={"/"} text={"Log Out"} color={"blueButton"} ></LinkButton>
                
                <br/>


                


       




            </aside>



            <div className={`main ${styles.main}`}>


                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "60vw", marginTop: "50px", marginBottom: "40px"}}>

                    <h2 style={{fontSize: "25px"}}>All Tasks</h2>

                    <div style={{ display: "flex", flex: 1 }}></div>

                    <LinkButton link={"/demo"} text={"Add Task"} color={"blueButton"} ></LinkButton>


                </div>













                <div className={styles.tasksBox}>

                    {tasks.map(task =>(


                        <div key={task.id} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

             

                        <div  className={styles.task}>


                            <div  className={styles.priority}  style={priorityColor(task.priority)}/>
                            <button className={styles.checkbox} type="chekbox"   />


                            <div  style={{display: "flex", flexDirection: "column"}}>
                                    <strong className={styles.taskTitle}> {task.title}</strong>
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