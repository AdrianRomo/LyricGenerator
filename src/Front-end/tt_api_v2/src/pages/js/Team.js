import React from 'react';

function Team() {
    return (
        <>
            <div>
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
                                <h2 className="text-white h1">Our Team</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="site-block-half d-block d-lg-flex site-block-video">
                        <div className="image bg-image order-1" style={{ backgroundImage: 'url(images/person_1.jpg)' }} data-aos="fade-up" data-aos-delay={200}>
                            <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>
                        </div>
                        <div className="text order-2" data-aos="fade-up">
                            <h2 className="h4 text-black mb-3">Featured DJ — Adrian Romo</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae repellendus temporibus vero sit natus.</p>
                            <p>Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi. Iusto dolor, cum et.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="site-block-half d-block d-lg-flex site-block-video">
                        <div className="image bg-image order-2" style={{ backgroundImage: 'url(images/person_1.jpg)' }} data-aos="fade-up" data-aos-delay={200}>
                            <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>
                        </div>
                        <div className="text order-1" data-aos="fade-up">
                            <h2 className="h4 text-black mb-3">Featured DJ — Jaime Lechuga</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae repellendus temporibus vero sit natus.</p>
                            <p>Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi. Iusto dolor, cum et.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="site-block-half d-block d-lg-flex site-block-video">
                        <div className="image bg-image order-1" style={{ backgroundImage: 'url(images/person_1.jpg)' }} data-aos="fade-up" data-aos-delay={200}>
                            <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span className="icon-play" /></a>
                        </div>
                        <div className="text order-2" data-aos="fade-up">
                            <h2 className="h4 text-black mb-3">Featured DJ — Alfredo Gómez</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae repellendus temporibus vero sit natus.</p>
                            <p>Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi. Iusto dolor, cum et.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-primary" data-aos="fade">
                    <div className="container">
                        <div className="row">
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-facebook text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-twitter text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-instagram text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-linkedin text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-pinterest text-white" /></a>
                            <a href="#" className="col-2 text-center py-4 social-icon d-block"><span className="icon-youtube text-white" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Team;