import React from 'react'

function Navbar() {
  return (
    <div className="site-wrap">
        <div className="site-navbar mt-4">
          <div className="container py-1">
            <div className="row align-items-center">
              <div className="col-8 col-md-8 col-lg-4">
                <h1 className="mb-0"><a href="index.html" className="text-white h2 mb-0"><strong>Neural Lyrics<span className="text-primary">.</span></strong></a></h1>
              </div>
              <div className="col-4 col-md-4 col-lg-8">
                <nav className="site-navigation text-right text-md-right" role="navigation">
                  <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a></div>
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li><a href="about.html">About</a></li>
                    <li><a href="samples.html">Samples</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="#">Developers</a></li>
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
