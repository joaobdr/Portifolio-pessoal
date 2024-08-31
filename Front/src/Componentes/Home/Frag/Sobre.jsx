import React from 'react'
import style from './css/Sobre.module.css'

const Sobre = () => {
  return (
        <section className={style.sobre}>
            <h2 className={style.titulo}>Sobre</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ipsam vero nobis quidem, perspiciatis, amet rerum dignissimos illo veniam quos inventore obcaecati accusamus quod pariatur. Accusantium deleniti quibusdam assumenda voluptatum?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quis sapiente architecto unde eaque ab qui est eos harum quos, eveniet vero cumque ex assumenda exercitationem culpa, voluptatum officiis non!</p>
            <button className={style.btn_mais}>MAIS</button>
        </section>
  )
}

export default Sobre
