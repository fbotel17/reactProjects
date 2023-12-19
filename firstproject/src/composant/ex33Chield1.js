import React, { useState } from 'react';

// Composant enfant qui affiche une zone colorée
const Ex33Child1 = ({ onCheckboxChange }) => {
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
                Checkbox enfant 1
            </label>
        </div>
    );
};

export default Ex33Child1;
