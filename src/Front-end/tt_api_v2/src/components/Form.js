import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
    const [state, handleSubmit] = useForm("xknklaew");
    if (state.succeeded) {
        return <p>Thanks for your submission!</p>
        ;
    }
    return (
        <>
        
            <form onSubmit={handleSubmit} className="p-5 bg-white" name="contactform">
            <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                    <label className="font-weight-bold" htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" name="fullname" className="form-control" placeholder="John Doe" />
                </div>
            </div>
            <div className="row form-group">
                    <div className="col-md-12">
                        <label className="font-weight-bold" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="form-control" placeholder="your_name@mail.com" />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
            </div>
            <div className="row form-group">
                    <div className="col-md-12">
                        <label className="font-weight-bold" htmlFor="email">Subject</label>
                        <input type="text" id="subject" name="subject" className="form-control" placeholder="Enter Subject" />
                    </div>
            </div>
            <div className="row form-group">
                    <div className="col-md-12">
                        <label className="font-weight-bold" htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Say hello to us" defaultValue={""} />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                </div>
            <center>
                    <div className="row form-group">
                        <div className="col-md-12">
                            <input type="submit" defaultValue="Send" className="btn btn-primary  py-2 px-4 rounded-0"/>
                            <input type="reset" className="btn btn-primary  py-2 px-4 rounded-0"/>
                        </div>
                    </div>
            </center>
            </form>
        </>
    )
}

export default Form
