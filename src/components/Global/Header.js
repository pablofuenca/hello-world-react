// Dependencies
import React, { Component } from 'react';
  // el prop es para datos predefinidos, como se define abajo
  // en el static, y que no van a estar cambiando
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  // para crear enlaces

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    // const title = this.props.title;
    // const items = this.props.items;
    const { title, items } = this.props;

    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          <ul className="Menu">
            {
              items && items.map(
                (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
              )
            }
          </ul>
        </header>
      </div>
    );

  }
}

export default Header;
