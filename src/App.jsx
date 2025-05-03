import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Shared/Header'
import Footer from './Shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
      <div className="App">
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          <p>
            Click on the Vite and React logos to learn more
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div className="logo">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <h2>Vite + React</h2>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          Click on the Vite and React logos to learn more
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
   <Footer />
    </>
  )
}

export default App
