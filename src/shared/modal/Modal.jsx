

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

import styles from "./Modal.module.css";

function Modal ({ setModalOpen, children}) {





    return(

        <>

            <div className= {styles.modalOverlay} onClick={() => setModalOpen(false)}>

                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

                    <button className={`${styles.crudButton} ${styles.closeButton} `} onClick={() =>  setModalOpen(false) } >
                        <FontAwesomeIcon icon={faXmark} />

                    </button>

                    {children}





                </div>
            </div>
        </>

    )
}

Modal.propTypes ={

    setModalOpen: PropTypes.func.isRequired,
    children: PropTypes.any

}

export default Modal