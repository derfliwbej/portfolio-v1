import { Poppins } from "next/font/google";

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: '500'
});

export const Project = ({ children }) => {
    return (
        <div className="flex flex-col-reverse justify-center items-center gap-5 mb-20 lg:grid lg:grid-cols-12 lg:items-center">
            {children}
        </div>
    );
};

export const ProjectImages = ({ slidesClassName, orientation, children }) => {
    return (
        <div className={orientation === "left" ? "lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-2"
                                               : "lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:row-end-2"}>
            <ul className={slidesClassName}>
                {children.length ? children.map( (child, i) => {
                    return (
                        <li key={i}>{child}</li>
                    )
                }) : <li>{children}</li>}
            </ul>
        </div>
    );
};

export const ProjectContent = ({ orientation, children }) => {
    return (
        <div className={orientation === "right" ? "lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-2 lg:text-right"
                                                : "lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-2 lg:text-left"}>
            {children}
        </div>
    );
};

export const ProjectTitle = ({ children }) => {
    return (
        <h2 className="text-blue-400 font-bold text-xl mb-5">{children}</h2>
    );
};

export const ProjectLinks = ({ orientation, children }) => {
    return (
        <div className={orientation === "right" ? "flex flex-start mb-3 gap-3 lg:justify-end"
                                                : "flex -flex-start mb-3 gap-3"}>{children}</div>
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

