import React from 'react';
import Lyricgenerator from './Lyricgenerator';
import { Header } from "../../components/Header";
import MobileMenu from '../../components/MobileMenu';
import { LyricSample } from '../../components/LyricSample';
import Documents from '../../components/Documents';

function Home() {
    return (
        <>
            <MobileMenu />
            <Header headerClass="site-blocks-cover overlay" background={'url("images/hero_bg_3.jpg")'} headerChildren={<Lyricgenerator/>}/>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                            <h2 className="mb-5">Samples</h2>
                            <p>Here are some examples of lyrics previously generated, also you can see which word was used.</p>
                        </div>
                    </div>
                    <div className="row">
                    <LyricSample title="Love" 
                            paragraph= "Love is such a kiawah bloody holiday it seems that i don't wanna know know know know who's taking earthshaking you home home home home and loving you so so so so the way i used to love you oh i don't wanna know know know know"
                            imageSource= "images/love.jpg"
                            delay= {100}/>
                        <LyricSample title="Wonderful" 
                            paragraph= "Wonderful things that you come round impound here you see me your mind you see my body off your hand it feels like a conversation  i don't wanna know know know know i don't know why i don't know why"
                            imageSource= "images/wonderful.jpg"
                            delay= {200}/>
                        <LyricSample title="Mad" 
                            paragraph= "Mad at the ceiling in the sky this is our song and i wouldn't have to have held it to back to the dance but if i could take you the first time i think that haircut i heard you the best of love you believe me too long to realise and from me and i can't stop thinking about you"
                            imageSource= "images/mad.jpg"
                            delay= {300}/>
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
                                <img src="images/Adrian1.jpg" alt="Something" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Adrian Romo</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Fullstack and Machine Learning Developer</span>
                                    <p className="mb-4">Graduate of computer science with experience working across the full-stack of software development with strong knowledges in Python.</p>
                                    <p>
                                        <a href="https://github.com/AdrianRomo" className="text-white p-2"><span className="icon-github" /></a>
                                        <a href="https://twitter.com/AdrianRomo97" className="text-white p-2"><span className="icon-twitter" /></a>
                                        <a href="https://www.linkedin.com/in/adrianromo97" className="text-white p-2"><span className="icon-linkedin" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/Jaime1.jpg" alt="Something" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Jaime Lechuga</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Frontend Developer</span>
                                    <p className="mb-4">Software developer who specialises in mobile developement but can adapt to the workflow be it working as both front-end or back-end as per required.</p>
                                    <p>
                                        <a href="https://github.com/JamesDLechu" className="text-white p-2"><span className="icon-github" /></a>
                                        <a href="https://www.facebook.com/jaime.espinosalechuga/" className="text-white p-2"><span className="icon-facebook" /></a>
                                        <a href="https://www.instagram.com/jamesdlechu/" className="text-white p-2"><span className="icon-instagram" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                            <div className="team-member">
                                <img src="images/Alfredo.png" alt="Something" className="img-fluid" />
                                <div className="text">
                                    <h2 className="mb-2 font-weight-light h4">Alfredo Gómez</h2>
                                    <span className="d-block mb-2 text-white-opacity-05">Backend Developer</span>
                                    <p className="mb-4">Computer Science engineer focused on the design of the front-end with expertice in cryptography and artifficial intelligence.</p>
                                    <p>
                                        <a href="https://github.com/alfredoesg" className="text-white p-2"><span className="icon-github" /></a>
                                        <a href="https://www.facebook.com/fredo.gomez.5876" className="text-white p-2"><span className="icon-twitter" /></a>
                                        <a href="https://www.facebook.com/fredo.gomez.5876" className="text-white p-2"><span className="icon-facebook" /></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Documents />
        </>
    );
}

export default Home;