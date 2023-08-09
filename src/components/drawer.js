"use client"

import { DrawerContext } from "@/context/DrawerContext"
import { useContext } from "react"

export default function Drawer() {
    const { setOpen } = useContext(DrawerContext)

    const closeDrawer = () => setOpen(false)

    return (
        <>
            <aside className="w-[min(100vw,_300px)] px-12 py-5 bg-[#2C001E] z-30 fixed right-0 top-0 bottom-0 h-full shadow-lg animate-drawer-open">
                <div className="flex justify-end">
                    <div className="cursor-pointer" onClick={closeDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1.25em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                    </div>
                </div>
                <ul className="h-full flex flex-col gap-5 items-center justify-center">
                    <li><a href="#skills" className="hover:text-blue-400" onClick={closeDrawer}>Skills</a></li>
                    <li><a href="#experiences" className="hover:text-blue-400" onClick={closeDrawer}>Experiences</a></li>
                    <li><a href="#projects" className="hover:text-blue-400" onClick={closeDrawer}>Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400" onClick={closeDrawer}>Contact</a></li>
                </ul>
            </aside>
            <div className="bg-black opacity-60 fixed z-20 h-full w-full" onClick={closeDrawer}></div>
        </>
    )
}