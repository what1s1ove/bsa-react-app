import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/app/app';
import './assets/styles/styles.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
