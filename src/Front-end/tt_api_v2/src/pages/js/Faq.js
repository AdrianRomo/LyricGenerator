import React from 'react';
import { CollapsedListItem } from '../../components/CollapsedListItem';
import { Header } from '../../components/Header';
import MobileMenu from '../../components/MobileMenu';

function FAQ() {
    return (
        <>
            <div>
                <MobileMenu />
                <Header headerClass="site-blocks-cover inner-page-cover overlay" headerTitle= "Frequently Asked Questions" headerTitleClass="text-white h1" background={'url("images/hero_bg_3.jpg")'}/>
                <div className="site-section">
                    <div className="container">
                        <div className="row justify-content-center" data-aos="fade" data-aos-delay={100}>
                            <div className="col-md-8">
                                <div className="accordion unit-8" id="accordion">
                                    <CollapsedListItem itemId="collapseOne"
                                        isExpanded= "true"
                                        itemTitle="Why my lyric doesn't make sense?"
                                        itemParagraph={
                                        <p>
                                            NeuraLyrics makes an API call to a loaded model with tokenized words and according the most used words
                                            in other lyrics from other artists, makes a prediction with the most accurate word, right now, our model was trained with 700
                                            lyrics but in a future project the idea is to generate a model with a dataset that we already have with 28000+ lyrics to get
                                            better and more useful predictions.
                                        </p>
                                        }/>
                                    <CollapsedListItem itemId="collapseTwo"
                                        isExpanded= "false"
                                        itemTitle="Why I can't put more than one word in my lyric topic?"
                                        itemParagraph={
                                            <p>
                                                To give better and more coherent results and to operate in more devices due time processing of each request,
                                                the application will only accept one word at a time.
                                            </p>
                                        }/>
                                    <CollapsedListItem itemId="collapseThree"
                                        isExpanded= "false"
                                        itemTitle="How many languages do NeuraLyrics support?"
                                        itemParagraph={
                                            <p>
                                                At the moment we only support English, this is because the dataset we used only has english songs,
                                                maybe in the future we'll support Spanish, Portuguese, and more!
                                            </p>
                                        }/>
                                    <CollapsedListItem itemId="collapseFour"
                                        isExpanded= "false"
                                        itemTitle="How many genres do NeuraLyrics support?"
                                        itemParagraph={
                                            <p>
                                                The database used for the construction of NeuraLyrics model is
                                                Pop genre, since we found that has a more defined structure than other genres, we also have
                                                bases from other genres such as rock, hip hop, samba, sertanejo, funk and we hope to be able to add them to the model 
                                                in the future.
                                            </p>
                                        }/>
                                    <CollapsedListItem itemId="collapseFive"
                                        isExpanded= "false"
                                        itemTitle="What kind of Neural Networks do NeuraLyrics use?"
                                        itemParagraph={
                                            <p>
                                                NeuraLyrics goal is to  predict text to help musicians and create new text based in other text,
                                                so to reach that, we used Bidirectional Long Short Term Memory Neural Networks to detect previous words so a new one can be predicted.
                                            </p>
                                        }/>
                                    <CollapsedListItem itemId="collapseSix"
                                        isExpanded= "false"
                                        itemTitle="Why is there a Developer tab?"
                                        itemParagraph={
                                            <p>
                                                If anyone in the future wants to use the model API in the Developers section, they can read the documentation to interact with the API and
                                                the model.       
                                            </p>
                                        }/>
                                    <CollapsedListItem itemId="collapseSeven"
                                        isExpanded= "false"
                                        itemTitle="The word that I submit is important?"
                                        itemParagraph={
                                            <p>
                                                Yes, the word submitted is important because NeuraLyrics generate all the lyric based on that word, it's the topic of the song.
                                            </p>
                                        }/>
                                    <CollapsedListItem itemId="collapseEight"
                                        isExpanded= "false"
                                        itemTitle="May I own the generated lyrics from NeuraLyrics?"
                                        itemParagraph={ 
                                            <p>According to the Federal Copyright Law, the way in which an author expresses when creating his work is what is protected by law against fraudulent actions. Based on the Federal Copyright Law Chapter IV Article 107 ''
                                                The databases or other readable materials by means of machines or in any other way, which for reasons of selection and disposition of their content constitute intellectual creations, will remain protected as compilations.'' 
                                                Therefore, the lyrics generated by our system are not intended and cannot be registered, since these generated results would be ours. You can 
                                                <a href="http://www.diputados.gob.mx/LeyesBiblio/pdf/122_010720.pdf"> check it here.</a>
                                            </p> 
                                        }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;