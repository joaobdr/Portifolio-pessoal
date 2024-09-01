import React from 'react'
import style from './css/Intro.module.css'


const Intro = () => {
  const [visita, setVisita] = React.useState("**")

  React.useEffect(() =>{
    const timer = setInterval(async () => {
      await fetch('http://localhost:5000/api').then(x=>x.json()).then(x => setVisita(x));
    }, 1000);
    return () => {clearInterval(timer)}
  }, [])
  
  

  
  return (
    <section className={style.intro}>      
      <h2 className={style.titulo_intro}>João Victor Barbosa</h2>
      <img className={style.img_intro} src="../../src/assets/img/intro.svg" alt="" />

      <ul className={style.ul_intro}>
        <li><a href="#"><img src="../../src/assets/img/email.svg" alt="" /></a></li>
        <li><a href="#"><img src="../../src/assets/img/whats.svg" alt="" /></a></li>
        <li><a href="#"><img src="../../src/assets/img/link.svg" alt="" /></a></li>
      </ul>
      <span>Visitantes: {visita.visitas}</span>

    </section>
  )
}

export default Intro
