import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formula from '../../../assets/baricentro/baricentro_formula.png';
import './Baricentro.css';

class Baricentro extends Component {
    state = {
        formulaMontada: "",
        resultadoFinal: "O resultado vem aqui.",
        parteXFormula: null,
        parteYFormula: null
    };

    insertCalculo(steps) {
        const target = document.querySelector('.result-area');
        for (let i in steps) {
            const span = document.createElement('span');
            span.textContent = steps[i];
            target.appendChild(span);
        }
    }

    calcBaricentro() {
        const x1 = document.querySelector('#coordsAX').value;
        const y1 = document.querySelector('#coordsAY').value;
        const x2 = document.querySelector('#coordsBX').value;
        const y2 = document.querySelector('#coordsBY').value;
        const x3 = document.querySelector('#coordsCX').value;
        const y3 = document.querySelector('#coordsCY').value;

        const newState = {
            formulaMontada: "",
            parteXFormula: null,
            parteYFormula: null
        }

        if (!x1 || !y1 || !x2 || !y2 || !x3 || !y3)
            return alert("Insira os valores!");

        const target = document.querySelector('.result-area');
        target.removeChild(target.childNodes[0]);


        newState.parteXFormula = `${x1} + ${x2} + ${x3} / 3`;
        newState.parteYFormula = `${y1} + ${y2} + ${y3} / 3`;

        if (x2 < 0 && x3 < 0)
            newState.parteXFormula = `${x1} + (${x2}) + (${x3}) / 3`;
        else if (x2 < 0 && x3 > 0)
            newState.parteXFormula = `${x1} + (${x2}) + ${x3} / 3`;
        else if (x2 > 0 && x3 < 0)
            newState.parteXFormula = `${x1} + ${x2} + (${x3}) / 3`;
        else if (x2 > 0 && x3 > 0)
            newState.parteXFormula = `${x1} + ${x2} + ${x3} / 3`;

        if (y2 < 0 && y3 < 0)
            newState.parteYFormula = `${y1} + (${y2}) + (${y3}) / 3`;
        else if (y2 < 0 && y3 > 0)
            newState.parteYFormula = `${y1} + (${y2}) + ${y3} / 3`;
        else if (y2 > 0 && y3 < 0)
            newState.parteYFormula = `${y1} + ${y2} + (${y3}) / 3`;
        else if (y2 > 0 && y3 > 0)
            newState.parteYFormula = `${y1} + ${y2} + ${y3} / 3`;

        newState.formulaMontada = `(${newState.parteXFormula}, ${newState.parteYFormula})`;
        this.setState({ formulaMontada: newState.formulaMontada });

        const somaX = parseInt(x1) + parseInt(x2) + parseInt(x3);
        const somaY = parseInt(y1) + parseInt(y2) + parseInt(y3);
        const divididoX = somaX / 3;
        const divididoY = somaY / 3; 
        
        const step1 = `(${somaX} / 3 + ${somaY} / 3)`;
        const step2 = `(${divididoX}, ${divididoY})`;

        const steps = [
            newState.formulaMontada,
            step1,
            step2
        ];

        this.insertCalculo(steps);
    }

    render() {
        return (
            <div className="introduction baricentro container-geral">
                <Link to="/">Voltar</Link>
                    <h1>Baricentro</h1>
                    <p>Tendo três pontos espalhados no plano cartesiano formando um triângulo,
                     chamamos <strong>baricentro </strong> o ponto central deste triângulo. Para calcular a
                     localização deste ponto, usamos uma fórmula específica. Veja-a logo abaixo:
                    </p>
                    <img src={formula} alt="Fórmula para cálculo do baricentro" />
                    <p>Note que a soma das coordenadas X formam o X do ponto central do triângulo
                    e o mesmo ocorre na coordenada Y. Então ao final da fórmula, teremos as respectivas
                    coordenadas do ponto central.
                    </p>
                    <h1>Calculando o baricentro</h1>
                    <p>Assim como no <Link to="/distancia" className="link-reference">item anterior</Link>, deixamos aqui em baixo uma ferramenta
                    simples e fácil de usar para calcular o baricentro de um triângulo no plano cartesiano.
                    De maneira intuitiva, basta passar as coordenadas dos três pontos que compõem o triângulo e
                    clicar no botão.</p>
                    <div className="calculator-bari">
                        <div className="coords">
                            <div className="coordsA">
                                <label htmlFor="coordsA">A(</label>
                                <input type="number" id="coordsAX" placeholder="X1" />,
                                <input type="number" id="coordsAY" placeholder="Y1" />)
                            </div>
                            <div className="coordsB">
                                <label htmlFor="coordsB">B(</label>
                                <input type="number" id="coordsBX" placeholder="X2" />,
                                <input type="number" id="coordsBY" placeholder="Y2" />)
                            </div>
                            <div className="coordsC">
                                <label htmlFor="coordsC">C(</label>
                                <input type="number" id="coordsCX" placeholder="X3" />,
                                <input type="number" id="coordsCY" placeholder="Y3" />)
                            </div>
                        </div>
                        <div className="result-area">
                            <span> O resultado vem aqui. </span>
                        </div>
                        <button onClick={() => this.calcBaricentro()}>Calcular Baricentro!</button>
                    </div>
            </div>
        );
    }
};

export default Baricentro;