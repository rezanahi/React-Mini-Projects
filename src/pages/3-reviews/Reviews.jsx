import './Reviews.css'
import './Reviews-media.css'

// Components
import Review from '../../components/Review/Review'


function Reviews () {


    return(
        <>
            <main className='p3-main'>
                <section className='p3-container'>
                    <div className='p3-title'>
                        <h2>Our Reviews</h2>
                        <div className='p3-underline'></div>
                    </div>
                    <Review></Review>
                </section>
            </main>
        </>
    )
}


export default Reviews