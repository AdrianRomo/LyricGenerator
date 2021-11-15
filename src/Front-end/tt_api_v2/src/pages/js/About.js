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
                            <h2 className="mb-5">Some interesting articles about Artificial Intelligence!</h2>
                            <p>Here you can find some articles that influenced us to come up with this great idea.</p>
                        </div>
                    </div>
                    <div className="site-block-retro d-block d-md-flex">
                        <AboutLink aboutClassName="col1 unit-9 no-height" aboutLink="https://levelup.gitconnected.com/lyrics-generation-using-lstm-5a5a0bcac4fa" aboutDelay={100} aboutBackground={'url("images/img_2.jpg")'} 
                            aboutTitle="Lyrics Generator using LSTM" aboutText="Indie project to generate Taylor Swift alike lyrics with AI"/>
                        <div className="col2 ml-auto">
                            <AboutLink aboutClassName="col2-row1 unit-9 no-height" aboutLink="https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121" aboutDelay={200} aboutBackground={'url("images/img_3.jpg")'} 
                                aboutTitle="Build and deploy a React page with Bootstrap" aboutText="Brief explanation to create a webapp with React"/>
                            <AboutLink aboutClassName="col2-row2 unit-9 no-height" aboutLink="https://www.theverge.com/2016/9/26/13055938/ai-pop-song-daddys-car-sony" aboutDelay={300} aboutBackground={'url("images/img_1.jpg")'} 
                                aboutTitle="AI-written pop dire warning for humanity" aboutText='A Lyric Generator using "The Beatles" songs'/>
                        </div>
                    </div>
                </div>
            </div>
            <SocialNetworksFooter />
        </>
    );
}

export default About;