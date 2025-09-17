import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import NotFoundPage from './Component/NotFoundPage/NotFoundPage'
import Navbar from './Component/NavBar/Navbar'
import Footer from './Component/Footer/Footer'
import About from './Component/About Me/About'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full transition-colors duration-300">
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
    </ThemeProvider>
  )
}

export default App
