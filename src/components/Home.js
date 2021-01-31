import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProject } from "../services";
import "../styles/Home.scss";

export default function Home() {
  const [projectList, setProjectList] = useState([]);

  useEffect(async () => {
    const response = await fetchProject();
    setProjectList(response.reverse());
  }, []);

  console.log(projectList, "list");
  return (
    <div className="home-container">
      <ul className="project-list">
        <div className="project-heading">Projects</div>
        {projectList.map((project) => {
          return (
            <li key={project.id}>
              <Link to={"/project/" + project.id}>{project.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
