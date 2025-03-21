

import { useState } from "react"
import styles from "./Demo.module.css"



import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Aside from "./aside/Aside"


import AddButton from "./addButton/AddButton"
import DeleteButton from "./deleteButton/DeleteButton"
import EditButton from "./editButton/EditButton"


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
            "title": "second ",
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
            "title": "third ",
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
            "title": "fourth ",
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
            "title": "fifth ",
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




    const [tasks, setTasks] = useState(data)


    const loadProducts = async () =>{


        setTasks(data)


        console.log("loadProducts")

    }


    const filtered = data.filter( task => task.status === false)


    const [filterText, setFilterText] = useState("All Tasks")


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

    const changeStatus = (taskToUpdate) => {
        // Update the tasks array
        const updatedFilteredTasks = filteredTasks.map(task => 
          task.id === taskToUpdate.id ? {...task, status: !task.status} : task


        );


        const updatedTasks = tasks.map( task =>
            task.id === taskToUpdate.id ? {...task, status: !task.status} : task

        );


        //fetch  and load tasks rather than  setTasks
        setTasks(updatedTasks); 

        //loadProducts
  
        // Update filteredTasks to exclude completed tasks
        setFilteredTasks(updatedFilteredTasks/* .filter(task => !task.status) */);
    };
        
       




    return(


        <>

        <main className={styles.mainContainer}>



  
            <Aside     setFilteredTasks={setFilteredTasks}  setFilterText={setFilterText} tasks={tasks}  ></Aside>

            



            <div className={`main ${styles.main}`}>


                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "60vw", marginTop: "50px", marginBottom: "40px"}}>
                    <h2 style={{fontSize: "25px"}}>{filterText}</h2>
                    <div style={{ display: "flex", flex: 1 }}></div>


                    <AddButton color={"blueButton"} loadProducts={loadProducts}></AddButton>
                   {/*  <LinkButton link={"/demo"} text={"Add Task"} color={"blueButton"} ></LinkButton> */}
                </div>

                

                <div className={styles.tasksBox}>

                    {filteredTasks.map(task =>(


                        <div key={task.id} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

             

                        <div  className={styles.task}>


                            <div  className={styles.priority}  style={priorityColor(task.priority, task.status)}/>


                            <button className={styles.checkbox} type="chekbox"  style={{backgroundColor: task.status ? "white" : "black" }}  onClick={ () => changeStatus(task)}/>


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



                            <EditButton color="blueButton" task={task} loadProducts={loadProducts}></EditButton>


                            <DeleteButton color="whiteButton" loadProducts={loadProducts}></DeleteButton>




                        </div>

                
                                                


                        <div className={styles.descriptionBox}  style={{ display: selectedTaskId === task.id ? "flex" : "none" }}> 

                            <p className={styles.descriptionP}>
                                {task.description}
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