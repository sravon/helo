import { DeviceMobileIcon } from "@heroicons/react/outline";

export default function Subsitems(props) {
    return (
        <div className="p-2 group ease-in 
            transition sm:hover:scale-105 hover:z-50 border m-1">
            <h2 className="text-xl text-center">{props.title}</h2>
            <div className="flex items-center lg:text-sm md:text-xs pt-5 w-1/3 mx-auto">
                <p className="line-through mr-2">$7.99</p>
                <div className="p-2 rounded bg-green-900">SAVE 80%</div>
            </div>
            <p className="text-7xl font-bold text-red-700
            text-center pt-5 pb-5">{props.price}$<span className="text-lg text-white">/mo</span></p>
            <div className="w-1/2 mx-auto">
                <button className="text-xl ml-2 bg-emerald-300 p-4 text-red-800" onClick={()=>props.data(props.title)} >GET STARTED</button>
            </div>
            <div className="p-2 space-y-2">
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">Feature</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    <DeviceMobileIcon className="h-5 mx-2"/>
                    <span className="text-sm">{props.package.one}</span>
                </p>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    <DeviceMobileIcon className="h-5 mx-2"/>
                    <span className="text-sm">{props.package.two}</span>
                </p>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    <DeviceMobileIcon className="h-5 mx-2"/>
                    <span className="text-sm">{props.package.three}</span>
                </p>
            </div>
            
            
        </div>
    )
}
