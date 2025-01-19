import './App.css'
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import UserProfile from '../components/UserProfile';
import Logout from '../components/Logout';
import { useEffect, useState } from 'react';
// so basically this is the route for our App entry, cool!

// What functionality do i need to implement?
// I need to keep track of the token:
// If the token exists in localstorage, the user is probably a logged in user
// else: The user is logged out, and can only view the homepage
// Routes? -> Not Needed
// Can do conditional rendering based on localStorage token value
// Can store the token in localStorage or as cookie as well


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      setLoggedIn(true);
    }
  }, [])

  const handleSignIn = (token) => {
    localStorage.setItem("token", token);
    setLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setLoggedIn(false)
  }

 
  return (
    <>
      { !loggedIn ? (
        <>
        <Signup />
        <Signin handleSignIn={handleSignIn}/>
        </>
      ) : (
        <>
        <UserProfile />
        <Logout handleLogout={handleLogout}/>
        </>
      ) }
    </>
  )
}

export default App
