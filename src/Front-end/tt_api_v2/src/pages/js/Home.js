import React from 'react';
import Lyricgenerator from './Lyricgenerator';
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
    return (
        <>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div> {/* .site-mobile-menu */}
            <Header />
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                            <h2 className="mb-5">Aquí podrían ir ejemplos</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>
                        </div>
                    </div>
                    <div className="site-block-retro d-block d-md-flex">
                        <a href="#" className="col1 unit-9 no-height" data-aos="fade-up" data-aos-delay={100}>
                            <div className="image" style={{ backgroundImage: 'url("images/img_2.jpg")' }} />
                            <div className="unit-9-content">
                                <h2>Classic Songs For Classic People</h2>
                                <span>Friday 1:00pm — 2:30pm</span>
                            </div>
                        </a>
                        <div className="col2 ml-auto">
                            <a href="#" className="col2-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay={200}>
                                <div className="image" style={{ backgroundImage: 'url("images/img_3.jpg")' }} />
                                <div className="unit-9-content">
                                    <h2>Classic Songs For Classic People</h2>
                                    <span>Friday 1:00pm — 2:30pm</span>
                                </div>
                            </a>
                            <a href="#" className="col2-row2 unit-9 no-height" data-aos="fade-up" data-aos-delay={300}>
                                <div className="image" style={{ backgroundImage: 'url("images/img_1.jpg")' }} />
                                <div className="unit-9-content">
                                    <h2>Classic Songs For Classic People</h2>
                                    <span>Friday 1:00pm — 2:30pm</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-light block-13">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                            <h2 className="mb-5">Love By Our Lyric Creators</h2>
                        </div>
                    </div>
                    <div className="nonloop-block-13 owl-carousel">
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img src="images/person_1.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className>
                                <h3 className="font-weight-light h5">Megan Smith</h3>
                                <p className="font-italic">“Thats really good, love it, hope you can add more topics soon!”</p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img src="images/person_2.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className>
                                <h3 className="font-weight-light h5">Brooke Cagle</h3>
                                <p className="font-italic">“I ABSOLUTELY LOVE IT, I just want to see how it grows like a child!”</p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img src="images/person_3.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className>
                                <h3 className="font-weight-light h5">Philip Martin</h3>
                                <p className="font-italic">“I looooooved it, i used it to get an idea/inspiration and it really helped me out. Thank you very much”</p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img src="images/person_1.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className>
                                <h3 className="font-weight-light h5">Steven Ericson</h3>
                                <p className="font-italic">“it’s really good for song inspo”</p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img src="images/person_2.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className>
                                <h3 className="font-weight-light h5">Nathan Dumlao</h3>
                                <p className="font-italic">“Amazing, outstanding and beautiful.”</p>
                            </div>
                        </div>
                        <div className="text-center p-3 p-md-5 bg-white">
                            <div className="mb-4">
                                <img src="images/person_4.jpg" alt="Image" className="w-50 mx-auto img-fluid rounded-circle" />
                            </div>
                            <div className>
                                <h3 className="font-weight-light h5">Brook Smith</h3>
                                <p className="font-italic">“This is now the only way I write songs thank you sir”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-blocks-cover overlay inner-page-cover subscribe" style={{ backgroundImage: 'url(images/hero_bg_4.jpg)' }} data-aos="fade" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
                            <h2>Subscribe</h2>
                            <p className="mb-5">If you want newsletters or a weekly generated song enter your mail! ☺️</p>
                            <form action="#" method="post" className="site-block-subscribe">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter your email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button" id="button-addon2">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                            <h2 className="mb-5">Our Team</h2>
                            <p>Here there are the three Computer Science graduates of the National Polytechnic Institute joined and collaborated in every aspect to develop this incredible tool to you</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Adrian Romo</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Fullstack and Machine Learning Developer</span>
                                    <p className="mb-4">Aquí va a ir una breve descripción de nosotros.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span className="icon-facebook" /></a>
                                        <a href="#" className="text-white p-2"><span className="icon-twitter" /></a>
                                        <a href="#" className="text-white p-2"><span className="icon-linkedin" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Jaime Lechuga</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Frontend Developer</span>
                                    <p className="mb-4">Aquí va a ir una breve descripción de nosotros.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span className="icon-facebook" /></a>
                                        <a href="#" className="text-white p-2"><span className="icon-twitter" /></a>
                                        <a href="#" className="text-white p-2"><span className="icon-linkedin" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Alfredo Gómez</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Backend Developer</span>
                                    <p className="mb-4">Aquí va a ir una breve descripción de nosotros.</p>
                                    <p>
                                        <a href="#" className="text-white p-2"><span className="icon-facebook" /></a>
                                        <a href="#" className="text-white p-2"><span className="icon-twitter" /></a>
                                        <a href="#" className="text-white p-2"><span className="icon-linkedin" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                            <h2 className="mb-5">News &amp; Samples</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                            <a href="#"><img src="images/img_4.jpg" alt="Image" className="img-fluid" /></a>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2021</span>
                                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt, voluptatum reprehenderit deserunt illum rem.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                            <a href="#"><img src="images/img_2.jpg" alt="Image" className="img-fluid" /></a>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2021</span>
                                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt, voluptatum reprehenderit deserunt illum rem.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                            <a href="#"><img src="images/img_3.jpg" alt="Image" className="img-fluid" /></a>
                            <div className="p-4 bg-white">
                                <span className="d-block text-secondary small text-uppercase">Jan 20th, 2021</span>
                                <h2 className="h5 text-black mb-3"><a href="#">Art Gossip by Mike Charles</a></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt, voluptatum reprehenderit deserunt illum rem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary" data-aos="fade">
                <div className="container">
                    <div className="row">
                        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-facebook text-white" /></a>
                        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-twitter text-white" /></a>
                        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-instagram text-white" /></a>
                        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-linkedin text-white" /></a>
                        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-pinterest text-white" /></a>
                        <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-youtube text-white" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;