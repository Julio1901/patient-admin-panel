import { Login } from "./pages/login/login"
import './global.css'
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import { MainPanel } from "./pages/mainPanel/main-panel";
import { QueryClientProvider, QueryClient } from "react-query";
import { Patients } from "./pages/patients/patients";

const client = new QueryClient()

function App() {
  return(
    <QueryClientProvider client={client}>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/main-panel" element={<MainPanel />} />
              <Route path="/patients-list" element={<Patients/>} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </BrowserRouter>
    </QueryClientProvider>
    
  )
}

export default App
