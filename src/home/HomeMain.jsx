

import './Home.module.css';


import { faBoltLightning, faFaceLaughBeam, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import demoPhoto from "../assets/demoPhoto.png";
import styles from "./Home.module.css";

function HomeMain(){
    return (
        <main>
            <div className={`main ${styles.main}`}>



                <div className={styles.mainContent}>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div className={styles.mainText}> Master your tasks,  </div>

                        <div className={styles.mainText}>Conquer your dreams</div>


                        <div className={styles.secondaryText} >Elevate your productivity </div>



                    </div>

                    <div className={styles.imgContainer}>
                        <img src={demoPhoto}  className={styles.photo}  alt="Demo Photo" />

                        <img src="https://www.sorteorayo.com/lightb.webp" className={styles.light} alt='haz de luz'></img>
                    </div>

                </div>

            </div>

            <div className={`main ${styles.main}`}  style={{height: "100vh", justifyContent: "space-around", flexDirection: "column", borderTop: "white solid 2px"}}>


                <h1 className={styles.why}>Why choose us? </h1>



                <div className={styles.cardsBox} >


                    <div className={styles.card}> 

                        <FontAwesomeIcon icon={faFaceLaughBeam} className={styles.icon}/>

                       

                       <h2>Intuitive with ease</h2>

                        

                    </div>
                    <div className={styles.card}>

                        <FontAwesomeIcon icon={faBoltLightning} className={styles.icon}/>

                        <h2>Lightning Fast</h2>


                    </div>
                    <div className={styles.card}>

                        <FontAwesomeIcon icon={faGlobe} className={styles.icon} />

                        <h2>Wherever you need</h2>


                    </div>
                </div>

     






            </div>


        </main>
       
    )
}




export default HomeMain