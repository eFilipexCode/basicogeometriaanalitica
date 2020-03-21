import React from 'react';
import './TopicMenu.css';
import { Link } from 'react-router-dom';

export default class TopicMenu extends React.Component {
    state = {
        color: this.props.color,
        classId: `menu-topic${this.props.classId}`,
        className: ` ${this.props.className}`
    }

    closeMenu() {
        const menu = document.querySelector('.menu-container-sm');
        menu.style.display = 'none';
    }

    componentDidMount() {
        const h1 = document.querySelector(`.${this.state.classId} h1`);
        const p = document.querySelector(`.${this.state.classId} p`);
        p.style.color = this.state.color;
        h1.style.color = this.state.color;
    }

    render() {
        return (
            <div className={this.state.classId + this.state.className} onClick={() => this.closeMenu()}>
                <Link to={`${this.props.hash}`}>
                    <h1>{this.props.titulo}</h1>
                    <p>{this.props.desc}</p>
                </Link>
            </div>
        )
    }
};