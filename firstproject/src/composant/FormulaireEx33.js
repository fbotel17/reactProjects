import React, { useState } from 'react';
import Ex33Chield1 from './ex33Chield1';
import Ex33Chield2 from './ex33Chield2';

const FormulaireEx33 = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange1 = (newCheckedValue) => {
        setIsChecked1(newCheckedValue);
    };

    const handleCheckboxChange2 = (newCheckedValue) => {
        setIsChecked2(newCheckedValue);
    };

    const renderColoredZone = () => {
        if (isChecked1 && isChecked2) {
            return <div style={{ backgroundColor: 'green', padding: '10px', margin: '10px' }}>Zone verte</div>;
        } else {
            return <div style={{ backgroundColor: 'red', padding: '10px', margin: '10px' }}>Zone rouge</div>;
        }
    };

    return (
        <div>
            <h1>Composant Parent</h1>
            <Ex33Chield1 onCheckboxChange={handleCheckboxChange1} />
            <Ex33Chield2 onCheckboxChange={handleCheckboxChange2} />
            {renderColoredZone()}
        </div>
    );
};

export default FormulaireEx33;