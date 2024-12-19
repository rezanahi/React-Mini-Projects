import './StripeHero.css'
import {useStripeAppContext} from "../../pages/13-stripe/context";


function StripeHero () {
    const {closeModal} = useStripeAppContext()

    return(
        <>
            <section className='p13-hero'>
                <div className='p13-hero-center'>
                    <article className='p13-hero-info'>
                        <h1>
                            Payment infrastructure for the internet
                        </h1>
                        <p>
                            Millions of companies of all sizes-from startup to Fortune 500s-use
                            Stripe's software and APIs to accept payments, send payouts, and manage their businesses online
                        </p>
                        <button className='p13-btn'>
                            Start Now
                        </button>
                    </article>
                    <article className='p13-hero-images'>
                        <img src='/images/phone.svg' className='p13-phone-img' alt='phone'/>
                    </article>
                </div>
            </section>
        </>
    )
}

export default StripeHero