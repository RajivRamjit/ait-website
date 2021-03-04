import React from 'react';

import './button.styles.scss';

const ButtonItem = ({ type, btnName }) => (

    <button id="btn-sub" type={type}>{btnName}</button>

);

export default ButtonItem;