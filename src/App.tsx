import { initializeApp } from 'firebase/app'
import { config } from './config/config'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar/Navbar'
import Household from './pages/Household'
import ProtectedRoutes from './ProtectedRoutes'


initializeApp(config.firebaseConfig)

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/household' element={<Household />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
