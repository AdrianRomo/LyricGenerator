import React from 'react';

export const AboutLink = ({
    aboutClassName,
    aboutLink,
    aboutDelay,
    aboutTitle,
    aboutText,
    aboutBackground
}) => {

    return (
        <>
            <a href={aboutLink} className={aboutClassName} data-aos="fade-up" data-aos-delay={aboutDelay}>
                <div className="image" style={{ backgroundImage: aboutBackground }} />
                <div className="unit-9-content">
                    <h2>{aboutTitle}</h2>
                    <span>{aboutText}</span>
                </div>
            </a>
        </>
    );
};