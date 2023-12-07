import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FauComposant from './composant/fauComposant';
import Ex29 from './composant/ex29';
import Formulaire from './composant/Formulaire';
import ExempleBoucle from './composant/ExempleBoucle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Ex29/> */}
    <Formulaire/>
    {/* <FauComposant couleur={'red'} /> */}
    {/* <ExempleBoucle/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
