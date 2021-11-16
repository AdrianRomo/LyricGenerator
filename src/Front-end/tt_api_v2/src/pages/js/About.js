import React from 'react';
import { AboutLink } from '../../components/AboutLink';
import { BasicContainer } from '../../components/BasicContainer';
import { Header } from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import SocialNetworksFooter from '../../components/SocialNetworksFooter';

function About() {
    return (
        <>
            <MobileMenu />
            <Header headerClass="site-blocks-cover inner-page-cover overlay" headerTitle= "About Us" headerTitleClass="text-white h1" background={'url("images/hero_bg_3.jpg")'}/>
            <div className="site-section">
                <BasicContainer containerClass="row" children={
                    <>
                        <div className="col-md-12 mb-3" data-aos="fade-up"><h2 className="text-primary h4">Our Inspiration</h2></div>
                        <div className="col-lg-5 ml-auto order-lg-2 mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <img src="images/hero_bg_1.jpg" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 order-lg-1" data-aos="fade-up" data-aos-delay={100}>
                            <p className="lead"> 
                            Music, Neural Networks, Passion!
                            </p>
                            <p>
                            Songwriters usually write their own lyrics and there are articles with tips and techniques that can help.
                            However, this doesn't mean you can't use a generator tool to get new ideas.
                            A tool like NeuralLyric might even inspire you to write your own lyrics.
                            This tool will automatically generate lyrics for a complete song using Bidirectional LSTM Neural Networks.
                            Many of the generated songs sound ridiculous as you might expect but also can be helpful to create your next hit!
                            </p>
                            <p>
                            NeuraLyrics is a free webapp that offer the possibility to generate a new world of ideas for musicians for lyric ideas
                            through artificial intelligence. This is possible thanks to Bidirectional LSTM Neural Networks model generated
                            by a database with around 28,000+ song lyrics from different Pop genre artists.
                            This service was developed by National Polytechnic Institute students.
                            </p>
                        </div>
                    </>
                }/>
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

export default About;