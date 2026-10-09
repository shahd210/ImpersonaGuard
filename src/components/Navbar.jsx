import React from 'react'
import { NavLink } from "react-router-dom";
import { ShieldUser } from "lucide-react";
export default function Navbar() {
    return (
        <>
            <nav className='bg-[#0B0F17] sticky top-0 left-0 z-50 w-full flex items-center justify-between px-5 py-4 border-b border-zinc-800  '>
                <div className='w-1/4 flex items-center justify gap-3  font-sans font-semibold text-(--primary)'>
                    <ShieldUser className='text-xl' />
                    <span className=" text-lg font-['Space_Grotesk'] ">ImpersonaGuard</span>
                </div>
                <div className='w-1/2 font-semibold flex gap-7  text-(--secondary) '>
                    <NavLink>Home</NavLink>
                    <NavLink>How It Works</NavLink>
                    <NavLink>AI Engine</NavLink>
                    <NavLink>Use Cases</NavLink>
                    <NavLink>Compliance</NavLink>
                </div>
                <div className='w-1/4 text-amber-50 text-sm font-semibold flex  items-center justify-center gap-4'>
                    <button className='border border-zinc-800 px-3 py-2 rounded-xl'>View Demo</button>
                    <button className='bg-[#8258e4] px-3 py-2 rounded-xl'>Request Pilot</button>
                </div>
            </nav>
        </>
    )
}
