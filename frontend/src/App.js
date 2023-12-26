import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext.js';

// Import Pages & Components
import Home from './pages/Home'
import Navbar  from './components/Navbar.js'
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';


function App() {
  const { user } =useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route
            path = "https://workout-buddy-frontend-eight.vercel.app/"
            element = {user ? <Home />: <Navigate to = 'https://workout-buddy-frontend-eight.vercel.app/login'/>}
          />
          <Route
            path = "https://workout-buddy-frontend-eight.vercel.app/login"
            element = {!user ? <Login />: <Navigate to = 'https://workout-buddy-frontend-eight.vercel.app/'/>}
          />
          <Route
            path = "https://workout-buddy-frontend-eight.vercel.app/signup"
            element = {!user ? <Signup />: <Navigate to = 'https://workout-buddy-frontend-eight.vercel.app/'/>}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;