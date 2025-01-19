function Logout (props) {

    function handleLogout(e) {
        props.handleLogout();
        alert("You are now logged out")
    }
    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}


export default Logout