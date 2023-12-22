import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const NavBar = () => {

  const { user, logOut } = useContext(AuthContext)
  const [active, setActive] = useState("");

  const handleLogOut = () =>
    logOut()
      .then(() => console.log("User logged out"))
      .catch(error => console.log(error))


  const navItems =

    <>
      <li
        className={`${active === "Home" ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] mr-2 font-medium cursor-pointer`}
        onClick={() => setActive("Home")}
      >

        <ScrollLink to="banner" smooth={true} duration={500}>
          Home
        </ScrollLink>
      </li>
      <li
        className={`${active === "Whom" ? "text-white" : "text-secondary"
          } hover:text-white text-[18px]  mr-2 font-medium cursor-pointer`}
        onClick={() => setActive("Whom")}
      >

        <ScrollLink to="whom" smooth={true} duration={500}>
          Users
        </ScrollLink>
      </li>
      <li
        className={`${active === "Whom" ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
        onClick={() => setActive("Whom")}
      >

        <ScrollLink to="footer" smooth={true} duration={500}>
          Footer
        </ScrollLink>
      </li>
    </>

  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white  h-25 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>

        </div>
        <div className="flex flex-col md:flex-row ">
          <Link className="flex" to='/'>
            <div className=" flex justify-center">
              <img src="logo.png" alt="logo-ct" className="w-8" />
            </div>
            <h2 className="font-cust font-semibold text-xs md:font-bold md:text-xl flex items-center justify-center">Tasker</h2>

          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">
          {navItems}
        </ul>
      </div>



      <div className="navbar-end">
        {
          user ? <>

            <div className="p-2 gap-2 flex flex-col md:flex-row items-center hover:bg-black   rounded-lg ">
              <div className=" flex justify-center ">

                <div className="dropdown dropdown-bottom dropdown-end text-black">
                  <label tabIndex={0} className=" m-1">
                    <img
                      className="relative  inline-block h-6 w-6 rounded-md object-cover object-center "
                      alt="Image placeholder"
                      src={user.photoURL}
                    />
                  </label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><h2 className=""><FaUserAlt />{user.displayName}</h2></li>

                    <li><button className="  px-2 rounded-lg" onClick={handleLogOut}><FaSignOutAlt />Sign Out</button></li>
                  </ul>
                </div>


              </div>

            </div>

          </>
            :
            <NavLink className="hover:bg-black  px-2 rounded-lg" to='/register'>Sign Up</NavLink>
        }


      </div>


    </div>
  );
};

export default NavBar;