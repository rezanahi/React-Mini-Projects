import './StripeHero.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";


function StripeHero () {
    const {closeModal} = useStripeAppContext()

    return(
        <>
            <section className='relative min-h-screen -mt-20 grid grid-cols-1 justify-center before:absolute before:w-full before:h-[65%] before:-top-0 before:left-0 before:bg-hero before:bg-cover before:bg-no-repeat overflow-visible before:z-0 md:before:bg-contain md:before:h-full' onMouseOver={closeModal}>
                <div className='mx-auto z-[1] w-[90vw] max-w-[1170px] grid items-center md:grid-cols-[2fr_1fr] xl:pb-[12vh] xl:items-end xl:grid-cols-[2fr_1fr]'>
                    <article className='p13-hero-info'>
                        <h1 className='text-5xl xl:max-w-full xl:text-8xl max-w-[500px] mb-8'>
                            Payment infrastructure for the internet
                        </h1>
                        <p className='text-xl max-w-[35rem]'>
                            Millions of companies of all sizes-from startup to Fortune 500s-use
                            Stripe's software and APIs to accept payments, send payouts, and manage their businesses online
                        </p>
                        <button className='text-lg py-1 px-3 rounded border-transparent text-white
                        bg-stone-900 cursor-pointer transition hover:bg-stone-800'>
                            Start Now
                        </button>
                    </article>
                    <article className='hidden md:block md:justify-self-center xl:self-end'>
                        <img src='/images/phone.svg' className='md:w-48 xl:w-60' alt='phone'/>
                    </article>
                </div>
            </section>
        </>
    )
}

export default StripeHero