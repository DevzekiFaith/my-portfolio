import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import FeatureProject from './Component/Features/FeatureProject'
import NotFoundPage from './Component/NotFoundPage/NotFoundPage'
import Navbar from './Component/NavBar/Navbar'
import Footer from './Component/Footer/Footer'
import About from './Component/About Me/About'

function App() {


  return (
    <div className="bg-slate-950 h-screen w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/FeatureProject" element={<FeatureProject />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
