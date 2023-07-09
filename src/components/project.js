import { Poppins } from "next/font/google";

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: '500'
});

export const Project = ({ children }) => {
    return (
        <div className="flex flex-col-reverse justify-center items-center gap-5 lg:grid lg:grid-cols-12 lg:items-center">
            {children}
        </div>
    );
};

export const ProjectImages = ({ slidesClassName, children }) => {
    return (
        <div className="lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-2">
            <ul className={slidesClassName}>
                {children.map( (child, i) => {
                    return (
                        <li key={i}>{child}</li>
                    )
                })}
            </ul>
        </div>
    );
};

export const ProjectContent = ({ children }) => {
    return (
        <div className="lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-2 lg:text-right">
            {children}
        </div>
    );
};

export const ProjectTitle = ({ children }) => {
    return (
        <h2 className="text-blue-400 font-bold text-xl mb-5">{children}</h2>
    );
};

export const ProjectLinks = ({ children }) => {
    return (
        <div className="flex flex-start mb-3 gap-3 lg:justify-end">{children}</div>
    );
};

export const ProjectDescription = ({ description, tools }) => {
    return (
        <div className="bg-slate-950 px-5 py-3 rounded-md drop-shadow-xl">
            <p>{description}</p>
            <ul className="flex flex-wrap lg:flex-row-reverse gap-x-5 gap-y-3 mt-2">
                {tools.map( (tool, i) => {
                    return (
                        <li key={i} className={`${poppins.className} border-lime-400 rounded-xl border px-3 text-sm`}>{tool}</li>
                    )
                })}
            </ul>
        </div>
    );
};

