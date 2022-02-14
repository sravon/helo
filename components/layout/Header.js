import Image from "next/image";
import Headeritem from "./Headeritem";
import {
    HomeIcon,BadgeCheckIcon,
    CollectionIcon,LightningBoltIcon,
    SearchIcon,UserIcon, LogoutIcon,LoginIcon
} from "@heroicons/react/outline"
import { useContext } from "react";
import { AContext } from '../../context/AdminContext';

export default function Header() {
    const createUser = useContext(AContext)  
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-between max-w-2xl">
                <Headeritem title="Home" url="/" Icon={HomeIcon}/>
                <Headeritem title="Subscribe" url="/subscribe" Icon={BadgeCheckIcon}/>
                <Headeritem title="Search" url="/search" Icon={SearchIcon}/>
            {(createUser.isLoggedIn)?
                <Headeritem title="Logout" url="/logout" Icon={LogoutIcon}/>
                :
                <Headeritem title="LogIn" url="/login" Icon={LoginIcon}/>
            }
            </div>
            <Image
            className="object-contain"
            src="/logo.gif"
            width={200} height={100}
            />
        </header>
    )
}
