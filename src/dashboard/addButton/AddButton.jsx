

import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./AddButton.module.css";

import Modal from "../../shared/modal/Modal";
import TaskForm from "../taskForm/TaskForm";




function AddButton({color, loadProducts}){

    const [isModalOpen, setModalOpen] = useState(false) 

    return(
        <>
            <button className={`${styles.button} ${styles[color]}`} onClick={() => setModalOpen(true)} > 
                <strong> Add Task</strong>

            </button>

            {isModalOpen && (

                <Modal  setModalOpen={setModalOpen}>
                    <TaskForm  setModalOpen={setModalOpen}  typeForm={"add"} loadProducts={loadProducts}></TaskForm>
                </Modal>


            )} 
        </>



    )
}


AddButton.propTypes = {
    color: PropTypes.string.isRequired,
    loadProducts: PropTypes.func.isRequired
    

}

export default AddButton