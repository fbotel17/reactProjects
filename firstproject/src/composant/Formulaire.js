import React, { useState } from 'react';

function Formulaire(){

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [color, setColor] = useState('black'); // Nouvel état pour la couleur

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (form) => {
        form.preventDefault();

        // Vérifier si le mot de passe est correct (1234)
        if (password === '1234') {
            setColor('green'); // Si le mot de passe est correct, la couleur est verte
        } else if (password === '') {
            setColor('black'); // Si rien n'a été entré, la couleur est noire
        } else {
            setColor('red'); // Si le mot de passe est incorrect, la couleur est rouge
        }
    };



    return (
        <div style={{ color }}>
            <h2>Formulaire</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Login:
                    <input
                        type="text"
                        value={login}
                        onChange={(form) => setLogin(form.target.value)}
                    />
                </label>
                <div></div>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(form) => setPassword(form.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {color === 'red' && <p>Mot de passe incorrect, veuillez réessayer.</p>}

            {color === 'green' && <p>Vous etes connecté</p>}
        </div>
    );
};

export default Formulaire;