import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Projects from './views/Projects';
import Login from './views/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={localStorage.getItem('token') ? <Projects /> : <Login />} />
      </Routes>
    </Router>
  )
}

export default App
