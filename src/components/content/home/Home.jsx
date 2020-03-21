import React from 'react';
import './Home.css';
import calculating from '../../../assets/calculating.svg';

function Home() {
    return (
        <div className="home">
            <div className="apresentation">
                <h1>Bem vindo!</h1>
                <p className="intro-default">Para começar, selecione algum dos tópicos ao lado para ver sua descrição e realizar cálculos!</p>
                <p className="intro-web-sm">Para começar, selecione algum dos tópicos clicando no menu acima para ver sua descrição e realizar cálculos!</p>
            </div>
            <div className="imgContainer">
                <img className="homeImg" alt="Plano Cartesiano" src={calculating}/>
            </div>
            <div className="svgCredits">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
        </div>
    );
};

export default Home;