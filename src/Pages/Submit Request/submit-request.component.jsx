import React from 'react';
import CustomerForm from '../../Components/CustomerForm/customerform.component';
import JobInformationForm from '../../Components/JobInformationForm/job.information.component';
import './submit.styles.scss';
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', e.target, "user_fDUaYXmRZpEpHK7bkSKst")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}
function generateNumber() {
    console.log("Testing");
}
class SubmitRequest extends React.Component {


    render() {

        return (
            <div className='submit-request'>
                <div id="sub-header">
                    <h2>Submit a Request</h2>
                    <p>Check your Email for a service number. Emails should be sent within 1 hour of request submission.</p>
                </div>

                <form onSubmit={sendEmail} id="request-form">
                    <input type="hidden" name="contact_number"></input>
                    <CustomerForm />
                    <JobInformationForm />
                </form>
            </div>

        );
    }
}

export default SubmitRequest;