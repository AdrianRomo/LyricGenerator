import React from 'react';
import './css/Header.css';

export const Header = ({
  headerClass,
  headerTitle,
  headerTitleClass,
  headerParagraph,
  headerChildren,
  background
}) => {

  return (
    <>
      <div className={headerClass} style={{ backgroundImage: background }} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay={400}>
              <h2 className={headerTitleClass}>{headerTitle}</h2>
              <p>{headerParagraph}</p>
              {headerChildren}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};