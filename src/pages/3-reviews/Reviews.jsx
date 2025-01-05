import './Reviews.css'
import './Reviews-media.css'

// Components
import Review from '../../components/Review/Review'


function Reviews () {


    return(
        <>
            <main className='min-h-screen grid place-items-center'>
                <section className='w-screen max-w-[450px] my-20'>
                    <div className='mb-16 text-center'>
                        <h2>Our Reviews</h2>
                        <div className='w-20 h-1 bg-emerald-500 mx-auto'></div>
                    </div>
                    <Review></Review>
                </section>
            </main>
        </>
    )
}


export default Reviews