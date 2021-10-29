import React from 'react'
import Lyricgenerator from '../pages/js/Lyricgenerator'

function Header() {
  return (
    <div className="site-blocks-cover overlay" style={{ backgroundImage: 'url("images/hero_bg_3.jpg")' }} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay={400}>
              <Lyricgenerator />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header
