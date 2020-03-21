import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from '../components/content/home/Home.jsx';
import Quadrante from '../components/content/quadrante/Quadrante.jsx';
import Distancia from '../components/content/distancia/Distancia.jsx';
import Baricentro from '../components/content/baricentro/Baricentro.jsx';
import Alinhamento from '../components/content/alinhamento/Alinhamento.jsx';

export default props => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/quadrantes' component={Quadrante} />
            <Route path='/distancia' component={Distancia} />
            <Route path='/baricentro' component={Baricentro} />
            <Route path='/alinhamento' component={Alinhamento} />
            <Redirect from='*' to='/' />
        </Switch>
    );
};