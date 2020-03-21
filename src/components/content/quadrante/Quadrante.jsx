import React, { Component } from 'react';
import './Quadrante.css';
import quadranteImg from '../../../assets/plano-cartesiano.png';
import { Link } from 'react-router-dom';
import quad1 from '../../../assets/1quad.png';
import quad2 from '../../../assets/2quad.png';
import quad3 from '../../../assets/3quad.png';
import quad4 from '../../../assets/4quad.png';
import origem from '../../../assets/origem.png';
import eixoX from '../../../assets/eixoX.png';
import eixoY from '../../../assets/eixoY.png';

class Quadrante extends Component {

    state = {
        eixoX: null,
        eixoY: null
    }

    clearImg() {
        const img = document.querySelector('.result-quad');
        const container = document.querySelector('.container-img');
        if (container.hasChildNodes()) {
            container.removeChild(img);
        } else return;
    }

    injectImg(src) {
        this.clearImg();

        const img = document.createElement('img');
        const container = document.querySelector('.container-img');

        img.src = src;
        img.alt = "";
        img.className = "result-quad";
        container.appendChild(img);
    }

    setQuadrante() {
        const inputX = document.querySelector('#coordX').value;
        const inputY = document.querySelector('#coordY').value;

        const newState = { eixoX: parseInt(inputX), eixoY: parseInt(inputY) };
        this.setState(newState);

        if (newState.eixoX > 0 && newState.eixoY > 0) {
            this.injectImg(quad1);
        } else if (newState.eixoX < 0 && newState.eixoY > 0) {
            this.injectImg(quad2);
        } else if (newState.eixoX < 0 && newState.eixoY < 0) {
            this.injectImg(quad3);
        } else if (newState.eixoX > 0 && newState.eixoY < 0) {
            this.injectImg(quad4);
        } else if (newState.eixoX === 0 && newState.eixoY === 0) {
            this.injectImg(origem);
        } else if (newState.eixoX === 0 && newState.eixoY !== 0) {
            this.injectImg(eixoY);
        } else if (newState.eixoX !== 0 && newState.eixoY === 0) {
            this.injectImg(eixoX);
        }
    }

    render() {
        return (
            <div className="quadrantes">
                <div className="introduction container-geral quad-intro">
                    <Link to="/">Voltar</Link>
                    <h1>Quadrantes</h1>
                    <div className="section1">
                        <h2>O que são quadrantes?</h2>
                        <p>São denominados <strong>quadrantes </strong>
                        cada uma das quatro partes dividas pelo eixo <strong>X </strong>
                        e pelo eixo <strong>Y </strong>. Estes quatro quadrantes, são numerados no
                        sentido anti-horário, como vemos logo abaixo. Um ponto qualquer no plano pode
                        pertencer a algum desses quadrantes, dependendo das coordenadas passadas no
                        <strong> par ordenado. </strong></p>
                        <img src={quadranteImg} alt="Quadrantes de um plano cartesiano" />
                        <p>Ora, podemos facilmente localizar em qual quadrante pertence um ponto apenas observando
                        os sinais das coordenadas X e Y. Veja como funciona:
                        </p>
                        <ul className="exampleList">
                            <li><strong>Primeiro Quadrante: </strong> (+ +)</li>
                            <li><strong>Segundo Quadrante: </strong> (- +)</li>
                            <li><strong>Terceiro Quadrante: </strong> (- -)</li>
                            <li><strong>Quarto Quadrante: </strong> (+ -)</li>
                        </ul>
                        <p>Em caso de uma coordenada ser nula, dizemos então que o ponto pertence ao eixo oposto
                        daquele que é nulo. Para esclarecer, veja este exemplo: A(0, 3) pertence ao eixo Y, pois sua coordenada X é nula. B(-3, 0) pertence
                        ao eixo X, pois sua coordenada Y é nula.
                        </p>
                    </div>
                    <div className="section2">
                        <h1>Localizador de Quadrantes</h1>
                        <div className="introduction">
                            <p>Disponibilizamos abaixo um localizador de quadrantes. Digite os números que
                            compõem o par ordenado em seus respectivos eixos, e clique no botão logo abaixo.
                        </p>
                        </div>
                    </div>
                    <div className="calculator">
                        <div className="input-coord">
                            <div className="coordX-container">
                                <label htmlFor="coordX">Coordenada X:</label><input type="number" id="coordX" />
                            </div>
                            <div className="coordY-container">
                                <label htmlFor="coordY">Coordenada Y:</label><input type="number" id="coordY" />
                            </div>
                        </div>
                        <div className="container-img"></div>
                        <button onClick={() => this.setQuadrante()}>Checar Quadrante!</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default Quadrante;