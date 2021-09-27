import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Dev () {
    return (
        <>
            <iframe title='swagger' width="100%" height="1000px" src="http://localhost:5000/swagger-ui/"/>
            <h1></h1>
            <Footer />
        </>
    );
}

export default Dev;