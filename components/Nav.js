import { getAllEvents } from "../utills/request"
import { useRouter } from 'next/router'

export default function Nav() {
    const allevents = getAllEvents();
    const router = useRouter()
    return (
        <nav>
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">
                {allevents.map( event => <h2 
                    key={event.id} 
                    onClick={()=>router.push(`/?genre=${event.cid}`)}
                    className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125
                    hover:text-white active:text-red-500"
                    >{event.title}</h2>)}
            </div>
        </nav>
    )
}
