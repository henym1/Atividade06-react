import React from "react";
import mario from "../assets/mario.png"
import mariogif from "../assets/mario-runner.gif"
import "../css/Mario.css"

function Mario() {

    return (
        <div className="slide-mario">
            <div className="banner-mario">
                <div className="left">
                    <div className="features">

                        <div className="rating">
                            <span className="score">97</span>
                            <div className="content">
                                <span className="subtitle">M E T A S C O R E</span>
                                <h4>Aprovação Universal</h4>
                                <span>Explore lugares incríveis longe do Reino Cogumelo com o Mario e o novo aliado Cappy em uma imensa aventura 3D ao redor do mundo. Use novas habilidades incríveis para coletar Power Moons, ligar a aeronave Odyssey e salvar a princesa Peach de se casar com o Bowser!</span>
                            </div>
                        </div>

                        <div className="pricing">
                            <div className="content">
                                <span className="subtitle">Super Mario Odyssey</span>
                                <a href="https://www.nintendo.com/pt-br/store/products/super-mario-odyssey-switch/" target="_blank" draggable="false">
                                    <h4>COMPRE AGORA</h4>
                                </a>
                                <span>Plataforma, Ação</span>
                            </div>
                        </div>

                    </div>

                    <h1>Super Mario Odyssey</h1>
                </div>

                <img src={mario} alt="Mario" draggable="false" className="mario-image" />
                <img src={mariogif} alt="Mario gif" draggable="false" className="mario-gif" />

                    <div className="right">
                        <ul className="description">
                            <li>
                                Data de lançamento
                                <p>27 de Outubro 2017</p>
                            </li>
                            <li>
                                MODOS DE JOGO
                                <p>Modo TV, Modo Semiportátil, Modo Portátil</p>
                            </li>
                        </ul>

                        <div className="trailer">
                            <h2>Assista ao Trailer</h2>
                            <iframe width="1280" height="720" src="https://www.youtube.com/embed/5kcdRBHM7kM"
                                title="Super Mario Odyssey Trailer" allowFullScreen></iframe>
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default Mario