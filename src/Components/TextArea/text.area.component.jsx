import React from 'react';

import './text.area.styles.scss';

const TextArea = ({ areaID, areaTitle, areaName, areaRow, areaCol, pHolder }) => (

    <div className="textarea-components">
        <label htmlFor={areaID}>{areaTitle}</label>
        <textarea id={areaID} name={areaName} rows={areaRow} cols={areaCol} placeholder={pHolder}></textarea>
    </div>

);

export default TextArea;