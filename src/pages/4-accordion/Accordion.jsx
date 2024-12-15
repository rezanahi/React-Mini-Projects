import './Accordion.css'
import './Accordion-media.css'
import AccordionData from "./AccordionData";
import {useState} from 'react'
import Question from "../../components/Question/Question";

function Accordion () {
    const [accordionData, setAccordionData] = useState(AccordionData)

    return(
        <>
            <main className='p4-main'>
                <div className='p4-container'>
                    <h3>Question and answers about login</h3>
                    <section className='p4-info'>
                        {
                            accordionData.map((question) => {
                                return <Question key={question.id} {...question}></Question>
                            })
                        }
                    </section>
                </div>
            </main>
        </>
    )
}


export default Accordion