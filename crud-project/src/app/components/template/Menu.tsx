import {IconHome} from '@tabler/icons-react'
import Link from "next/link"

export interface MenuProps{
    children: any
}

function MenuItem(){
    return(
        <Link href="/" className='flex gap-2 px-4 py-2 hover:bg-black '>
            <IconHome/>

            <span>Início</span>
        </Link>
    )
}


export default function Menu(){
    return (
        <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-1 py-5">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </nav>
        </aside>
    )   
}