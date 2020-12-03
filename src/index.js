import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.scss';
import {BrowserRouter} from 'react-router-dom';
import {Context} from "./Context";

const app = () => {
    return (
        <BrowserRouter>
            <Context>
                <App/>
            </Context>
        </BrowserRouter>
    )
}

ReactDOM.render(
  app(),
  document.getElementById('root')
)
