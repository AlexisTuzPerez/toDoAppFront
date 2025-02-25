

import styles from "./Footer.module.css";

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer>
            <div className={styles.footer}>

                <strong style={{paddingTop: "10px", color: "white"}}>   Desarrollado por: Gabriel Alexis Tuz Pérez</strong>


                <Link to="https://github.com/AlexisTuz" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faGithub}   />
                    <strong>Github </strong>
                </Link>





    


            </div>

        </footer>
    )
}


export default Footer