import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './ResetStyles.css'
import Header from './Componentes/Header/Header';
import Home from './Componentes/Home/Home';
import Footer from './Componentes/Footer/Footer';
import Erro from './Componentes/Erro/Erro';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/*" element={<Erro />} /> 
      </Routes>
      <Footer />
    </BrowserRouter> 
    </>
  )
}

export default App
