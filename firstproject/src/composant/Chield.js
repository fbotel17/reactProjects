import React, { useState } from 'react';

// Composant enfant qui affiche une zone colorée
const Chield = ({ login, password }) => {
    const couleur = login && password ? 'green' : 'transparent';

    return (
        <div style={{ backgroundColor: couleur, padding: '10px', marginTop: '10px' }}>
            
        </div>
    );
};

export default Chield;
