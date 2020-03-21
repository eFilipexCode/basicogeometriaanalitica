import React from 'react';
import './App.css';
import Menu from '../components/menu/Menu.jsx';
import TopicMenu from '../components/topic/TopicMenu.jsx';
import Container from '../components/container/Container.jsx';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes.jsx';
import Credit from '../components/Credit.jsx';

function App() {
    return (
        <HashRouter>
            <div className="app">
                <Menu>
                    <TopicMenu titulo="Localizador de Quadrante" color="#e67e22" classId="1" className="topic-menu" hash="quadrantes"
                        desc="Descubra onde determinado ponto se encontra em um dos quadrantes do plano cartesiano." />
                    <TopicMenu titulo="Distância entre dois pontos" color="#27ae60" classId="2" className="topic-menu" hash="distancia"
                        desc="Veja passo a passo a distância entre dois pontos" />
                    <TopicMenu titulo="Baricentro" color="#3498db" classId="3" className="topic-menu" hash="baricentro"
                        desc="Descubra o ponto central entre três pontos no plano cartesiano" />
                    <TopicMenu titulo="Alinhamento de três pontos" color="#9b59b6" classId="4" className="topic-menu" hash="alinhamento"
                        desc="Descubra se três pontos estão alinhados ou não" />
                </Menu>
                <Container>
                    <Routes />
                </Container>
                <Credit />
            </div>
        </HashRouter>
    );
};

export default App;