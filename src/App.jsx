import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Searchbar from './Components/Searchbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/search" element={<Searchbar />} />
      </Routes>
   <Footer />
    </Router>


    </>
  )
}

export default App
