import React, { useEffect, useState } from "react";
import Mario from "./Mario";
import Pokemon from "./Pokemon";
import Zelda from "./Zelda";

import bgMario from "../assets/bg-mario.jpeg"
import bgPokemon from "../assets/bg-pokemon.jpeg"
import bgZelda from "../assets/bg-zelda.jpeg"
import "../css/Slider.css"

function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0)

    // Dados dos slides
    const slides = [
        { component: <Mario />, background: `url(${bgMario})` },
        { component: <Pokemon />, background: `url(${bgPokemon})` },
        { component: <Zelda />, background: `url(${bgZelda})` },
    ];

    // Atualiza a imagem de fundo do body quando o slide muda
    useEffect(() => {
        document.body.style.backgroundImage = slides[currentIndex].background;
        document.body.style.backgroundSize = 'cover';  // Garante que a imagem cubra toda a tela
        document.body.style.backgroundPosition = 'center';  // Centraliza a imagem
        document.body.style.backgroundAttachment = 'fixed';  // A imagem ficará fixa ao rolar
    }, [currentIndex]); // Efeito é acionado sempre que currentIndex mudar

    // Função para ir para o slide anterior
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    // Função para ir para o próximo slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slider-container">
            <button className="prev" onClick={prevSlide}>
                &lt;
            </button>

            <div className="slider">{slides[currentIndex].component}
            </div>

            <button className="next" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Slider