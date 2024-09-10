import { Link, useNavigate } from "react-router-dom";
import task_list_logo from "../assets/task-it_logo.png";
import profile from "../assets/profile.jpg";
import { Search, Menu, X, ChevronDown } from "react-feather";
import {} from "react-icons/md";
import {  useContext, useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler'
import { AppContext } from "./AppContext";

const Navbar = () => {
  const [sidebarOn, setSidebarOn] = useState(false);
  const {token, } = useContext(AppContext);
  const navigate = useNavigate();
  const logoutFunc = () => {
    localStorage.removeItem("token", token);
    navigate("/")
  }
  return (
    <nav className=" bg-sky-300 z-50 sticky top-0 py-2 mb-10">
      <section className="flex items-center justify-between max-w-4xl mx-auto">
      <Menu
          role="button"
          className="ml-4 sm:hidden"
          onClick={() => setSidebarOn(prev => !prev)}
        />
        <OutsideClickHandler onOutsideClick={() => setSidebarOn(false)}>
        <ul
          className={`${sidebarOn ? "max-sm:translate-x-0" : ""} transition-all duration-0 max-sm:-translate-x-80 absolute top-20 left-4 max-nav-xxs:left-0 shadow shadow-gray-500 p-2 w-[35%] max-nav-xs:w-[60%] max-nav-xxs:w-[90%] h-52 rounded-md flex flex-col gap-2 z-10 sm:relative sm:bg-transparent sm:shadow-none sm:flex-row sm:h-auto sm:top-auto sm:left-auto sm:w-auto sm:gap-5 bg-orange-50`}
        >
          <X
            className="cursor-pointer sm:hidden"
            onClick={() => setSidebarOn((prev) => !prev)}
          />
          <li className="font-bold text-lg max-nav-xxs:text-base">
            <Link
              to={"/home"}
              className="hover:text-sky-300 sm:hover:text-slate-500 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li className="font-bold text-lg max-nav-xxs:text-base">
            <Link
              to={"/about"}
              className="hover:text-sky-300 sm:hover:text-slate-500 transition-all duration-300"
            >
              About
            </Link>
          </li>
          <li className="group w-fit relative sm:fixed sm:top-2.5 sm:right-[20%]  sm:w-[60px]">
            <div className="relative border rounded-md flex items-center gap-1 cursor-pointer p-1 bg-white">
              <img
                src={profile}
                alt=""
                className="w-7 rounded-full cursor-pointer"
              />
              <div className="size-1.5 bg-green-600 absolute left-6 bottom-1 rounded-full"></div>
              <ChevronDown size={'16'}/>
            </div>
            <div className="hidden group-hover:block mt-4 ">
              <button
                className="bg-red-700 p-1.5 font-semibold rounded px-2 text-white hover:text-slate-400"
                onClick={logoutFunc}
              >
                Logout
              </button>
            </div>
          </li>
        </ul>
        </OutsideClickHandler>

        <Link to={"/home"}>
          <img
            src={task_list_logo}
            alt="task_list_logo"
            title="task_list_logo"
            className="w-14"
          />
        </Link>
        <ul className="pr-3">
          <li>
            <Search
              className="max-nav-xxs:size-4 hover:scale-110 transition-all"
              role="button"
            />
          </li>
          {/*     <li>
                <div>
                    <img src={profile} alt="" className="w-10 rounded-full" /> 
                </div>
                <div>
                    <a href="/logout">Logout</a>
                </div>
            </li> */}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
