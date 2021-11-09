import React from 'react';

function FAQ() {
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
                                <h2 className="text-white h1">Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row justify-content-center" data-aos="fade" data-aos-delay={100}>
                            <div className="col-md-8">
                                <div className="accordion unit-8" id="accordion">
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">
                                                Why my lyric doesn't make sense?
                                                <span className="icon" /></a>
                                        </h3>
                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>
                                                    NeuraLyrics makes an API call to a loaded model with tokenized words and according the most used words
                                                    in other lyrics from other artists, makes a prediction with the most accurate word, right now, our model was trained with 700
                                                    lyrics but in a future project the idea is to generate a model with a dataset that we already have with 28000+ lyrics to get
                                                    better and more useful predictions.
                                                </p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                                                Why I can't put more than one word in my lyric?
                                            <span className="icon" /></a>
                                        </h3>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>
                                                    To give better and more coherent results and to operate in more devices due time processing of each request,
                                                    the application will only accept only one word.
                                                </p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                                                How many languages do you support?
                                                <span className="icon" /></a>
                                        </h3>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>
                                                    At the moment we only support English, this is because the dataset we used only has english songs,
                                                    maybe in the future we'll support Spanish, Portuguese, and more!
                                                </p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseFour" role="button" aria-expanded="false" aria-controls="collapseFour">
                                                How many genres do you support?
                                            <span className="icon" /></a>
                                        </h3>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>
                                                    The database used for the construction of NeuraLyrics model is
                                                    Pop genre, since we found that has a more defined structure than other genres, we also have
                                                    bases from other genres such as rock, hip hop, samba, sertanejo, funk and we hope to be able to add them to the model 
                                                    in the future.
                                                </p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseFive" role="button" aria-expanded="false" aria-controls="collapseFive">
                                                What kind of Neural Networks do NeuraLyrics use?
                                            <span className="icon" /></a>
                                        </h3>
                                        <div id="collapseFive" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>
                                                    NeuraLyrics goal is to  predict text to help musicians and create new text based in other text,
                                                    so to reach that, we used Bidirectional Long Short Term Memory Neural Networks.
                                                </p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                    <div className="accordion-item">
                                        <h3 className="mb-0 heading">
                                            <a className="btn-block" data-toggle="collapse" href="#collapseSix" role="button" aria-expanded="false" aria-controls="collapseSix">
                                                Why is there a Developer tab?
                                            <span className="icon" /></a>
                                        </h3>
                                        <div id="collapseSix" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="body-text">
                                                <p>
                                                    If anyone in the future wants to use the model API, in the Developers section, they can read the documentation to interact with the API and
                                                    the model.
                                                </p>
                                            </div>
                                        </div>
                                    </div> {/* .accordion-item */}
                                </div>
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

export default FAQ;