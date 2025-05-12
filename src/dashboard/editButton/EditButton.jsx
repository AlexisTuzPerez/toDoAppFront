



import { useState } from "react"

import TaskForm from "../taskForm/TaskForm.jsx"

import PropTypes from "prop-types"
import styles from "./EditButton.module.css"

import Modal from "../../shared/modal/Modal"


function EditButton({color,task, loadProducts}){

    const [isModalOpen, setModalOpen] = useState(false)



    return (


        <>

            <button className={`${styles.button} ${styles[color]}`} onClick={() => setModalOpen(true)} > 

                        <strong> Edit</strong>
        
            </button>
        
            {isModalOpen && (
        

                <Modal  setModalOpen={setModalOpen}>
                        <TaskForm  setModalOpen={setModalOpen}  typeForm={"edit"}   task={task} loadProducts={loadProducts}></TaskForm>
                </Modal>
        
        
            )} 
        </>



        
    )
}


EditButton.propTypes ={
    color: PropTypes.string.isRequired,
    task: PropTypes.object.isRequired,
    loadProducts: PropTypes.func.isRequired
    
}



export default EditButton