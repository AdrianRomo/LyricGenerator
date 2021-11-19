import React from 'react'
import { AboutLink } from './AboutLink'

function Documents() {
    return (
        <>
            <div className="site-section bg-light">
            <div className="container">
                    <div className="row">
                        <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                            <h2 className="mb-5">Paper & Manuals</h2>
                        </div>
                    </div>
                    <div className="site-block-retro d-block d-md-flex">
                        <AboutLink aboutClassName="col1 unit-9 no-height" aboutLink="docs/2020-B002-TT.pdf" aboutDelay={100} aboutBackground={'url("images/paper.jpg")'} 
                            aboutTitle="2020-B002 Paper" aboutText="Information about the specs and research in order to complete this project"/>
                        <div className="col2 ml-auto">
                            <AboutLink aboutClassName="col2-row1 unit-9 no-height" aboutLink="docs/2020-B002-Manual-Tecnico.pdf" aboutDelay={200} aboutBackground={'url("images/technical.jpg")'} 
                                aboutTitle="Technical Manual" aboutText="Manual that contains all the technologies and tools used to develop and deploy this web page, the model and the back end that contains that model and the one that generates the lyrics."/>
                            <AboutLink aboutClassName="col2-row2 unit-9 no-height" aboutLink="docs/2020-B002-Manual-Usuario.pdf" aboutDelay={300} aboutBackground={'url("images/user_manual.jpg")'} 
                                aboutTitle="User Manual" aboutText='Brief manual that describes all the web page and how to make a correct use of it '/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Documents
