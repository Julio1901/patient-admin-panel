import { Login } from "./pages/login/login"
import './global.css'
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import { MainPanel } from "./pages/mainPanel/main-panel";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main-panel" element={<MainPanel />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
