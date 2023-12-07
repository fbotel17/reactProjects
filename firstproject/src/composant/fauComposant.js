import React, { useState } from 'react';

const FauComposant = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    const changeColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
    };

    

    const login="Fau aka le BOSS";

    return (
        <div>
            <div onMouseOver={changeColor} style={{ color }}>
                Je suis un composant {login}
            </div>
        </div>
    );
};

export default FauComposant;
