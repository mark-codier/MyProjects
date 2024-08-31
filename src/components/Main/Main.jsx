import SideBar from "./sideBar";
import NewProject from "./newProject";
import NoProjectSelected from "./NoProject";
import { useState } from "react";
import SelectedProject from "./SelectedProject";
export default function Main() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: JSON.parse(localStorage.getItem("projects")) || [],
    redactedProject: undefined,
  }); //selectedProject = undefined если ничто не выбрано(а если выбран add Project, то равен null и включается NewProject)(Если выбран проект, то Selectedproject = id)
  function HandleRedactProject(id){
    setProjectState(prevState=>{
        return{
            ...prevState,
            selectedProject: null,
            redactedProject: id
        }
    })
  }
  function HandleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }
  function HandleCloseAdding() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProject: undefined, redactedProject: undefined };
    });
  }
  function HandleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProject: null };
    }); // || 'adding'
  }
  function HandleDeleteProject(id) {
    id == null ? undefined :  
    setProjectState((prevState) => {
      let valuesArr = Object.values(prevState.projects);
      const badValue = prevState.projects[id];
      const projectsObj = valuesArr.reduce((acc, obj) => {
        const ID = Math.random();
        if (badValue !== obj) {
          obj.id = ID;
          acc[ID] = obj;
          return acc;
        } else {
          return acc;
        }
      }, {});
      localStorage.setItem("projects", JSON.stringify(projectsObj));
      return {
        ...prevState,
        selectedProject: undefined,
        projects: projectsObj,
      };
    });
  }
  function HandleSaveProj(projectData) {
    setProjectState((prevState) => {
      let ArrOfData = Object.values(prevState.projects);
      ArrOfData.push(projectData);
      const len = ArrOfData.length - 1
      let lastProj = undefined
      const projectsObj = ArrOfData.reduce((acc, obj,i) => {
        const ID = Math.random();
        if(i == len){ lastProj = ID }
        obj.id = ID;
        acc[ID] = obj;
        return acc;
      }, {});
      localStorage.setItem("projects", JSON.stringify(projectsObj));
      return {
        ...prevState,
        selectedProject: lastProj,
        projects: projectsObj,
      };
    });
  }

  let content;
  if (projectState.selectedProject === null) {
    content = (
      <NewProject onDelete={HandleDeleteProject} state={projectState} onClose={HandleCloseAdding} onSave={HandleSaveProj} />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAdd={HandleStartAddProject} />;
  } else {
    content = (
      <SelectedProject
        onDelete={HandleDeleteProject}
        onClose={HandleCloseAdding}
        onRedact={HandleRedactProject}
        obj={projectState.projects[projectState.selectedProject]}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onSelect={HandleSelectProject}
        state={projectState}
        onStartAdd={HandleStartAddProject}
      />
      {content}
    </main>
  );
}
