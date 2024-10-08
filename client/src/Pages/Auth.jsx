import { useContext, useState } from "react";
import { AppContext } from "../Components/AppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
  const [status, setStatus] = useState("login");

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  const { url, setToken } = useContext(AppContext);

  const handleOnChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (status === "login") {
      newUrl += "/auth/login";
    } else {
      newUrl += "/auth/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      const token = response.data.token;
      setToken(token);
      localStorage.setItem("token", token);
      navigate("/home");
      toast.success(response.data.message);
    } else {
      console.log("Auth failed");
      toast.error(response.data.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen max-nav-xxs:items-start">
      <form
        onSubmit={handleSubmit}
        className="w-[600px] max-w-full mx-5 bg-sky-200 px-4 max-nav-xxs:px-1 max-nav-xxs:mx-1 py-6 rounded shadow shadow-slate-500"
      >
        <h2 className="text-2xl text-center mb-5 font-medium">
          {status === "login" ? "Login" : "Register"}
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          className="shadow shadow-slate-500 rounded p-2 w-full mb-5 focus:outline focus:outline-gray-500 "
          onChange={handleOnChange}
          value={data.username}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="shadow shadow-slate-500 rounded p-2 w-full mb-5 focus:outline focus:outline-gray-500"
          onChange={handleOnChange}
          value={data.password}
        />
        {status !== "login" ? (
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="shadow shadow-slate-500 rounded p-2 w-full mb-5 focus:outline focus:outline-gray-500"
            onChange={handleOnChange}
            value={data.email}
          />
        ) : null}

        <div className="flex items-center ml-[5%] gap-2 mb-5">
          <input type="checkbox" name="check" id="check" className="size-3.5" />
          <label htmlFor="check">Remember me</label>
        </div>

        <button
          type="submit"
          className="bg-black text-white p-1.5 w-1/2 max-nav-xxs:w-full grid mx-auto rounded uppercase font-medium "
        >
          {status === "login" ? "Login" : "Register"}
        </button>
        {status === "login" ? (
          <p className="mt-4 text-center">
            Don&apos;t have an account?
            <span
              className="text-purple-900 font-medium cursor-pointer text-lg border-b border-purple-900 pl-1"
              onClick={() => setStatus("register")}
            >
              Register
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center">
            Already have an account?
            <span
              className="text-purple-900 font-medium cursor-pointer text-lg border-b border-purple-900 pl-1"
              onClick={() => setStatus("login")}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Auth;
