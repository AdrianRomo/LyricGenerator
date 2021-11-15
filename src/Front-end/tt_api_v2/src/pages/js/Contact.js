import React from 'react';
import { BasicContainer } from '../../components/BasicContainer';
import Form from '../../components/Form';
import { Header } from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import SocialNetworksFooter from '../../components/SocialNetworksFooter';

function Contact() {
    return (
        <>
            <div>
                <MobileMenu />
                <Header headerClass="site-blocks-cover inner-page-cover overlay" headerTitle= "Contact Us" headerTitleClass="text-white h1" background={'url("images/hero_bg_3.jpg")'}/>
                <div className="site-section bg-light">
                    <BasicContainer containerClass="row" children={
                        <>
                            <div className="col-md-12 col-lg-8 mb-5">
                                <Form />
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
                        </>
                    }/>
                </div>
                <SocialNetworksFooter />
            </div>
        </>
    );
}

export default Contact;