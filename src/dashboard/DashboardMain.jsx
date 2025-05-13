

import { useEffect, useState } from "react"
import styles from "./Demo.module.css"


import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Aside from "./aside/Aside"


import { getTasks } from "../services/TasksRequest"
import AddButton from "./addButton/AddButton"
import DeleteButton from "./deleteButton/DeleteButton"
import EditButton from "./editButton/EditButton"


import axios from "axios"


const baseURL = import.meta.env.VITE_API_URL;


function DashboardMain(){
    const [tasks, setTasks] = useState([])
    const[filteredTasks, setFilteredTasks] = useState([])
    const [filterText, setFilterText] = useState("All Tasks")
    const [selectedTaskId, setSelectedTaskId] = useState(null);



  
    const loadProducts = async () =>{

        const response= await getTasks()
        setTasks(response)

    
        const filtered = response.filter( task => task.status === false)
        setFilteredTasks(filtered)
     
    }




    useEffect(() =>{      
        loadProducts()  
    },[])



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




    const changeStatus =  async (taskToUpdate) => {
        try {
            const updatedTask = {
                ...taskToUpdate,  
                status: !taskToUpdate.status 
            };    
            await axios.put(
                `${baseURL}/tasks/${taskToUpdate._id}`,
                updatedTask,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );        
            const updatedFilteredTasks = filteredTasks.map(task => 
                task._id === taskToUpdate._id ? {...task, status: !task.status } : task    
            );   
            const updatedTasks = tasks.map( task =>
                task._id === taskToUpdate._id ? {...task, status: !task.status} : task    
            );         
            setTasks(updatedTasks);                 
            setFilteredTasks(updatedFilteredTasks);
        } catch (error) {

            console.log("Error updating", error)
            
        } 

    };
        
       




    return(


        <>

        <main className={styles.mainContainer}>



  
            <Aside     setFilteredTasks={setFilteredTasks}  setFilterText={setFilterText} tasks={tasks}  ></Aside>

            



            <div className={`main ${styles.main}`}>


                <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "60vw", marginTop: "50px", marginBottom: "40px"}}>
                    <h2 style={{fontSize: "25px"}}>  {filterText} </h2>
                    <div style={{ display: "flex", flex: 1 }}></div>


                    <AddButton color={"blueButton"} loadProducts={loadProducts}></AddButton>
                   {/*  <LinkButton link={"/demo"} text={"Add Task"} color={"blueButton"} ></LinkButton> */}
                </div>

                

                <div className={styles.tasksBox}>

                    {filteredTasks.map(task =>(
                        

                        <div key={task._id} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>



                        <div  className={styles.task}>


                            <div  className={styles.priority}  style={priorityColor(task.priority, task.status)}/>


                            <button className={styles.checkbox} type="chekbox"  style={{backgroundColor: task.status ? "white" : "black" }}  onClick={ () => changeStatus(task)}/>


                            <div  style={{display: "flex", flexDirection: "column"}}>
                                    <strong className={styles.taskTitle}  style ={titleStatus(task.status)}> {task.title}</strong>
                                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                        <p className={styles.dueDate}> {new Date(task.dueDate).toISOString().split('T')[0]  }</p>

                                  

                                        <button className={styles.descriptionBtn} onClick={() => toggleDescription(task._id)}  >

                                            <FontAwesomeIcon icon={faEllipsis} className={styles.ellipsisIcon} />

                                        </button>   
                                </div>

                           </div>



                            <div style={{display:"flex", flex: "1"}}/>



                            <EditButton color="blueButton" task={task} loadProducts={loadProducts}></EditButton>


                            <DeleteButton color="whiteButton" loadProducts={loadProducts}  taskId={task._id}   ></DeleteButton>




                        </div>

                
                                                


                        <div className={styles.descriptionBox}  style={{ display: selectedTaskId === task._id ? "flex" : "none" }}> 

                            <p className={styles.descriptionP}>
                                {task.description}
                               
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


export default DashboardMain