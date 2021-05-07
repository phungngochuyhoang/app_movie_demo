//
import styleNav from '../../styles/nav.module.css'

//
import React, {useState} from 'react';


const Nav = function () {

    const [showHide, setShowHide] = useState(false);

    const menuBar = {
        height: `${100}vh`,
        top: 0
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <a href="/" className={`${styleNav.logo}`}> Logo </a>
                <div className={styleNav.nav}>
                    <i className={`fa fa-bars ${styleNav.nav__bar}`} onClick={() => {setShowHide(!showHide)}}></i>
                </div>
            </nav>
            <div className={"bg-dark " + styleNav.menu} style={showHide == true ? menuBar: {}}>
                <ul>
                    <li><a href="/"> Phim Mới </a></li>
                    <li><a href="/"> phim Lẻ </a></li>
                    <li><a href="/"> Phim Bộ </a></li>
                </ul>
                <i className={`fa fa-times text-white ${styleNav.menu__close}`} onClick={() => {setShowHide(!showHide)}}></i>
            </div>
        </>
    )
}

export default Nav