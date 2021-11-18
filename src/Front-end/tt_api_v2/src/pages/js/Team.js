import React from 'react';
import { Header } from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';
import SocialNetworksFooter from '../../components/SocialNetworksFooter';
import { TeamContainer } from '../../components/TeamContainer';

function Team() {
    return (
        <>
            <div>
                <MobileMenu />
                <Header headerClass="site-blocks-cover inner-page-cover overlay" headerTitle= "Our Team" headerTitleClass="text-white h1" background={'url("images/hero_bg_3.jpg")'}/>
                <TeamContainer containerTitle="Featured DJ — Adrian Romo" containerBackground= {'url(images/Adrian1.jpg)'} containerImageOrder="image bg-image order-1" containerTextOrder= "text order-2"
                    containerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae repellendus temporibus vero sit natus."
                    containerSubtext="Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi. Iusto dolor, cum et."/>
                <TeamContainer containerTitle="Featured DJ — Jaime Espinosa" containerBackground= {'url(images/Jaime1.jpg)'} containerImageOrder="image bg-image order-2" containerTextOrder= "text order-1"
                    containerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae repellendus temporibus vero sit natus."
                    containerSubtext="Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi. Iusto dolor, cum et."/>
                <TeamContainer containerTitle="Alfredo Emilio Salgado Gómez" containerBackground= {'url(images/Alfredo2.png)'} containerImageOrder="image bg-image order-1" containerTextOrder= "text order-2"
                    containerText="Proud graduate of the center for scientific and technological studies no.13 “Ricardo Flores Magón”, a school to which I am grateful for my education. Graduated from this school as a computer technician, I’m a person who does with interest the things that he likes and attracts his attention, if they don’t interest me, I postpone them as long as possible."
                    containerSubtext="What I like to do the most and what I dedicate almost all my free time and passion is drawing, painting and designing, mainly interior design. I’m always looking to learn new things that I know may be useful to me in the future. One problem I have is that sometimes I become a perfectionist."/>
                <SocialNetworksFooter />
            </div>

        </>
    );
}

export default Team;