import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Dev () {
    return (
        <>
            <iframe title='swagger' width="100%" height="100%" src="http://localhost:5000/swagger-ui/"/>
            <Footer />
        </>
    );
}

export default Dev;