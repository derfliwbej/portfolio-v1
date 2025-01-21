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
                <label htmlFor={company} className="bg-slate-950 flex flex-between items-center px-5 py-3 rounded-md drop-shadow-md cursor-pointer hover:bg-slate-900">
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
        <section id="experiences" className="py-16 mb-8">
            <h1 className="mb-10 text-center text-2xl text-lime-400 font-bold md:text-3xl">Previous Work Experiences</h1>
            <Experience company="Samsung R&D Institute Philippines" url="https://research.samsung.com/srph" role="Software Engineer" duration="December 2023 - Present">
                <ul>
                    <li className={styles['list-item']}>Consistently met <Emp>high stakeholder demands</Emp> by developing <Emp>high-quality</Emp> web applications in a <Emp>fast-paced</Emp> environment</li>
                    <li className={styles['list-item']}>Enabled Samsung Korea’s MX division to gain immediate <Emp>insights</Emp> to support decision-making processes by developing <Emp>data visualization interfaces</Emp> with <Emp>NextJS</Emp> and <Emp>React</Emp></li>
                    <li className={styles['list-item']}>Improved code readability, optimized application performance, and expedited development time by <Emp>refactoring</Emp> legacy <Emp>React</Emp> components and <Emp>JavaScript</Emp> code, while leveraging the power of <Emp>TypeScript</Emp> and <Emp>JavaScript ES6</Emp></li>
                    <li className={styles['list-item']}>Maintained a <Emp>seamless</Emp> user experience by integrating backend APIs into web applications</li>
                    <li className={styles['list-item']}>Streamlined frontend development and ensured consistent user interface across the application by implementing <Emp>highly reusable</Emp> and <Emp>highly documented</Emp> React microcomponents styled with <Emp>TailwindCSS</Emp></li>
                    <li className={styles['list-item']}>Collaborated closely with counterparts from Samsung Korea to achieve project milestones and ensure alignment with strategic objectives</li>
                    <li className={styles['list-item']}>Awarded Team Member of the Month on November 20, 2024</li>
                    <li className={styles['list-item']}>Passed Samsung Software Competency - Advanced Level showcasing my strength in data structures and algorithms</li>
                </ul>
            </Experience>
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