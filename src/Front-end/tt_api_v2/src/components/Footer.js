import React from 'react'

function Footer() {
  return (
    <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">About Neural Lyrics</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe pariatur reprehenderit vero atque, consequatur id ratione, et non dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis, minima minus odio!</p>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Top 20 of the week</a></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-6">
                  <ul className="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Membership</a></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Follow Us</h3>
                  <div>
                    <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                    <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                    <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                    <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="mb-5">
                <h3 className="footer-heading mb-4">Watch Live Streaming</h3>
                <div className="block-16">
                  <figure>
                    <img src="images/img_1.jpg" alt="Image placeholder" className="img-fluid rounded" />
                    <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright ©2021 All rights reserved | Made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://adrianromo.me" target="_blank">Team 2020-B002</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
