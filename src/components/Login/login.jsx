import { Navigate } from "react-router-dom";

function login(){
    return(
        <>
            <center>
                <h1>Login Page</h1>
                <input type="text" placeholder='Username' /><br /><br />
                <input type="password" placeholder='Password' /><br /><br />
                <button onClick={() => Navigate('/navbar')}>Login</button>
            </center>
        </>
    )
}
export default login;