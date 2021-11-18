import React from 'react';
import Lyricgenerator from './Lyricgenerator';
import Navbar from "../../components/Navbar";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import MobileMenu from '../../components/MobileMenu';
import SocialNetworksFooter from '../../components/SocialNetworksFooter';
import { AboutLink } from '../../components/AboutLink';

function Home() {
    return (
        <>
            <MobileMenu />
            <Header headerClass="site-blocks-cover overlay" background={'url("images/hero_bg_3.jpg")'} headerChildren={<Lyricgenerator/>}/>
            
            {/*<div className="site-section bg-light block-13">
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
            </div>*/}
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                            <h2 className="mb-5">Samples</h2>
                            <p>Here are some examples of lyrics previously generated, also you can see which word was used.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={100}>
                            <img src="images/img_4.jpg" alt="Image" className="img-fluid" />
                            <div className="p-4 bg-white">
                                <center><span className="d-block text-secondary small text-uppercase">Word used</span></center>
                                <center><h2 className="h5 text-black mb-3">Love</h2></center>
                                <center><p>Love is such a kiawah bloody holiday it seems that i don't wanna know know know know who's taking earthshaking you home home home home and loving you so so so so the way i used to love you oh i don't wanna know know know know </p></center>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={200}>
                            <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
                            <div className="p-4 bg-white">
                                <center><span className="d-block text-secondary small text-uppercase">Word used</span></center>
                                <center><h2 className="h5 text-black mb-3">Mad</h2></center>
                                <center><p>Mad at the ceiling in the sky this is our song and i wouldn't have to have held it to back to the dance but if i could take you the first time i think that haircut i heard you the best of love you believe me too long to realise and from me and i can't stop thinking about you</p></center>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={300}>
                            <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
                            <div className="p-4 bg-white">
                                <center><span className="d-block text-secondary small text-uppercase">Word used</span></center>
                                <center><h2 className="h5 text-black mb-3">Wonderful</h2></center>
                                <center><p>Wonderful things that you come round impound here you see me your mind you see my body off your hand it feels like a conversation  i don't wanna know know know know i don't know why i don't know why</p></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                            <h2 className="mb-5">Our Team</h2>
                            <p>Three Computer Science graduates of the National Polytechnic Institute joined and collaborated in every aspect to develop this tool</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/Adrian1.jpg" alt="Image" className="img-fluid" />
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
                                <img src="images/Jaime1.jpg" alt="Image" className="img-fluid" />
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
                                <img src="images/Alfredo.png" alt="Image" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Alfredo Gómez</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Backend Developer</span>
                                    <p className="mb-4">I’m a person who does with interest the things that he likes and attracts his attention, if they don’t interest me, I postpone them as long as possible.</p>
                                    <p>
                                        <a href="" className="text-white p-2"><span className="icon-facebook" /></a>
                                        <a href="" className="text-white p-2"><span className="icon-twitter" /></a>
                                        <a href="" className="text-white p-2"><span className="icon-linkedin" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-section">
            <div className="container">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                            <h2 className="mb-5">Documents about this project</h2>
                            <p>Here you can find in detail how the project was developed, researched, and deployed.</p>
                        </div>
                    </div>
                    <div className="site-block-retro d-block d-md-flex">
                        <AboutLink aboutClassName="col1 unit-9 no-height" aboutLink="docs/2020-B002-TT.pdf" aboutDelay={100} aboutBackground={'url("images/img_2.jpg")'} 
                            aboutTitle="2020-B002 Document" aboutText="This research paper contains all the information about the specs and research in order to complete this project"/>
                        <div className="col2 ml-auto">
                            <AboutLink aboutClassName="col2-row1 unit-9 no-height" aboutLink="docs/2020-B002-Manual-Tecnico.pdf" aboutDelay={200} aboutBackground={'url("images/img_3.jpg")'} 
                                aboutTitle="Technical Manual" aboutText="Manual that contains all the technologies and tools used to develop and deploy this web page, the model and the back end that contains that model and the one that generates the lyrics."/>
                            <AboutLink aboutClassName="col2-row2 unit-9 no-height" aboutLink="docs/2020-B002-Manual-Usuario.pdf" aboutDelay={300} aboutBackground={'url("images/img_1.jpg")'} 
                                aboutTitle="User Manual" aboutText='Brief manual that describes all the web page and how to make a correct use of it '/>
                        </div>
                    </div>
                </div>
            </div>
            <SocialNetworksFooter />
        </>
    );
}

export default Home;