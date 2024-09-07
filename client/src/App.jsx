import { Footer } from "./Components/Footer"
import Navbar from "./Components/Navbar"
import About from "./Pages/About"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App