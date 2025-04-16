import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './components/Home'; //exmaple of an import
// import './App.css'

// import { Home, About, Contact } from './pages/index.js'; // import all pages from index.js
import { Home, About, Contact } from './pages'; // import all pages from index.js



function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>

      {/* example */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


    </Routes>
  </Router>
  )
}

export default App
