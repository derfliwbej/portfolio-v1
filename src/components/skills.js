import { Poppins } from 'next/font/google';
import BootstrapImage from '@/components/image';

import styles from '@/styles/Skills.module.css';

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: '500'
  });

const SkillIcon = ({ src, size, children }) => {
    return (
        <div className={`${styles['gradient-border']}`}>
            <div className="bg-slate-950 px-5 py-2 flex flex-col gap-2 items-center rounded-md">
                <BootstrapImage size={size} src={src}></BootstrapImage>
                <div className="leading-3 text-xs md:text-sm">{children}</div>
            </div>
        </div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-16">
            <h1 className="mb-10 text-center text-3xl text-lime-400 font-bold md:text-5xl">My Skills</h1>
            <div className={`${poppins.className} flex gap-5 justify-center items-start`}>
                <div className="flex flex-col gap-5">
                    <SkillIcon size="75" src="/js_logo.svg">JAVASCRIPT</SkillIcon>
                    <SkillIcon size="75" src="/html_logo.svg">HTML</SkillIcon>
                    <SkillIcon size="75" src="/css_logo.svg">CSS</SkillIcon>
                    <SkillIcon size="75" src="/tailwind_logo.svg">TAILWINDCSS</SkillIcon>
                </div>
                <div className="flex flex-col gap-5">
                    <SkillIcon size="75" src="/flutter_logo.svg">FLUTTER</SkillIcon>
                    <SkillIcon size="75" src="/mongodb_logo.svg">MONGODB</SkillIcon>
                    <SkillIcon size="75" src="/postgresql_logo.svg">POSTGRESQL</SkillIcon>
                    <SkillIcon size="75" src="/nodejs_logo.svg">NODEJS</SkillIcon>
                </div>
                <div className="flex flex-col gap-5">
                    <SkillIcon size="75" src="/expressjs_logo.svg">EXPRESSJS</SkillIcon>
                    <SkillIcon size="75" src="/nextjs_logo.svg">NEXTJS</SkillIcon>
                    <SkillIcon size="75" src="/react_logo.svg">REACTJS</SkillIcon>
                    <SkillIcon size="75" src="/git_logo.svg">GIT</SkillIcon>
                </div>
            </div>
        </section>
    );
}