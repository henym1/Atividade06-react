import React, { useState } from "react";
import Mario from "./Mario";
import Pokemon from "./Pokemon";
import Zelda from "./Zelda";
import "../css/Slider.css"   

function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0)

    // Dados dos slides: cada objeto contém o componente do conteúdo e a imagem
    const slides = [
        <Mario />,
        <Pokemon />,
        <Zelda />,
    ];

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

            <div className="slider">{slides[currentIndex]}
            </div>

            <button className="next" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Slider