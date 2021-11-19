import React from 'react';
import { Header } from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import '../css/Dev.css'

function Developer() {
    
    return (
        <>
            <MobileMenu />
            <Header headerClass="site-blocks-cover inner-page-cover overlay" headerTitle= "Developers" headerTitleClass="text-white h1" background={'url("images/hero_bg_3.jpg")'}/>
            <div class="container-lg">
                <div className='site-blocks-cover inner-page-cover myDevContainer'>
                    {/*<iframe className='devIframe' title='swagger' width="100%" height="100%" src="http://localhost/swagger-ui/"/>*/}
                    <div id="swagger-ui"></div>
                </div>
            </div>
        </>
    );
}

export default Developer;