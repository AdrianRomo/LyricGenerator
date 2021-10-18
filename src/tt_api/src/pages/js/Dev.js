import React from 'react';
import '../../App.css';
import Footer from './Footer';
import '../css/Dev.css';

function Developers () {
    return (
        <>
            <div className='dev-container'>
                <iframe className='devIframe' title='swagger' width="100%" height="100%" src="http://localhost/swagger-ui/"/>
            </div>
            <Footer />
        </>
    );
}

export default Developers;
