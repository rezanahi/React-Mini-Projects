import './List.css'
import './List-media.css'



function List ({data}) {


    return(
        <>
            {data.map((item) => {
                const {id, name, age, image} = item
                return (
                        <article className='person' key={id}>
                            <img src={image} alt={name}/>
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </article>
                )
            })}
        </>
    )
}



export default List