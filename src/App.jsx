import About from "./components/About"
import Eye from "./components/Eye"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white ">
     <Navbar />
     <LandingPage />
     <Marquee />
     <About />
     <Eye />
    </div>
  )
}

export default App