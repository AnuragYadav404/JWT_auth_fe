import { useState } from "react"
import api from "../src/services/api";


function Signup () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleFormSubmit(e) {
        e.preventDefault();
        // This function submit the form, awaits for the response from the server
        // If everything goes well, the user is displayed of information you can now sign in
        try {
            const response = await api.post("/signup", {username, password});

            console.log(response.status)
            if(response.status === 200) {
                alert("Signup successfull, you can now sign in");
            }else {
                alert("Something went wrong, Signup Failed");
            }
        }catch (error) {
            alert(error.response?.data?.message || 'Signup failed!');
        }
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h2>Signup</h2>
                <input type="text" name="username" id="username_signup" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" name="password" id="username_password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


export default Signup