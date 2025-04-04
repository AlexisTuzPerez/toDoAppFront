

import LinkButton from "../linkButton/LinkButton";
import styles from "./Header.module.css";




function Header(){
    return (
        <>

            <header>
                <div className={styles.header}>
                    <h1 className={styles.h1}> To Do App</h1>




                   {/*  <div className=""></div> */}
                    <div style={{ display: "flex", flex: 1 }}></div>


                    {/* <LinkButton link={"/demo"} text={"Demo"} color={"whiteButton"}></LinkButton> */}






                    <LinkButton link={"/logIn"} text={"Log In"} color={"blackButton"}></LinkButton>

                    <LinkButton link={"/register"} text={"Register"} color={"blueButton"}></LinkButton>



                    

                    




                    


                </div>
                    
            </header>

        </>
    )
}



export default Header