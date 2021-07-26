import React from 'react';
import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "../Nav-links/Newsletter";

const MailchimpFormContainer = props => {

    const postUrl = `https://khaleedthefirst.us6.list-manage.com/subscribe?u=2ff1d67e021b45335c0594842&id=b3c0890543`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <Newsletter
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;