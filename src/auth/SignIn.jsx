
import styles from "./Auth.module.css";

import LinkButton from "../shared/linkButton/LinkButton";


function SignIn() {
  return (
    <main>

        <form className="signUpForm">

        <strong style={{ paddingBottom: "15px", fontSize: "35px" }}>Enter your account info:</strong>





            <label htmlFor="email">  Email </label>
            <input
            type="text"
            id="email"
            name="email"
            className={styles.input}
            
            placeholder="Email"
            required
            />
            
            
            <label htmlFor="password">  Password </label>
            <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            
            placeholder="Password"
            required
            />


            {/* más adelante se agregará un boton para submit */}
            <LinkButton link={"/demo"} text={"Sign In"} color={"blueButton"}></LinkButton>
            



        </form>

    </main>
  );
}

export default SignIn
