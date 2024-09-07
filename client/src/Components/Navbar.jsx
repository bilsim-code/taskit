import { Link } from "react-router-dom";
import task_list_logo from "../assets/task-it_logo.png";
import profile from "../assets/profile.jpg";
import { Search, Menu, X } from "react-feather";
import {} from "react-icons/md";
import {  useState } from "react";

const Navbar = () => {
  const [sidebarOn, setSidebarOn] = useState(false);

  return (
    <nav className=" bg-sky-300 z-50 sticky top-0 py-2">
      <section className="flex items-center justify-between max-w-4xl mx-auto">
        <ul
          className={`${sidebarOn ? "max-sm:translate-x-0" : ""} transition-all duration-0 max-sm:-translate-x-80 absolute top-20 left-4 max-nav-xxs:left-0 bg-white shadow shadow-gray-500 p-2 w-[35%] max-nav-xs:w-[60%] max-nav-xxs:w-[90%] h-52 rounded-md flex flex-col gap-2 z-10 sm:relative sm:bg-transparent sm:shadow-none sm:flex-row sm:h-auto sm:top-auto sm:left-auto sm:w-auto sm:gap-5`}
        >
          <X
            className="cursor-pointer sm:hidden"
            onClick={() => setSidebarOn((prev) => !prev)}
          />
          <li className="font-bold text-lg max-nav-xxs:text-base">
            <Link
              to={"/"}
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
          <li className="group w-fit relative sm:fixed sm:top-2.5 sm:right-[20%]  sm:w-[40px]">
            <div className="relative">
              <img
                src={profile}
                alt=""
                className="w-10 rounded-full cursor-pointer"
              />
              <div className="size-2.5 bg-green-600 absolute left-8 bottom-0 rounded-full"></div>
            </div>
            <div className="hidden group-hover:block mt-4 ">
              <a
                href="/logout"
                className="bg-red-700 p-1.5 font-semibold rounded px-2 text-white hover:text-slate-400"
              >
                Logout
              </a>
            </div>
          </li>
        </ul>

        <Menu
          role="button"
          className="ml-4 sm:hidden"
          onClick={() => setSidebarOn(prev => !prev)}
        />

        <Link to={"/"}>
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
