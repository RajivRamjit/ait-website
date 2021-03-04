import React from 'react';

import './radio.styles.scss';

const RadioItem = ({ formType, formName, formRequired, formID, inputValue, radioLabel, checked }) => (

    <div className="radio-components">
        <input type={formType} id={formID} name={formName} value={inputValue} required={formRequired} checked={checked}></input>
        <label htmlFor={formID}>{radioLabel}</label>
    </div>

);

export default RadioItem;