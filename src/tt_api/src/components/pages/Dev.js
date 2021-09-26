import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Dev () {
    return (
        <>
            <iframe title='swagger' width="800" height="800" src="http://localhost:3000/faq"/>
            <Footer />
        </>
    );
}

export default Dev;