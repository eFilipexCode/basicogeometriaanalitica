import React, { Component } from 'react';
import './Alinhamento.css';
import { Link } from 'react-router-dom';
import matrizAlinhamento from '../../../assets/alinhamento/esboco_matriz.png';
import esbocoCompleto from '../../../assets/alinhamento/esboco_completo.png';
import calculandoDeterminante from '../../../assets/alinhamento/calculando_determinante.png';

class Alinhamento extends Component {

    state = {
        resultadoFinal: null,
        xa: null,
        ya: null,
        xb: null,
        yb: null,
        xc: null,
        yc: null
    };

    clearChild(target) {
        for (let i in target.children) {
            target.removeChild(target.children[i]);
        };
    };

    insertCalculo(steps) {
        const target = document.querySelector('.alignment-result');
        const grid = document.querySelector('.grid-matriz');
        target.innerHTML = "";
        target.appendChild(grid);
        for (let i in steps) {
            const span = document.createElement("span");
            span.textContent = steps[i];
            target.appendChild(span);
        }
        if (steps[2] === 0) {
            const span = document.createElement('span');
            span.textContent = "Pontos alinhados.";
            target.appendChild(span);
        } else if (steps[2] !== 0) {
            const span = document.createElement('span');
            span.textContent = "Pontos não alinhados.";
            target.appendChild(span);
        };
    };

    checkAlignment() {
        const xa = document.querySelector('#ax').value;
        const ya = document.querySelector('#ay').value;

        const xb = document.querySelector('#bx').value;
        const yb = document.querySelector('#by').value;

        const xc = document.querySelector('#cx').value;
        const yc = document.querySelector('#cy').value;

        if (!xa || !ya || !xb || !yb || !xc || !yc)
            return alert('Insira os valores');

        const newState = {
            resultadoFinal: null,
            xa,
            ya,
            xb,
            yb,
            xc,
            yc
        };

        const primeiraParteSoma1 = xa * yb;
        const primeiraParteSoma2 = ya * xc;
        const primeiraParteSoma3 = xb * yc;

        const segundaParteSoma1 = xc * yb;
        const segundaParteSoma2 = yc * xa;
        const segundaParteSoma3 = xb * ya;

        const primeiraParteSomaTotal = primeiraParteSoma1 + primeiraParteSoma2 + primeiraParteSoma3;
        const segundaParteSomaToltal = segundaParteSoma1 + segundaParteSoma2 + segundaParteSoma3;

        newState.resultadoFinal = primeiraParteSomaTotal - segundaParteSomaToltal;

        this.setState(newState);

        const step1 = `(${primeiraParteSoma1} + ${primeiraParteSoma2} + ${primeiraParteSoma3}) - (${segundaParteSoma1} + ${segundaParteSoma2} + ${segundaParteSoma3})`;
        const step2 = `${primeiraParteSomaTotal} - ${segundaParteSomaToltal}`;

        const steps = [
            step1,
            step2,
            newState.resultadoFinal
        ];

        this.insertCalculo(steps);
    }

    render() {
        return (
            <div className="container-geral alinhamento introduction">
                <Link to="/">Voltar</Link>
                <h1>Alinhamento</h1>
                <p>Se considerarmos três pontos distintos no plano cartesiano,
                    dizemos que eles estão alinhados <strong>somente</strong> se o determinante da matriz formada
                    pelas coordenadas de seus eixos X e Y <strong>for igual a 0</strong>. Vemos então a
                    necessidade de ter o domínio de outra matéria: <strong>matrizes</strong>. Este tópico se estenderá
                    um pouco para dissuadir qualquer dúvida com relação ao assunto. Já supondo saber tal matéria,
                    vamos dar uma olhada na construção dessa matriz para o cálculo de seu determinante.
                    </p>
                <p>Por se tratar de três pontos, a matriz terá <strong>3 linhas</strong> e
                    <strong> 3 colunas</strong> - [3, 3] - sendo a primeira coluna toda formada pelas
                    coordenadas X de todos os três pontos, e a segunda sendo formada pelas coordenadas Y.
                    A terceira não deve influenciar no cálculo do determinante, e por isso será formada
                    apenas pelo algarismo <strong>1</strong> em todas as suas linhas.
                    Vejamos abaixo um modelo para formção da matriz.
                    </p>
                <img src={matrizAlinhamento} alt="Fórmula para montar a matriz para o alinhamento
                    de três pontos"/>
                <p>Suponhamos os pontos <strong>A(3, 6)</strong>, <strong>B(2, 9)</strong> e
                    <strong> C(5, 3)</strong>. Para calcular se estes três pontos estão em um alinhamento,
                    formaríamos esta matriz:</p>
                <img src={esbocoCompleto} alt="Matriz preenchida com os pontos A, B e C" />
                <p>Agora nos resta calcular o determinante desta matriz. Como já sabemos, pegamos a soma do resultado
                        do produto da <strong>diagonal principal</strong> e da <strong>diagonal secundária</strong> e subtraímos, como
                        vemos logo abaixo:
                    </p>
                <img src={calculandoDeterminante} alt="Produto da diagonal principal e diagonal secundária." />
                <p>A partir dessas multiplições, temos então o seguinte:</p>
                <div className="example-formula">
                    <span> (27 + 30 + 6) - (45 + 9 + 23) </span>
                    <span> 63 - 77 </span>
                    <span> -14 </span>
                </div>
                <h1>Calculando o alinhamento de três pontos</h1>
                <p>Já vimos um exemplo bem completo de como funciona o cálculo do alinhamento
                de três pontos. Agora, como já foi feito nos outros tópicos, deixaremos logo abaixo uma área
                para que se possa usar na prática os cálculos. Esta ferramenta deve ser usada como um complemento
                do que já foi visto, afim de que se possa então consolidar o conhecimento passado.
                    </p>
                <p>Para o uso, basta passar as coordenadas dos três pontos A, B e C nos eixos respectivos
                e clicar no botão abaixo.
                    </p>
                <div className="coords-alignment">
                    <div className="align-A">
                        <label>A(</label>
                        <input type="number" id="ax" placeholder="Xa" />,
                                <input type="number" id="ay" placeholder="Ya" />)
                            </div>
                    <div className="align-B">
                        <label>B(</label>
                        <input type="number" id="bx" placeholder="Xb" />,
                                <input type="number" id="by" placeholder="Yb" />)
                            </div>
                    <div className="align-C">
                        <label>C(</label>
                        <input type="number" id="cx" placeholder="Xc" />,
                                <input type="number" id="cy" placeholder="Yc" />)
                            </div>
                </div>
                <div className="alignment-result">
                    <div className="grid-matriz">
                        <span>{this.state.xa || "x1"}</span>
                        <span>{this.state.ya || "y1"}</span>
                        <span>1</span>
                        <span>{this.state.xb || "x2"}</span>
                        <span>{this.state.yb || "y2"}</span>
                        <span>1</span>
                        <span>{this.state.xc || "x3"}</span>
                        <span>{this.state.yc || "y3"}</span>
                        <span>1</span>
                    </div>
                </div>
                <button className="btn-align" onClick={() => this.checkAlignment()}>Checar alinhamento!</button>
            </div>
        );
    }
};

export default Alinhamento;