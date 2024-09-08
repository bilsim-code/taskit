import { useState } from "react";

const Auth = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="max-w-[600px] mx-5 bg-sky-200 px-4 py-6 rounded shadow shadow-slate-500 ">
        <h2 className="text-2xl text-center mb-5 font-medium">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          className="shadow shadow-slate-500 rounded p-2 w-full mb-5 focus:outline focus:outline-gray-500"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="shadow shadow-slate-500 rounded p-2 w-full mb-5 focus:outline focus:outline-gray-500"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="shadow shadow-slate-500 rounded p-2 w-full mb-5 focus:outline focus:outline-gray-500"
        />
        <div className="flex items-center ml-[5%] gap-2 mb-5">
          <input type="checkbox" name="check" id="check" className="size-3.5" />
          <label htmlFor="check">Remember me</label>
        </div>

        <button
          type="submit"
          className="bg-black text-white p-1.5 w-1/2 max-nav-xxs:w-full grid mx-auto rounded uppercase font-medium "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
