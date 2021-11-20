import React from 'react';
import { Header } from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import Swagger from '../../components/Swagger';
import '../css/Dev.css'

function Developer() {
    
    return (
        <>
            <MobileMenu />
            <Header headerClass="site-blocks-cover inner-page-cover overlay" headerTitle= "Developers" headerTitleClass="text-white h1" background={'url("images/hero_bg_3.jpg")'}/>
            <Swagger />
        </>
    );
}

export default Developer;