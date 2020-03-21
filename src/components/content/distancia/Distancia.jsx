import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Distancia.css';
import distanciaImg from '../../../assets/distancia/distancia.png';

class Distancia extends Component {

    state = {
        x1: null,
        y1: null,
        x2: null,
        y2: null,
        resultado: null
    };

    insertCalculo(steps) {
        const target = document.querySelector('.target-result');
        target.textContent = "";
        for (let i in steps) {
            const span = document.createElement('span');
            span.innerHTML = steps[i];
            target.appendChild(span);
        };
    };

    calcularDistancia() {
        const x1 = document.querySelector('#coordsAX').value;
        const x2 = document.querySelector('#coordsBX').value;
        const y1 = document.querySelector('#coordsAY').value;
        const y2 = document.querySelector('#coordsBY').value;
        if (x1 && x2 && y1 && y2) {
            const subX = x2 - x1;
            const subY = y2 - y1;
            const powX = Math.pow(subX, 2);
            const powY = Math.pow(subY, 2);
            const somaPow = powX + powY;

            let formulaMontada = `dAB = √(${x2} - ${x1})² + (${y2} - ${y1})² `;
            if (x1 < 0 && y1 < 0) {
                formulaMontada = `dAB = √(${x2} - (${x1}))² + (${y2} - (${y1}))² `;
            } else if (x1 < 0 && y1 > 0) {
                formulaMontada = `dAB = √(${x2} - (${x1}))² + (${y2} - ${y1})² `;
            } else if (x1 > 0 && y1 < 0) {
                formulaMontada = `dAB = √(${x2} - ${x1})² + (${y2} - (${y1}))² `
            }

            const formulaStep1 = `dAB = √${subX}² + ${subY}² `;
            const formulaStep2 = `dAB = √${powX} + ${powY} `;
            const formulaStep3 = `dAB = √${somaPow} `;
            const formulaStep4 = `dAB = ${Math.sqrt(somaPow).toFixed(2)} `;

            const steps = [
                formulaMontada,
                formulaStep1,
                formulaStep2,
                formulaStep3,
                formulaStep4
            ];

            this.insertCalculo(steps);
        } else {
            alert('Informe os valores!');
        };
    };

    render() {
        return (
            <div className="distancia">
                <div className="introduction container-geral distancia-intro">
                    <Link to="/">Voltar</Link>
                    <h1>Distância entre dois pontos</h1>
                    <p>Se fizermos dois pontos no plano cartersiano e ligarmos eles, teremos uma
                    reta. Ora, a medida dessa reta é a <strong>distância </strong> entre estes dois pontos.
                    Podemos calcular a distância entre dois pontos do plano cartesiano
                    utilizando esta fórmula:
                </p>
                    <img src={distanciaImg} className="formula" alt="Fórmula para a distância entre dois pontos no plano
                    cartesiano" />
                    <p>Como vamos utilizá-la? Simples. Basta tomarmos as coordenadas X e Y do primeiro ponto
                    por <strong> XI </strong> e <strong>YI </strong>, e as coordenadas X e Y do segundo ponto por
                    <strong> XII </strong> e <strong>YII</strong>.
                </p>
                    <div className="description introduction">
                        <h1>Calculando a distância de dois pontos</h1>
                        <p>Aqui você pode testar a fórmula, passando os valores e conferindo passo a passo
                        as etapas da fórmula. Basta passar as coordenadas respectivas a cada ponto e clicar no
                        botão abaixo.
                            </p>
                    </div>
                    <div className="distancia-coord">
                        <div className="coordA">
                            <label htmlFor="coordsA">A (</label>
                            <input type="number" id="coordsAX" placeholder="X1" />,
                                <input type="number" id="coordsAY" placeholder="Y1" />)
                            </div>
                        <div className="coordB">
                            <label htmlFor="coordsB">B (</label>
                            <input type="number" id="coordsBX" placeholder="X2" />,
                                <input type="number" id="coordsBY" placeholder="Y2" />)
                            </div>
                        <div className="target-result">
                            <span>O resultado vem aqui!</span>
                        </div>
                        <button className="dist-calc" onClick={() => this.calcularDistancia()}>Calcular distância!</button>
                    </div>
                </div>
            </div>
        );
    };
};
export default Distancia;