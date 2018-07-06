// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Routes
import AppRoutes from './routes';

// Assets
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ese root de abajo es el punto de partida de la aplicacion, que se encuentra en
// index.html, un div con el id = root. A partir de ese root, es donde se ejecutará
// toda la logica que implementemos
render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
