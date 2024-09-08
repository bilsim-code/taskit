import { Footer } from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import AddTask from "./Pages/AddTask"
import Auth from "./Pages/Auth"
import EditItem from "./Pages/EditItem"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit" element={<EditItem/>} />
        <Route path="/add-task" element={<AddTask/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;