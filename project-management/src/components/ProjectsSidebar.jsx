import Button from "./Button";


export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-500 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl textstone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject} > + Add Project </Button>
            </div>
            <ul>
                {
                    projects.map((project) => {
                        let cssClassess = "w-full text-left px-2 py-1 rounded-sm my-1  hover:bg-stone-800 hover:text-stone-200";
                        if (project.id === selectedProjectId) {
                            cssClassess += " bg-stone-800 text-stone-200";
                        } else {
                            cssClassess += " text-stone-400";
                        }

                        return <li key={project.id}>
                            <button className={cssClassess}
                                onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
                            </button>

                        </li>;
                    })

                }
            </ul>
        </aside>
    );
}