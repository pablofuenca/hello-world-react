// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';

class Footer extends Component {
  static propTypes = {
    copyrigth: PropTypes.string
  };

  render() {
    // default value: &copy; React 2018
    const { copyrigth = '&copy; React 2018' } = this.props;

    return (
      <div className="Footer">
        <p>{copyrigth}</p>
      </div>
    );
  }
}

export default Footer;
