import React from 'react';
import { BasicContainer } from '../../components/BasicContainer';
import { Header } from '../../components/Header';
import { LyricSample } from '../../components/LyricSample';
import MobileMenu from '../../components/MobileMenu';
import SocialNetworksFooter from '../../components/SocialNetworksFooter';

function Samples() {
    return (
        <>
            <MobileMenu />
            <Header headerClass="site-blocks-cover inner-page-cover overlay" headerTitle= "Samples" headerTitleClass="text-white h1" background={'url("images/hero_bg_3.jpg")'} 
                headerParagraph={
                    <>
                        <p>The experience is magical.</p>
                        <p>Go and try it.</p>
                        <p>Trust us.</p>
                    </>
                }/>
            <div className="site-section bg-light">
                <BasicContainer containerClass="row" children={
                    <>
                        <LyricSample title="Love" 
                            paragraph= "Love is such a kiawah bloody holiday it seems that i don't wanna know know know know who's taking earthshaking you home home home home and loving you so so so so the way i used to love you oh i don't wanna know know know know"
                            imageSource= "images/love.jpg"
                            delay= {100}/>
                        <LyricSample title="Wonderful" 
                            paragraph= "Wonderful things that you come round impound here you see me your mind you see my body off your hand it feels like a conversation  i don't wanna know know know know i don't know why i don't know why"
                            imageSource= "images/wonderful.jpg"
                            delay= {200}/>
                        <LyricSample title="Mad" 
                            paragraph= "Mad at the ceiling in the sky this is our song and i wouldn't have to have held it to back to the dance but if i could take you the first time i think that haircut i heard you the best of love you believe me too long to realise and from me and i can't stop thinking about you"
                            imageSource= "images/mad.jpg"
                            delay= {300}/>
                        <LyricSample title="Sad" 
                            paragraph= "Sad down on hawn the night looking for the thought of the night life keeps on upon my mind chasing the game i know your name is a million sea but your heart is coming home to the dream i can see him around but i lanai just couldn't break the world away from my life i bely know what i don't need a map to know the way i nearby"
                            imageSource= "images/img_2.jpg"
                            delay= {100}/>
                        <LyricSample title="Without" 
                            paragraph= "Without you why don't you think i'm whm at me don't you think it's a liar when we had to dream of sizelove the night and you say that i can't help you like an animal i want to hear you all that tomcat i didn't give something to believe in more than i thought that i could robin hood of you and i know that i will change your eyes plagiarize"
                            imageSource= "images/img_4.jpg"
                            delay= {200}/>
                        <LyricSample title="Remember" 
                            paragraph= "Remember things you view to the bone i know you think you don't know what it is all about you ain't no virago time for you don't look in my life you're still in my bed you still know that i'm happy for tore the lines in my world don't be your baby baby don't you don't know that you're the maharaja best of your submarine up periscope that's what i could do i could never have alone homegrown"
                            imageSource= "images/remember.jpg"
                            delay= {300}/>
                    </>
                }/>
                {/*<div className="container mt-5" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="site-block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li className="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
        </>
    );
}

export default Samples;