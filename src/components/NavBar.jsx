import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner"; // Optional: Use a spinner component for loading

const NavBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Successfully logged out!");
      navigate("/auth/login");
    });
  };

  if (loading) {
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Build Your Career</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center justify-center">
            <TailSpin
              height="40"
              width="40"
              color="#00BFFF"
              ariaLabel="loading"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            </>
          ) : null}
        </ul>
      </div>

      <div className="navbar-center hidden lg:flex">
        <a className="btn btn-ghost text-xl">Build Your Career</a>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <img
                src={user.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />

              <div className="absolute left-0 mt-2 w-32 text-center bg-white text-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <p>{user.displayName || "User"}</p>
              </div>
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-neutral rounded-none"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
