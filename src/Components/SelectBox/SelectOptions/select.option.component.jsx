import React from 'react';

import './select.option.styles.scss';

const SelectOption = ({ optionValue, optionLabels, selected, disabled }) => (

    <option value={optionValue} selected={selected} disabled={disabled}>{optionLabels}</option>
);

export default SelectOption;








