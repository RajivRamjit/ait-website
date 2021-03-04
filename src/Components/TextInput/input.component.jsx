import React from 'react';

import './input.styles.scss';

const TextInputItem = ({ label, formType, formName, formPlaceholder, formRequired, formClass }) => (
    <div className="input-elements">
        <label>{label}</label>
        <input className={formClass} type={formType} name={formName} placeholder={formPlaceholder} required={formRequired} />
    </div>

);

export default TextInputItem;