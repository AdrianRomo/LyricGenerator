import React from 'react';
import { Header } from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import { TeamContainer } from '../../components/TeamContainer';

function Team() {
    return (
        <>
            <div>
                <MobileMenu />
                <Header headerClass="site-blocks-cover inner-page-cover overlay" headerTitle= "Our Team" headerTitleClass="text-white h1" background={'url("images/hero_bg_3.jpg")'}/>
                <TeamContainer containerTitle="Edgar Adrian Nava Romo" containerBackground= {'url(images/Adrian1.jpg)'} containerImageOrder="image bg-image order-1" containerTextOrder= "text order-2"
                    containerText="Full-stack and Machine Learning Developer"
                    containerSubtext={
                        <>
                            <p>Adrian always has loved technology since he remembers, he always have that passion for the new innovations in the market and fantasized about all the wonders that the computers can reach.</p>
                            <p>He is currently a graduate in Computer Science in National Polytechnic Institute in a continous search for new innovations, exploring new technologies to develop software solutions using the creativity and teamwork with an expertize in Artificial Intelligence, Systems Design, and Data Science.</p>
                            <p>In his free time, he likes to play videogames, search for IoT projects and tour around the city as hobbies/side hustles.</p>
                        </>
                    }/>
                <TeamContainer containerTitle="Jaime Daniel Espinosa de los Monteros Lechuga" containerBackground= {'url(images/Jaime2.jpg)'} containerImageOrder="image bg-image order-2" containerTextOrder= "text order-1"
                    containerText="Front-end and Mobile Developer"
                    containerSubtext={
                        <>
                            <p>Fascinated with new mobile technologies, Jaime decided to study Computer Science in National Polytechnic Institute where he increased the love and knowledges for web and mobile apps, reaching even more than 100k downloads of an app per year.</p>
                            <p>Watch movies, series, share social network memes and enter to hackathons to challenge his knowledge are some of his hobbies.</p>
                            <p>Always in continous search of new mobile coding and design related technologies to develop new applications to help the world and improve the day to day of many people with his apps while he does what he loves the most.</p>
                        </>
                    }/>
                <TeamContainer containerTitle="Alfredo Emilio Salgado Gómez" containerBackground= {'url(images/Alfredo2.png)'} containerImageOrder="image bg-image order-1" containerTextOrder= "text order-2"
                    containerText="Front-end Developer"
                    containerSubtext={
                    <>
                        <p>His story begins in the center for scientific and technological studies no.13 “Ricardo Flores Magón”, a school to which he is very grateful for the education.</p>
                        <p>Now, he is a graduate from Computer Science engineer in the National Polytechnic Institute, focused on the design of the front end with expertize in cryptography and artifficial intelligence, looking for the things he likes the most and attracts his attention.</p>
                        <p>Some of his passions are drawing, painting and making awesome designs, mainly interior designs. Always looking to learn new things that he knows can be useful in the future.</p>
                    </>
                }/>
            </div>

        </>
    );
}

export default Team;