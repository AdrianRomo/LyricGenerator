import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function Developers () {
    return (
        <>
            <iframe title='swagger' width="100%" height="1000px" src="http://localhost:5000/swagger-ui/"/>
            <Footer />
        </>
    );
}

export default Developers;
