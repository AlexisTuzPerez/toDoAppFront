

import PropTypes from "prop-types";
import { useState } from "react";
import SaveButton from "../saveButton/saveButton";
import styles from "./TaskForm.module.css";

import { useEffect, useRef } from 'react';


function TaskForm({setModalOpen, task , typeForm,loadProducts}){



    const nullTask ={

        title: "",
        description: "",
        priority: "",
        dueDate:""
     
    }


    const [formData, setFormData] = useState( typeForm == "edit" ? task : nullTask)




    const handleInput = (e) =>{

        const {name, value} = e.target

        setFormData( (prevData)=> ( {
            ...prevData,

            [name]: value

            
        }))



    }

    const handleSave =  async (e) =>{
        e.preventDefault()
        loadProducts()
        setModalOpen(false)
        console.log("save")
    }


    const inputStyle = (field) =>{


        if (formData[field] != ""){

            return {backgroundColor: "white", color: "black"}



        }



    
    }


    
    const textareaRef = useRef(null);
    useEffect(() => {
    if (textareaRef.current) {
        // Reset height to get the correct scrollHeight
        textareaRef.current.style.height = "auto";
        // Set new height based on content
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    }, [formData.description]);



    return(

        <form className={styles.form}  onSubmit={handleSave}>

            <strong className={styles.strong}>Add Task</strong>


            <label htmlFor="title"> Title </label> 


            <input 
                className={styles.input}
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInput}
                style={inputStyle("title")}
    
            />


            <label htmlFor="priority"> Priotity</label>


            <select
                className={styles.input}
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInput}
                style={inputStyle("priority")}


        
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
            
            />


            <label htmlFor="dueDate"> Due Date  </label>


            <input
                className={styles.input}
                type="date"
                id="dueDate"
                name="dueDate"  
                value={formData.dueDate}    
                onChange={handleInput}
                style={inputStyle("dueDate")}

                
            
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