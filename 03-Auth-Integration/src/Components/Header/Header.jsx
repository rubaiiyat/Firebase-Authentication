import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogout = () => {
    logOut();
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/signin"}>Sign in</NavLink>
      </li>
      <li>
        <NavLink to={"/signup"}>Sign up</NavLink>
      </li>
      <li>
        <NavLink to={"/orders"}>Oders</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl text-white"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl text-white">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  <FaUser /> user
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-white"
                >
                  <li>
                    <a className="text-lg ">{user.email}</a>
                  </li>
                  <li>
                    <a>Leaderboard</a>
                  </li>
                  <li>
                    <a>Student Analysis</a>
                  </li>
                </ul>
              </div>
              <a onClick={handleLogout} className="btn">
                Logout
              </a>
            </>
          ) : (
            <Link
              to="/signin"
              className="text-xl text-white flex gap-1 items-center"
            >
              <FaUser /> user
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
