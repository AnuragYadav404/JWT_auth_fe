import { useEffect, useState } from "react"
import api from "../src/services/api";

function UserProfile () {
    // here i need to fetch the information based on token value from localstorage
    // assuming the user is logged in

    // will use useEffect to sync information

    const [info, setInfo] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/me");
                console.log(response.data.message.username)
                setInfo(response.data.message.username)
            }catch(error) {
                console.log(error)
                alert(error.response?.data?.message || 'Failed to fetch user data');
            }
        };
        fetchData();
    }, [])

    if(!info) {
        return <p>Loading</p>
    }

    return (
        <div>
          <h2>Welcome!</h2>
          <p>{info}</p>
        </div>
      );
}


export default UserProfile