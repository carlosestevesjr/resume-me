import React from 'react';
import { Link } from 'react-router-dom';
import App from '../layouts/App';

const Sobre = () => {
    return (
        <App>
            <h1>Sobre</h1>
            <Link to="/">retornar a página inicial</Link>
        </App>
    );
}

export default Sobre;