import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import HomePage from './pages/home'
import { useState } from 'react'
import Sidebar from './components/sidebar'
import WatchListPage from './pages/watchlist'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
    if (isAuthenticated) {
      return element
    } else {
      return <Navigate to="/" replace />
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
        <Route path="/watchlist" element={<ProtectedRoute element={<WatchListPage />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
