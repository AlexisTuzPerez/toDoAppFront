

import PropTypes from "prop-types";
import { useState } from "react";
import SaveButton from "../saveButton/SaveButton";
import styles from "./TaskForm.module.css";

import { useEffect, useRef } from 'react';
import { addTask, updateTask } from "../../services/TasksRequest";

function TaskForm({setModalOpen, task , typeForm,loadProducts}){



    const nullTask = {
        title: "",
        description: "",
        priority: "",
        dueDate: ""
    }

    const initialTask = typeForm === "edit" ? {
        ...task,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : ""
    } : nullTask

    const [formData, setFormData] = useState(initialTask)




    const handleInput = (e) =>{

        const {name, value} = e.target

        setFormData( (prevData)=> ( {
            ...prevData,
            [name]: value
            
        }))









    }








    const handleSave =  async (e) =>{
        e.preventDefault()

        if(typeForm === "add"){


            await addTask(formData)

            
         
        } else{


            await updateTask(formData)
        
        }


        setModalOpen(false)
        loadProducts()





    
       

     
    }


    const inputStyle = (field) =>{


        if (formData[field] != ""){

            return {backgroundColor: "white", color: "black"}



        }
    
    }


    
    const textareaRef = useRef(null);
    useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    }, [formData.description]);



    const today = new Date().toISOString().split('T')[0];

    return(

        <form className={styles.form}  onSubmit={handleSave}>

            <strong className={styles.strong}>{typeForm === "add" ? "Add Task" : "Edit Task"}</strong>


            <label htmlFor="title"> Title </label> 
            

            <input 
                className={styles.input}
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInput}
                style={inputStyle("title")}
                required
    
            />


            <label htmlFor="priority"> Priotity</label>


            <select
                className={styles.input}
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInput}
                style={inputStyle("priority")}
                required



        
            >
                <option value="" disabled>  Priority    </option>
                <option value="HIGH">  High </option>
                <option value={"MEDIUM"}> Medium </option>
                <option value={"LOW"}> Low</option>


            </select>


            <label htmlFor="description" > Description</label>



            <textarea
                className={styles.input}
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInput}
                style={inputStyle("description")}
                ref={textareaRef}
                rows={1}
                required

            
            />


            <label htmlFor="dueDate"> Due Date  </label>


            <input
                className={styles.input}
                type="date"
                id="dueDate"
                name="dueDate" 
                min={today} 
                value={formData.dueDate}    
                onChange={handleInput}
                style={inputStyle("dueDate")}
                required


                
            
            />




            <SaveButton>  </SaveButton>
     


           
            


        </form>

    )
}

TaskForm.propTypes={
    setModalOpen: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    typeForm: PropTypes.string.isRequired,
    loadProducts: PropTypes.func.isRequired
    
}


export default TaskForm