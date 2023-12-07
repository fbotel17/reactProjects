import React from 'react';

function ExempleBoucle(){
    const nombres = [1,2,3,4,5];

    return(
        <div>
            <h1>
                <ul>
                    {nombres.map(nombre => (
                        <li key={nombre}>{nombre}</li>
                    ))}
                </ul>
            </h1>
        </div>
    );
};

export default ExempleBoucle;