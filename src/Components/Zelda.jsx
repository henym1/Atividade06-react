import React from "react";
import link from "../assets/link.png"
import linkgif from "../assets/link-sword.gif"
import "../css/Zelda.css"

function Zelda() {

    return (
        <div className="slide-zelda">
            <div className="banner-zelda">
                <div className="left">
                    <div className="features">

                        <div className="rating">
                            <span className="score">97</span>
                            <div className="content">
                                <span className="subtitle">M E T A S C O R E</span>
                                <h4>Aprovação Universal</h4>
                                <span>Entre em um mundo de descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa série que veio para romper barreiras.</span>
                            </div>
                        </div>

                        <div className="pricing">
                            <div className="content">
                                <span className="subtitle">The Legend of Zelda: Breath of the Wild</span>
                                <a href="https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-breath-of-the-wild-switch/" target="_blank" draggable="false">
                                    <h4>COMPRE AGORA</h4>
                                </a>
                                <span>Aventura, Ação, RPG</span>
                            </div>
                        </div>

                    </div>

                    <h1>The Legend of Zelda: Breath of the Wild</h1>
                </div>

                <img src={link} alt="Link" draggable="false" className="zelda-image" />
                <img src={linkgif} alt="Link gif" draggable="false" className="zelda-gif" />

                <div className="right">
                    <ul className="description">
                        <li>
                            Data de lançamento
                            <p>03 de Março de 2017</p>
                        </li>
                        <li>
                            MODOS DE JOGO
                            <p>Modo TV, Modo Semiportátil, Modo Portátil</p>
                        </li>
                    </ul>

                    <div className="trailer">
                        <h2>Assista ao Trailer</h2>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/zw47_q9wbBE?si=v7vspAOsBQZFE9uE"
                            title="The Legend of Zelda Trailer" allowFullScreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Zelda