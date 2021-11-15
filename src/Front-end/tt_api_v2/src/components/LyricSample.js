import React from 'react';
import ReactDOMServer from "react-dom/server";

export const LyricSample = ({
  imageSource,
  title,
  subtitle,
  paragraph,
  delay
}) => {

    return (
        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay={delay}>
            <img src={imageSource} alt="Image" className="img-fluid" />
            <div className="p-4 bg-white">
                <center><span className="d-block text-secondary small text-uppercase">Word used</span></center>
                <center><h2 className="h5 text-black mb-3">{title}</h2></center>
                <center><p>{paragraph}</p></center>
            </div>
        </div>
    );
};