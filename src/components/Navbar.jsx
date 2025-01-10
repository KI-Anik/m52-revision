import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    
    return (
        <div className="flex justify-between items-center">
            <div>{user && user.email}</div>
            <div className="nav space-x-3">
                <Link to={'/'}>Home</Link>
                <Link to={'/career'}> Career</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className="logo flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="icon" />
                </div>
                {
                    user && user.email? 
                    <button onClick={logOut} className="btn btn-neutral rounded-none">logOut</button>
                    :
                    <Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;