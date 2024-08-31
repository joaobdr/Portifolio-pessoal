import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.footer_container}`}>
        <span className={`${style.creditos}`}>© Copyright João Victor Barbosa</span>
        <p><i>ver: 1.0</i></p>
      </div>          
    </footer>
  )
}

export default Footer
