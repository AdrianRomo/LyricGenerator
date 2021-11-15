import React from 'react'

function Form() {
    return (
        <>
            <form action="https://formspree.io/f/xknklaew"
                method="POST" className="p-5 bg-white">
                <div className="row form-group">
                    <div className="col-md-12 mb-3 mb-md-0">
                        <label className="font-weight-bold" htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" className="form-control" placeholder="Full Name" />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <label className="font-weight-bold" htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Email Address" />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <label className="font-weight-bold" htmlFor="email">Subject</label>
                        <input type="text" id="subject" className="form-control" placeholder="Enter Subject" />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <label className="font-weight-bold" htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Say hello to us" defaultValue={""} />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <input type="submit" defaultValue="Send" className="btn btn-primary  py-2 px-4 rounded-0" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form
