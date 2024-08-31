import React from 'react'
import style from './css/Intro.module.css'


const Intro = () => {
  return (
    <section className={style.intro}>
      <h2 className={style.titulo_intro}>João Victor Barbosa</h2>
      <img className={style.img_intro} src="../../src/assets/img/intro.svg" alt="" />

      <ul className={style.ul_intro}>
        <li><a href="#"><img src="../../src/assets/img/email.svg" alt="" /></a></li>
        <li><a href="#"><img src="../../src/assets/img/whats.svg" alt="" /></a></li>
        <li><a href="#"><img src="../../src/assets/img/link.svg" alt="" /></a></li>
      </ul>
    </section>
  )
}

export default Intro
