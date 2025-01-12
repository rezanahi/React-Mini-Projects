import {Link} from "react-router-dom";


function HomePageCard ({level, name, image, url}) {


    return (
        <div className='overflow-hidden w-full h-auto flex flex-col gap-4'>
            <div className='w-full aspect-square bg-black overflow-hidden shrink-0 rounded-2xl border-4 border-stone-800 shadow-md'>
                <img src={image} alt='project-1' className='w-full h-full object-cover'/>
            </div>
            <div className='flex w-full justify-between items-start'>
                <Link to={url} className='w-full-64px block'>
                    <h1 className='text-stone-800 font-vazir font-bold text-2xl mb-4 truncate'>
                        {name}
                    </h1>
                </Link>
                <span className='py-1 px-2 rounded-md block bg-stone-800 text-stone-400 font-extralight'>
                    {level}
                </span>
            </div>
        </div>
    )
}


export default HomePageCard