import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import AddTask from "./Pages/AddTask";
import Auth from "./Pages/Auth";
import EditItem from "./Pages/EditItem";
import Home from "./Pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Task from "./Pages/Task";

const App = () => {
  const isAuthenticated = () => {
   return !!localStorage.getItem("token")
   //in other words:
   /* if(localStorage.getItem("token")) {
   return true;
   } 
   else {
   return false;
  }*/
  }
  return ( 
    <div className="">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated() ? "/home" : "/auth"} replace />} />
        <Route path="/auth" element={isAuthenticated() ? <Navigate to={'/home'} replace /> : <Auth />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/edit/:id" element={<EditItem />} />
                <Route path="/add-task" element={<AddTask />} />
                <Route path="/task/:id" element={<Task/>} />
              </Routes>
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
