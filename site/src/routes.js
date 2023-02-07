import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './pages/usuario/landingPage'

export default function Index(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
    );
}