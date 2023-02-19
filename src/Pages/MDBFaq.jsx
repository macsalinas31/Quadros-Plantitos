import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import '../Css/faq.css'


export default function MDBFaq(){
    
    return(
        <section className="questions section" id="faqs">
        <h2 className="section__title-center questions__title container">
            Some common questions <br /> were often asked
        </h2>

        <MDBAccordion className="questions__container container grid">
            <div  className="questions__group">
                <MDBAccordionItem collapseId={1} headerTitle='My flowers are falling off or dying?' className="questions__item">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your 
                            space but which planet is for you. Choosing the right plant.
                        </p>
                </MDBAccordionItem>

                <MDBAccordionItem collapseId={2} headerTitle='What causes leaves to become pale?' className="questions__item">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your 
                            space but which planet is for you. Choosing the right plant.
                        </p>
                </MDBAccordionItem>

                <MDBAccordionItem collapseId={3} headerTitle='What causes brown crispy leaves?' className="questions__item">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your 
                            space but which planet is for you. Choosing the right plant.
                        </p>
                </MDBAccordionItem>
            </div >

            <div  className="questions__group">
                <MDBAccordionItem collapseId={4} headerTitle='How do i choose a plant?' className="questions__item">
                        <p className="questions__description">
                            Plants are easy way to add color energy and transform your 
                            space but which planet is for you. Choosing the right plant.
                        </p>
                </MDBAccordionItem>

                <MDBAccordionItem collapseId={5} headerTitle='How do I change the pots?' className="questions__item">
                    
                        <p className="questions__description">
                        <i className="ri-add-line questions__icon"></i>
                            Plants are easy way to add color energy and transform your 
                            space but which planet is for you. Choosing the right plant.
                        </p>
                </MDBAccordionItem>

                <MDBAccordionItem collapseId={6} headerTitle='Why are gnats flying around my plant?' className="questions__item">
                    
                        <p className="questions__description">
                        <div className="questions__content">
                        <i className="ri-add-line questions__icon"></i>
                            Plants are easy way to add color energy and transform your 
                            space but which planet is for you. Choosing the right plant.
                            </div>
                        </p>
                </MDBAccordionItem>
            </div >
        </MDBAccordion>
    </section>
    )

}
