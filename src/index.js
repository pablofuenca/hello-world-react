import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// ese root de abajo es el punto de partida de la aplicacion, que se encuentra en
// index.html, un div con el id = root. A partir de ese root, es donde se ejecutará
// toda la logica que implementemos
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
