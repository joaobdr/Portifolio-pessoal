import React from 'react'
import style from './css/Projetos.module.css'

const Projetos = () => {
  return (
    <section className={style.projetos}>
        <h2 className={style.titulo}>Projetos</h2>

        <ul className={style.link_projetos}>
            <li>
                <div className={style.slide_projeto}>

                </div>
                <div className={style.descricao_projeto}>
                    <h3 className={style.titulo_slide}>Projeto 01</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque unde aspernatur eligendi esse laudantium fugiat quam debitis itaque? Tempora perspiciatis nam in totam ab itaque eaque doloremque, corrupti sint labore!</p>
                
                    <button><img src="../../src/assets/img/eye.svg" alt="" /></button>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default Projetos
