import React, { Fragment, Component } from 'react';
import './Menu.css';

class Menu extends Component {

    open = false;

    openMenuResponsive() {
        const menu = document.querySelector('.menu-container-sm');
        if (this.open) {
            menu.style.display = 'none';
        } else if (!this.open) {
            menu.style.display = 'block';
        }
        this.open = !this.open;
    }
    
    render() {
        return (
            <Fragment>
                <button className="menu-m" onClick={() => this.openMenuResponsive()}>MENU</button>
                <div className="menu-container">
                    {this.props.children}
                </div>
                <div className="menu-container-sm">
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default Menu;