import { useState } from "react"
import api from "../src/services/api";

function Signin (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleFormSubmit(e) {
        e.preventDefault();
        // This function submit the form, awaits for the response from the server
        // If everything goes well, the user is displayed of information you can now sign in
        try {
            const response = await api.post("/signin", {username, password});
            const token = response.data.token;
            if(response.status === 200 && token) {
                props.handleSignIn(token);
                alert("Signin successfull!");
            }else {
                alert("Something went wrong, Signin Failed");
            }
        }catch (error) {
            console.log(error)
            alert(error.response?.data?.message || 'Signin failed!');
        }
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h2>Signin</h2>
                <input type="text" name="username" id="username_signin" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" id="password_signin" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


export default Signin