//
import React, { useState } from 'react'
import Link from 'next/link'
//
import styleNav from '../../styles/nav.module.css'


const Nav = function ({ onMenu, toggle }) {

    const [showHide, setShowHide] = useState(false);

    const menuBar = {
        height: `${100}vh`,
        top: 0
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <Link href="/">
                    <a className={`${styleNav.logo}`}> Logo </a>
                </Link>              
                <div className={styleNav.nav}>
                    <i className={`fa fa-bars ${styleNav.nav__bar}`} onClick={onMenu}></i>
                </div>
            </nav>
            <div className={"bg-dark " + styleNav.menu} style={toggle == true ? menuBar : {}}>
                <ul>
                    <li><Link href="/"><a> new movie </a></Link></li>
                    <li><Link href="/"><a> odd film </a></Link></li>
                    <li><Link href="/"><a> series movie </a></Link></li>
                </ul>
                <i className={`fa fa-times text-white ${styleNav.menu__close}`} onClick={onMenu}></i>
            </div>
        </>
    )
}

export default Nav;