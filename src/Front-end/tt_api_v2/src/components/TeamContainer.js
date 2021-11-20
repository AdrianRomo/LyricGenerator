import React from 'react';

export const TeamContainer = ({
    containerTitle,
    containerText,
    containerSubtext,
    containerImageOrder,
    containerTextOrder,
    containerBackground
}) => {

    return (
        <>
            <div className="container">
                <div className="site-block-half d-block d-lg-flex site-block-video">
                    <div className={containerImageOrder} style={{ backgroundImage: containerBackground }} data-aos="fade-up" data-aos-delay={200}>
                        {/*<a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>*/}
                    </div>
                    <div className={containerTextOrder} data-aos="fade-up">
                        <h2 className="h4 text-black mb-3">{containerTitle}</h2>
                        <p className="lead">{containerText}</p>
                        {containerSubtext}
                    </div>
                </div>
            </div>
        </>
    );
};