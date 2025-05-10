import { Link } from "react-router";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { useAuth } from "../store"

export default function Nav() {
const { user, handleLogout } = useAuth(); 
  return (
    <div className="sticky w-full top-0 bg-white">
      <div className="flex justify-between items-center">
        <Link to="/" >
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden md:block">
          {user ? <div className="flex gap-4 items-center">
            <Link to="/new-task" className="hover:font-semibold">New Task</Link>
            <Link to="/all-task" className="hover:font-semibold">All Tasks</Link>
            <img src={avatar} alt="avatar" />
            <span onClick={handleLogout} className="cursor-pointer">Logout</span>
          </div> 
          :
          <div className="flex gap-4 items-cenetr">
            <Link to="/login" className="hover:font-semibold">
            Login
            </Link>
            <Link to="/register" className="hover:font-semibold">
            Register
            </Link>
          </div>}
        </div>
      </div>
    </div>
  );
}
