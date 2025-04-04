


import PropTypes from "prop-types";
import styles from "./DeleteButton.module.css";

import { deleteTask } from "../../services/TasksRequest";


function DeleteButton({color, loadProducts, taskId}){


    const fetchDelete =  async () =>{

        await deleteTask(taskId)
        loadProducts()


     


        


    }

    return(


        <button className={`${styles.button} ${styles[color]}`}  onClick={() => fetchDelete()}> 
        <strong>Delete</strong>
        
        </button>

    )
}



DeleteButton.propTypes ={
    color: PropTypes.string.isRequired,
    loadProducts: PropTypes.func.isRequired,
    taskId: PropTypes.number.isRequired
}


export default DeleteButton;