import { Link } from "react-router-dom";
import { BsArrowUpLeftSquareFill } from "react-icons/bs";


function HomePageCard({ level, name, image, url, github, discription}) {
  return (
    <div className="overflow-hidden bg-[#dcc49f] w-full max-w-[404px] mx-auto h-auto flex flex-col gap-4 border border-1 border-stone-500 rounded-md p-2 shadow-md bg-sto">
      <div className="w-full aspect-video bg-black overflow-hidden shrink-0 rounded border border-1 border-stone-500">
        <img
          src={image}
          alt="project-1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-full justify-between items-start">
        <Link to={url} className="w-full-64px block">
          <h1 className="text-stone-800 hover:text-stone-700 transition font-vazir font-bold text-xl sm:text-2xl mb-4 truncate">
            {name}
          </h1>
        </Link>
        <p className="text-stone-600">
          {discription}
        </p>
      </div>
      <footer className="pt-2 mt-auto border-t border-stone-500 flex justify-between items-center gap-2">
        <Link to={github} className="py-1 px-2 grow rounded-md bg-stone-800 hover:bg-stone-900 transition duration-500 text-stone-400 font-extralight flex justify-between items-center">
          مشاهده کد
          <BsArrowUpLeftSquareFill className="fill-stone-500"/>
        </Link>
        <span className="py-1 px-2 rounded-md block bg-stone-800 text-stone-400 font-extralight">
          {level}
        </span>
      </footer>
    </div>
  );
}

export default HomePageCard;
