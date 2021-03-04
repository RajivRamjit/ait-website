import React from 'react';

import TextInputItem from "../TextInput/input.component";
import './customerform.styles.scss';

const CustomerForm = () => (

    <div className="customer-details">
        <h2 id="customer-form-title">Customer Information</h2>
        <TextInputItem label="First name" formClass="first-name" formType="text" formName="first-name" formPlaceholder="First name" formRequired="required" />
        <TextInputItem label="Last name" formClass="last-name" formType="text" formName="last-name" formPlaceholder="Last name" formRequired="required" />
        <TextInputItem label="Address" formClass="address" formType="text" formName="address" formPlaceholder="Address" formRequired="required" />
        <TextInputItem label="Email" formClass="email" formType="email" formName="email" formPlaceholder="Email" formRequired="required" />
        <TextInputItem label="Telephone" formClass="telephone" formType="tel" formName="telephone" formPlaceholder="123-456-7890" formRequired="required" />

    </div>
);

export default CustomerForm;