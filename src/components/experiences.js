import { Poppins } from 'next/font/google';

import styles from '@/styles/Experience.module.css';

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: '500'
});

const Experience = ({ company, url, role, duration, children }) => {
    return (
        <div className="mx-auto max-w-xl mb-5 shadow-2xl">
            <div className="overflow-hidden">
                <input type="checkbox" id={company} className={styles['checkbox']} />
                <label for={company} className="bg-slate-950 flex flex-between items-center px-5 py-3 rounded-md drop-shadow-md cursor-pointer hover:bg-slate-900">
                    <div className="flex-grow">
                        <a href={url} className="font-bold text-xl hover:text-blue-400">{company}</a>
                        <h2 className="text-lg text-purple-200">{role}</h2>
                        <span>{duration}</span>
                    </div>
                    <div className={`${styles['chevron']} text-xl`}>
                        &#x276F;
                    </div>
                </label>
                <div className={styles['experience-content']}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const Emp = ({ children }) => {
    return (
        <span className="text-lime-400">{children}</span>
    );
};

export default function Experiences() {
    return (
        <section id="experiences" className="py-5 mb-20">
            <h1 className="mb-10 text-center text-2xl text-lime-400 font-bold md:text-3xl">Previous Work Experiences</h1>
            <Experience company="KlaudSol" url="https://www.klaudsol.com/" role="Software Engineer Intern" duration="June 2022 - August 2022">
                <ul>
                    <li className={styles['list-item']}>Worked on a <Emp>NextJS</Emp> application hosted on <Emp>AWS Amplify</Emp>, and worked with other different <Emp>AWS</Emp> tools such as <Emp>Aurora Serverless</Emp>, <Emp>S3</Emp>, and <Emp>Route 53</Emp></li>
                    <li className={styles['list-item']}>Implemented a <span className="text-lime-400">CRUD</span> user interface, along with the API routes that the interface calls on using <Emp>NextJS API Routes</Emp> to communicate with an <Emp>Amazon Aurora Serverless</Emp> database instance hosted on the cloud</li>
                    <li className={styles['list-item']}>Created a web interface that performs <Emp>PDF manipulations</Emp></li>
                    <li className={styles['list-item']}>Collaborated with other interns in developing features in our assigned project using <Emp>Git</Emp>, and made <Emp>successful pull requests</Emp> on <Emp>GitHub</Emp> that have been merged</li>
                    <li className={styles['list-item']}>Programmatically <Emp>migrated</Emp> DNS records on <Emp>AWS Route 53</Emp></li>
                </ul>
            </Experience>
        </section>
    );
}