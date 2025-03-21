



import styles from "./SaveButton.module.css";


import PropTypes from "prop-types";


function SaveButton({disabled}){

    return (
        <button className={styles.button}  disabled={disabled} type="submit" id="save">  

            <strong> Save</strong>
        
        
        </button>
    )
        

}




SaveButton.propTypes = {
    disabled: PropTypes.bool.isRequired
}

export default SaveButton