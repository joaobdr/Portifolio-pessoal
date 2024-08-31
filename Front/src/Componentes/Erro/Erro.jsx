import React from 'react'
import { Link } from 'react-router-dom';
import style from './Erro.module.css'

const Erro = () => {
  return (
    <main className='container'>
        <section className={style.erro}>
            <h2>Pagina não encontrada</h2>
            <Link className={style.logo} to="/"><button>Voltar para home</button></Link>
        </section>
    </main>
  )
}

export default Erro
