import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Pages & Components
import Home from './pages/Home'
import Navbar  from './components/Navbar.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route
            path = "/"
            element = {<Home />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;