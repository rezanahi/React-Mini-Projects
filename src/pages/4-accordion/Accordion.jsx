import './Accordion.css'
import './Accordion-media.css'
import AccordionData from "./AccordionData";
import {useState} from 'react'
import Question from "../../components/Question/Question";

function Accordion () {
    const [accordionData, setAccordionData] = useState(AccordionData)

    return(
        <>
            <main className='min-h-screen flex justify-center items-center bg-fuchsia-800 '>
                <div className='w-[90vw] lg:w-[650px] my-20 mx-auto bg-white rounded-xl py-10 px-8 grid gap-y-4 gap-x-8'>
                    <h3 className='font-medium leading-5'>Question and answers about login</h3>
                    <section>
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