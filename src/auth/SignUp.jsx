

import styles from "./Auth.module.css"

import LinkButton from "../shared/linkButton/LinkButton"

function SignUp(){
    return (
        <main>
            <form className="signInForm">
            <strong style={{ paddingBottom: "15px", fontSize: "35px" }}>Enter your info</strong>
            <label htmlFor="firstName"> First Name </label>
            <input
            type="text"
            id="firstName"
            name="firstName"
            className={styles.input}

            placeholder="First Name"
            required
            />


            <label htmlFor="lastName"> Last Name </label>
            <input
            type="text"
            id="lastName"
            name="lastName"
            className={styles.input}

            placeholder="Last Name"
            required
            />


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
            <LinkButton link={"/demo"} text={"Sign Up"} color={"blueButton"}></LinkButton>
            



        </form>

        </main>
    )
}


export default SignUp