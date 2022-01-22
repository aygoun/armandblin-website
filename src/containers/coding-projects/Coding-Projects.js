import React, { useContext }  from 'react';
import "./Coding-Projects.css";
import {projects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Coding_Projects() {
    const {isDark} = useContext(StyleContext);

    if (!projects.display) {
      return null;
    }
    return (
    <div className="row my-margin-projects" id="projects">
        
        <Fade bottom duration={1000} distance="20px">
            <h1 className="skills-heading">{projects.title}</h1>
            {projects.projects.map(project => <div className="col-md-4 margin-card">
                <div className="module-border-wrap">
                    <div className={isDark ? "dark-mode-module" : "module"}>
                        <div className={isDark ? "dark-mode-card" : "card"}>
                            <img className="card-img-top " src={project.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className={isDark ? "dark-mode-card-title" : "card-title"}>{project.projectName}</h5>
                                <p className="card-text">{project.projectDesc}</p>
                                <div className="text-center">
                                    <p className="projects-view">{project.projectView}</p>
                                    <p className="card-project-status">{project.projectStatus}</p>
                                    {project.projectSecondStatus = "" ? "" :
                                    <p className="card-project-status">{project.projectSecondStatus}</p>}
                                    {project.footerDisplay ? <a className={isDark ? "dark-mode-myButton-projects" : "myButton-projects"}>Show project</a> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)} 
        </Fade>
    </div>
    );
}