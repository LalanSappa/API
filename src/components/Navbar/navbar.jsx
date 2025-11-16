import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    return(
        <>
            <center>
                <button onClick={() => navigate('/home')}>Home</button>
                <button onClick={() => navigate('/user')}>User API</button>
            </center>
        </>
    )
}
export default Navbar;