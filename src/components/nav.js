import styles from '@/styles/Nav.module.css';

export default function Nav() {
    return (
        <div className={`${styles['nav']} fixed z-10 w-full`}>
            <div className="flex justify-center lg:justify-end px-10 py-5">
                <ul className="flex gap-10">
                    <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                    <li><a href="#experiences" className="hover:text-blue-400">Experiences</a></li>
                    <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}