import React, { useState } from 'react';

// Composant enfant qui affiche une zone colorée
const Ex33Child2 = ({ onCheckboxChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedValue = !isChecked;
        setIsChecked(newCheckedValue);

        // Appel de la fonction du parent avec la nouvelle valeur de la checkbox
        onCheckboxChange(newCheckedValue);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                Checkbox enfant 2
            </label>
        </div>
    );
};

export default Ex33Child2;
