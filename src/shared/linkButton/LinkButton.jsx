


import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './LinkButton.module.css';


function LinkButton({text, link, color}){

    return (
        <Link to={link} className={`${styles.linkButton} ${styles[color]}`}> <strong>{text}</strong>  </Link>

     


    )






}

LinkButton.propTypes = {
    text: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired
}

export default LinkButton