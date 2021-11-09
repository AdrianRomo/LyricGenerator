import React from 'react';

function Contact() {
    return (
        <>
            <div>
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle" />
                        </div>
                    </div>
                    <div className="site-mobile-menu-body" />
                </div> {/* .site-mobile-menu */}
                <div className="site-blocks-cover inner-page-cover overlay" style={{ backgroundImage: 'url("images/hero_bg_3.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay={400}>
                                <h2 className="text-white h1">Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-5">
                                <form action="https://formspree.io/f/xknklaew"
                                        method="POST"className="p-5 bg-white">
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
                            </div>
                            <div className="col-lg-4">
                                <div className="p-4 mb-3 bg-white">
                                    <h3 className="h5 text-black mb-3">Contact Info</h3>
                                    {/* <p className="mb-0 font-weight-bold">Address</p> */}
                                    {/* <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p> */}
                                    {/* <p className="mb-0 font-weight-bold">Phone</p> */}
                                    {/* <p className="mb-4"><a href="#">+52 55 4392 5179</a></p> */}
                                    <p className="mb-0 font-weight-bold">Email Address</p>
                                    <p className="mb-0"><a href="">ttlyrics.escom@gmail.com</a></p>
                                </div>
                                {/* <div className="p-4 mb-3 bg-white">
                                    <h3 className="h5 text-black mb-3">More Info</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur</p>
                                    <p><a href="#" className="btn btn-primary  py-2 px-4 rounded-0">Learn More</a></p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-primary" data-aos="fade">
                    <div className="container">
                        <div className="row">
                            <a href="" className="col-2 text-center py-4 social-icon d-block"><span className="icon-facebook text-white" /></a>
                            <a href="" className="col-2 text-center py-4 social-icon d-block"><span className="icon-twitter text-white" /></a>
                            <a href="" className="col-2 text-center py-4 social-icon d-block"><span className="icon-instagram text-white" /></a>
                            <a href="" className="col-2 text-center py-4 social-icon d-block"><span className="icon-linkedin text-white" /></a>
                            <a href="" className="col-2 text-center py-4 social-icon d-block"><span className="icon-pinterest text-white" /></a>
                            <a href="" className="col-2 text-center py-4 social-icon d-block"><span className="icon-youtube text-white" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;