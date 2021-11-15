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
                <TeamContainer containerTitle="Featured DJ — Adrian Romo" containerBackground= {'url(images/person_1.jpg)'} containerImageOrder="image bg-image order-1" containerTextOrder= "text order-2"
                    containerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae repellendus temporibus vero sit natus."
                    containerSubtext="Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi. Iusto dolor, cum et."/>
                <TeamContainer containerTitle="Featured DJ — Jaime Espinosa" containerBackground= {'url(images/person_1.jpg)'} containerImageOrder="image bg-image order-2" containerTextOrder= "text order-1"
                    containerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae repellendus temporibus vero sit natus."
                    containerSubtext="Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi. Iusto dolor, cum et."/>
                <TeamContainer containerTitle="Featured DJ — Alfredo Gómez" containerBackground= {'url(images/person_1.jpg)'} containerImageOrder="image bg-image order-1" containerTextOrder= "text order-2"
                    containerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae repellendus temporibus vero sit natus."
                    containerSubtext="Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi. Iusto dolor, cum et."/>
                <SocialNetworksFooter />
            </div>

        </>
    );
}

export default Team;