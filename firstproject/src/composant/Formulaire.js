import React, { useState } from 'react';

function Formulaire(){
    const login="Fau";
    const password="password";
    const logins=["fau", "tib", "mat", "tom", "edou", "dam", "theo", "jean", "pas hugo", "surtout pas hugo", "vraiment pas hugo"];



    const [isConnected, setIsConnected] = useState(false);

    const toggleConnected = () => {
        setIsConnected(!isConnected);
    };

    return(
        <div>
            <button onClick={toggleConnected}>
                {isConnected ? 'Passer à fau' : 'Passer à vrai'}
            </button>
            {isConnected ? (
                <div>vrai</div>
            ) :
            (<div>
                <ul>
                    {logins.map(login => (
                        <li>{login}</li>
                    ))}
                </ul>
            </div>)
            }
        </div>
    );
};

export default Formulaire;