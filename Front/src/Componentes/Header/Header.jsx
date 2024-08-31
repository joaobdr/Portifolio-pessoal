import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
        <header className={style.header}>
            <nav className={`container `}>
                <Link className={style.logo} to="/"><h1>BDR</h1></Link>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#" className={style.contato}>Contato</a></li>
                </ul>
            </nav>
        </header>
  )
}

export default Header
