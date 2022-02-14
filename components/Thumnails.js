import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Thumnails({ result }) {
    const text = result.created_at
    const myarray = text.split("T")
    return (
        <div className="p-2 group cursor-pointer ease-in transition sm:hover:scale-105 hover:z-50">
            <Image 
                layout="responsive"
                src={result.image}
                height={1080} width={1920}
            />
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {myarray[0]}
                    <ThumbUpIcon className="h-5 mx-2"/> {result.votecount}
                </p>
            </div>
        </div>
    )
}
