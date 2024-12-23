import './List.css'
import './List-media.css'



function List ({data}) {


    return(
        <>
            {data.map((item) => {
                const {id, name, age, image} = item
                return (
                        <article className='grid mb-6 items-center grid-cols-2-auto-fr gap-x-4' key={id}>
                            <img className='size-20 object-cover rounded-full shadow-lg' src={image} alt={name}/>
                            <div>
                                <h4 className='mb-1.5'>{name}</h4>
                                <p className='mb-0'>{age} years</p>
                            </div>
                        </article>
                )
            })}
        </>
    )
}



export default List