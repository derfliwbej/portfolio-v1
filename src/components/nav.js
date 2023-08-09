"use client"

import Drawer from './drawer';
import styles from '@/styles/Nav.module.css';
import { useContext } from 'react';
import { DrawerContext } from '@/context/DrawerContext';

export default function Nav() {
    const { open, setOpen } = useContext(DrawerContext)

    return (
        <>
            <div className={`${styles['nav']} hidden md:block md:fixed z-10 w-full`}>
                <div className="flex justify-center lg:justify-end px-10 py-5">
                    <ul className="flex gap-10">
                        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                        <li><a href="#experiences" className="hover:text-blue-400">Experiences</a></li>
                        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#300a24] md:hidden block fixed z-10 w-full">
                <div className="flex justify-end px-10 py-5">
                    <div className="cursor-pointer" onClick={() => setOpen(prev => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1.25em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    </div>
                </div>
            </div>
            {open && <Drawer />}
        </>
    );
}