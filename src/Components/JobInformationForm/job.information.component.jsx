import React from 'react';

import TextArea from "../TextArea/text.area.component";
import TextInputItem from "../TextInput/input.component";
import ButtonItem from "../Button/button.component";

import './job.information.styles.scss';



class JobInformationForm extends React.Component {

    constructor() {
        super();
        this.state = {
            radioValue: "Other",
            selectValue: "none"
        }
    }

    onChange = e => {
        this.setState({ radioValue: e.target.value });

    }
    onChanged = e => {
        this.setState({ selectValue: e.target.value });

    }

    render() {
        let { radioValue, selectValue } = this.state;

        return (
            <div className="job-details">
                <h2 id="job-form-title">Job Description for {selectValue}</h2>

                <div className="select-box">

                    <label htmlFor="jobs">Select a Job Type</label>
                    <div className="select-info-wrapper">

                        <select name="jobs" id="jobs" value={selectValue} onChange={this.onChanged}>
                            <option value="none" disabled >Select a job</option>
                            <option value="Job">Job</option>
                            <option value="Issue">Issue</option>
                            <option value="Web Development">Web Development</option>
                        </select>

                        <i className="fas fa-info-circle tooltip">
                            <span className="tooltiptext">-Issues are resolving problems with your devices, equipment or applications.
          <span className="second-info"><br></br><br></br>-Jobs are a task that requires setting up, installing or removing devices, etc.</span>
                            </span>
                        </i>
                    </div>
                </div>

                <label>Devices</label>
                <div className="radio-components">
                    <input type="radio" id="custom-built" name="device" value="Custom-Built" checked={radioValue === "Custom-Built"} onChange={this.onChange}></input>
                    <label htmlFor="custom-built">Custom-Built</label>

                    <input type="radio" id="laptop" name="device" value="Laptop" checked={radioValue === "Laptop"} onChange={this.onChange} ></input>
                    <label htmlFor="laptop">Laptop</label>

                    <input type="radio" id="tablet" name="device" value="Tablet" checked={radioValue === "Tablet"} onChange={this.onChange} ></input>
                    <label htmlFor="tablet">Tablet</label>

                    <input type="radio" id="other" name="device" value="Other" checked={radioValue === "Other"} onChange={this.onChange} ></input>
                    <label htmlFor="other">Other</label>

                </div>

                <TextInputItem label="Other" formClass="other" formType="text" formName="other" formPlaceholder="Other please state..." formRequired="" />
                <TextArea areaID="job-desc" areaTitle="Give a description" areaName="job-desc" areaRow="6" areaCol="50" pHolder="Write a description" />
                <ButtonItem type="submit" btnName="Submit" />
            </div>
        );
    }

}

export default JobInformationForm;