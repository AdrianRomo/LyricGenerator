import React from 'react';

function Developer() {
    return (
        <>
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
                            <h2 className="text-white h1">Developers</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-lg">
                <div className='site-blocks-cover inner-page-cover'>
                    <iframe className='devIframe' title='swagger' width="100%" height="100%" src="http://localhost/swagger-ui/"/>
                </div>
            </div>
        </>
    );
}

export default Developer;