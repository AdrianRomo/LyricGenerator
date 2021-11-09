import React from 'react';

function About() {
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
                                <h2 className="text-white h1">About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
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
                        </div>
                    </div>
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
                            <a href="https://levelup.gitconnected.com/lyrics-generation-using-lstm-5a5a0bcac4fa" className="col1 unit-9 no-height" data-aos="fade-up" data-aos-delay={100}>
                                <div className="image" style={{ backgroundImage: 'url("images/img_2.jpg")' }} />
                                <div className="unit-9-content">
                                    <h2>Lyrics Generator using LSTM</h2>
                                    <span>Indie project to generate Taylor Swift alike lyrics with AI</span>
                                </div>
                            </a>
                            <div className="col2 ml-auto">
                                <a href="https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/" className="col2-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="image" style={{ backgroundImage: 'url("images/img_3.jpg")' }} />
                                    <div className="unit-9-content">
                                    <h2>Build and deploy a React page with Bootstrap</h2>
                                        <span>Brief explanation to create a webapp with React</span>
                                        
                                    </div>
                                </a>
                                <a href="https://www.theverge.com/2016/9/26/13055938/ai-pop-song-daddys-car-sony" className="col2-row2 unit-9 no-height" data-aos="fade-up" data-aos-delay={300}>
                                    <div className="image" style={{ backgroundImage: 'url("images/img_1.jpg")' }} />
                                    <div className="unit-9-content">
                                    <h2>AI-written pop dire warning for humanity</h2>
                                        <span>A Lyric Generator using "The Beatles" songs</span>
                                    </div>
                                </a>
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

export default About;