import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './header.js';
import {Footer} from './footer';
import {Content} from './content';

function Element () {
    return (   <div>
         <h1>Hello!</h1>
         <h2>Good to see you here.</h2>
       </div>
    )};


const app = (
    <div>  
        <Header />
        <Element />
        <Content />
        <Footer />
    </div>
);


ReactDOM.render(
    app,
    document.getElementById('app')
  );