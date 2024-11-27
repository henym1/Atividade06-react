import React from "react";
import "../css/Mario.css"

function Mario() {

    return (
        <div className="slide-mario">
            <div className="banner-mario">
                {/* <!-- Banner de conteúdo adicional --> */}
                <div className="left">
                    {/* <!-- Seção à esquerda do banner --> */}
                    <div className="features">
                        {/* <!-- Div para exibir as características do jogo --> */}
                        <div className="rating">
                            {/* <!-- Exibe a nota de avaliação do jogo --> */}
                            <span className="score">97</span>
                            <div className="content">
                                <span className="subtitle">M E T A S C O R E</span>
                                <h4>Aprovação Universal</h4>
                                <span>Explore lugares incríveis longe do Reino Cogumelo com o Mario e o novo aliado Cappy em uma imensa aventura 3D ao redor do mundo. Use novas habilidades incríveis para coletar Power Moons, ligar a aeronave Odyssey e salvar a princesa Peach de se casar com o Bowser!</span>
                            </div>
                        </div>
                        <div className="pricing">
                            {/* <!-- Seção para exibir informações de compra --> */}
                            <a href=""></a>
                            {/* <!-- Link vazio para a compra do jogo --> */}
                            <div className="content">
                                {/* <!-- Conteúdo relacionado ao preço --> */}
                                <span className="subtitle">Super Mario Odyssey</span>
                                <h4>COMPRE AGORA</h4>
                                <span>Plataforma, Ação</span>
                            </div>
                        </div>
                    </div>
                    <h1>Super Mario Odyssey</h1>
                </div>

                {/* <img src="images/mario.png" alt="Mario" /> */}

                    {/* <!-- Imagem do personagem Mario --> */}
                    <div className="right">
                        {/* <!-- Seção à direita do banner --> */}
                        <ul className="description">
                            {/* <!-- Lista de descrição do jogo --> */}
                            <li>
                                Data de lançamento
                                <p>27 de Outubro 2017</p>
                                {/* <!-- Data de lançamento do jogo --> */}
                            </li>
                            <li>
                                MODOS DE JOGO
                                <p>Modo TV, Modo Semiportátil, Modo Portátil</p>
                                {/* <!-- Modos de jogo disponíveis --> */}
                            </li>
                        </ul>

                        <div className="trailer">
                            {/* <!-- Seção para exibir o trailer --> */}
                            <h2>Assista ao Trailer</h2>
                            {/* <!-- Título "Assista ao Trailer" --> */}
                            <iframe width="1280" height="720" src="https://www.youtube.com/embed/5kcdRBHM7kM"
                                title="Super Mario Odyssey Trailer" allowFullScreen></iframe>
                            {/* <!-- Frame do YouTube com o trailer do Super Mario Odyssey --> */}
                        </div>

                    </div>
            </div>
        </div>
    )
}

export default Mario