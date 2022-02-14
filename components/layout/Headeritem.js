import Link from "next/link";

export default function Headeritem({Icon, title, url}) {
    return (
        <div className=" cursor-pointer group w-12 sm:w-20 hover:text-white">
            <Link href={url}>
                <a className="flex flex-col items-center">
                    <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
                    <p className="opacity-0 text-sm group-hover:opacity-100 tracking-widest">
                        {title}
                    </p>
                </a>
            </Link>
        </div>
    )
}
