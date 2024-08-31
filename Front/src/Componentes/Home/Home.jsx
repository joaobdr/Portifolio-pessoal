import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Intro from './Frag/Intro';
import Habilidades from './Frag/Habilidades';
import Sobre from './Frag/Sobre';
import Projetos from './Frag/Projetos';


const Home = () => {
  return (
    <main className='container'>
        <Intro />
        <Habilidades />
        <Projetos />
        <Sobre />
    </main>
  )
}

export default Home
