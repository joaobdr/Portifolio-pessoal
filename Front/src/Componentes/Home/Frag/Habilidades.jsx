import React from 'react'
import style from './css/Habilidades.module.css'

const Habilidades = () => {
  return (
    <section className={style.habilidades}>
        <h1 className={style.titulo}>Habilidades</h1>
        {/* <img className={style.sublinhado} src="../../src/assets/img/titulo.svg" alt="" /> */}

        <h2 className={style.subtitulo}>Front End</h2>
        <ul className={style.img_linguagem}>
            <li>
                <img src="../../src/assets/img/html.svg" alt="" />
                <span>HTML</span>
            </li>

            <li>
                <img src="../../src/assets/img/css.svg" alt="" />
                <span>css</span>
            </li>

            <li>
                <img src="../../src/assets/img/js.svg" alt="" />
                <span>JavaScript</span>
            </li>

            <li>
                <img src="../../src/assets/img/react.svg" alt="" />
                <span>React</span>
            </li>
        </ul>

        <h2 className={style.subtitulo}>Back End</h2>
        <ul className={style.img_linguagem}>
            <li>
                <img src="../../src/assets/img/node.svg" alt="" />
                <span>Node js</span>
            </li>
        </ul>
    </section>
  )
}

export default Habilidades
