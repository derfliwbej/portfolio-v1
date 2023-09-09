'use client';
import { useState } from 'react';
import BootstrapImage from "@/components/image";

import styles from '@/styles/Hero.module.css';

const Button = ({ children }) => {
    return (
        <button type="submit" className="border border-lime-400 text-lime-400 rounded-sm px-8 py-3 hover:bg-lime-400 hover:bg-opacity-10">{children}</button>
    );
};

export default function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    const onImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <section className={`${styles['container']} lg:flex lg:flex-col lg:h-screen lg:justify-center lg:items-start lg:gap-5`}>
            <div className="flex flex-col lg:flex lg:gap-10 lg:flex-row-reverse lg:justify-between lg:items-center min-w-full">
                <div className="p-10 lg:p-0">
                    <div className={`flex-grow flex justify-center items-center`}>
                        <div className="relative">
                            <div className={imageLoaded ? styles['avatar-border--loaded'] : styles['avatar-border--loading']}>
                                <BootstrapImage handleLoadComplete={onImageLoad} className={`${styles['avatar']}`} src="/toga-square.jpg" alt="Me" size={400} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-5 lg:items-start">
                    <div className="text-center lg:text-left">
                        <h1 className="text-lg">Hi, I am</h1>
                    </div>
                    <div>
                        <h1 className="text-center text-3xl text-lime-400 font-bold md:text-4xl lg:text-6xl lg:text-left">Jeb Wilfred Panganiban</h1>
                        <h1 className="text-center text-3xl text-blue-400 font-bold md:text-4xl lg:text-6xl lg:text-left">Software Developer</h1>
                    </div>
                    <div className="text-center text-md  max-w-xl lg:text-lg lg:text-left">
                        I am a Filipino software developer. I have a passion for developing innovative tech solutions, and I am always trying to improve my skils. I graduated as Cum Laude with a degree of BS Computer Science in the University of the Philippines Los Baños.
                    </div>
                    <div className="text-center lg:text-left">
                        <form method="get" action="Jeb_Panganiban_Resume.pdf">
                            <Button>View My Resume</Button>
                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    );
}