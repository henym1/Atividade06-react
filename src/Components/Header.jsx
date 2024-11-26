import React from "react";
import nslogo from "../assets/nintendo-switch.png"
import closeMenu from "../assets/icons/close-menu.svg"
import openMenu from "../assets/icons/open-menu.svg"
import "../css/Header.css"


function Header() {
    
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }
    
    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

    return (
        <>
            <header>
                <a href="" class="logo">
                    <img src={nslogo} alt="nintendo switch logo" height="240" width="240" />
                </a>

                <nav>
                    <ul class="sidebar">
                        <li>
                            <button class="menu-button" onClick={hideSidebar}>
                                <img src={closeMenu} alt="Botão fechar menu" />
                            </button>
                        </li>
                        <li>
                            <a href="https://www.nintendo.com/us/whatsnew/" target="_blank">Switch News</a>
                        </li>
                        <li>
                            <a href="https://www.nintendo.com/pt-br/switch/online/" target="_blank">Switch Online</a>
                        </li>
                        <li>
                            <a href="https://www.nintendo.com/us/switch/online/nintendo-switch-online/classic-games/" target="_blank">Switch Classic</a>
                        </li>
                    </ul>

                    <ul class="nav">
                        <li class="hideOnMobile">
                            <a href="https://www.nintendo.com/us/whatsnew/" target="_blank">Switch News</a>
                        </li>
                        <li class="hideOnMobile">
                            <a href="https://www.nintendo.com/pt-br/switch/online/" target="_blank">Switch Online</a>
                        </li>
                        <li class="hideOnMobile">
                            <a href="https://www.nintendo.com/us/switch/online/nintendo-switch-online/classic-games/" target="_blank">Switch Classic</a>
                        </li>
                        <li>
                            <button class="menu-button" onClick={showSidebar}>
                                <img src={openMenu} alt="Botão abrir menu" />
                            </button>
                        </li>
                    </ul>
                </nav>

                <div class="search">
                    <input type="text" id="gameInput" placeholder="Search" />
                </div>
            </header>
        </>
    )
}

export default Header