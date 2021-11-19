import React from 'react'

function Navbar() {
  return (
    <div className="site-wrap">
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className="mb-0">
                  <a href="/" className="text-white h2 mb-0"><strong>NeuraLyrics<span className="text-primary">.</span></strong></a>
                </h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav className="site-navigation text-right text-md-right" role="navigation">
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a></div>
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li><a href="about">About</a></li>
                    <li><a href="samples">Samples</a></li>
                    <li><a href="contact">Contact</a></li>
                    <li><a href="team">Team</a></li>
                    <li><a href="faq">FAQ</a></li>
                    <li><a href="developers">Developers</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Navbar
