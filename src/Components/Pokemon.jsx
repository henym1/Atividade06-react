import React from "react";
import red from "../assets/red.png"
import pokemongif from "../assets/pokemons.gif"
import "../css/Pokemon.css"

function Pokemon() {

    return (
        <div className="slide-pokemon">
            <div className="banner-pokemon">
                <div className="left">
                    <div className="features">

                        <div className="rating">
                            <span className="score">83</span>
                            <div className="content">
                                <span className="subtitle">M E T A S C O R E</span>
                                <h4>Geralmente favorável</h4>
                                <span>Prepare-se para uma nova grande aventura Pokémon em Pokémon™ Legends: Arceus, um jogo totalmente novo da Game Freak que combina ação e exploração com as raízes de RPG da série Pokémon.</span>
                            </div>
                        </div>

                        <div className="pricing">
                            <div className="content">
                                <span className="subtitle">Pokémon Legends: Arceus</span>
                                <a href="https://www.nintendo.com/pt-br/store/products/pokemon-legends-arceus-switch/" target="_blank" draggable="false">
                                    <h4>COMPRE AGORA</h4>
                                </a>
                                <span>Ação, RPG</span>
                            </div>
                        </div>

                    </div>

                    <h1>Pokémon Legends: Arceus</h1>
                </div>

                <img src={red} alt="Treinador Pokemon Red" draggable="false" className="pokemon-image" />
                <img src={pokemongif} alt="Pokemon gif" draggable="false" className="pokemon-gif" />

                <div className="right">
                    <ul className="description">
                        <li>
                            Data de lançamento
                            <p>28 de janeiro de 2022</p>
                        </li>
                        <li>
                            MODOS DE JOGO
                            <p>Modo TV, Modo Semiportátil, Modo Portátil</p>
                        </li>
                    </ul>

                    <div className="trailer">
                        <h2>Assista ao Trailer</h2>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/I4RynqpahT8?si=eGXcRG9krg1E8VLf"
                            title="Pokemon Legends Arceus Trailer" allowFullScreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pokemon