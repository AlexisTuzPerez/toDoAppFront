


import PropTypes from "prop-types";
import styles from "./DeleteButton.module.css";





function DeleteButton({color, loadProducts}){


    const fetchDelete = () =>{


        console.log("delete")

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
    loadProducts: PropTypes.func.isRequired
}


export default DeleteButton;