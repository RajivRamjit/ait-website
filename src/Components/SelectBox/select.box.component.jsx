import React from 'react';

import SelectOption from './SelectOptions/select.option.component';
import './select.box.styles.scss';

const SelectBox = ({ label, formID, selectName }) => (

  <div className="select-box">

    <label htmlFor={formID}>{label}</label>
    <div className="select-info-wrapper">
      <select name={selectName} id={formID}>
        <SelectOption optionValue="none" selected="selected" disabled="defaultValue" optionLabels="Select an option" />
        <SelectOption optionValue="Job" selected="" disabled="" optionLabels="Job" />
        <SelectOption optionValue="Issue" selected="" disabled="" optionLabels="Issue" />
        <SelectOption optionValue="Web Development" selected="" disabled="" optionLabels="Web Development" />
      </select>
      <i className="fas fa-info-circle tooltip">
        <span className="tooltiptext">-Issues are resolving problems with your devices, equipment or applications.
          <span className="second-info"><br></br><br></br>-Jobs are a task that requires setting up, installing or removing devices, etc.</span></span></i>
    </div>



  </div>

);

export default SelectBox;








