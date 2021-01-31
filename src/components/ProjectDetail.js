import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProjectDetail, fetchIssueList } from "../services";
import "../styles/Home.scss";

export default function ProjectDetail(props) {
  const [projectDetail, setProjectDetail] = useState({
    project: {},
    issueList: [],
  });

  const [updatedIssueList, setUpdatedList] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    if (isSorted) {
      let sortedList = [...issueList].sort((a, b) => {
        return a.number - b.number;
      });
      setUpdatedList(sortedList);
    } else {
      setUpdatedList(issueList);
    }
  }, [isSorted]);

  useEffect(async () => {
    const id = props.match.params.id;
    const projectDetail = await fetchProjectDetail(id);
    const issueList = await fetchIssueList(id);
    setProjectDetail({
      project: projectDetail,
      issueList: issueList,
    });
    setUpdatedList(issueList);
  }, []);

  const { issueList, project } = projectDetail;
  return (
    <div className="project-detail-container">
      <div className="project-detail">
        <div className="project-title-container">
          <span>Project Title</span>
          <span>{project.name}</span>
        </div>
        <div className="project-title-container">
          <span>Author</span>
          <span>{project.author}</span>
        </div>
        <div className="description-container">
          <span className="heading">Description</span>
          <span>{project.description}</span>
        </div>
        <div className="button-container">
          <Link to={`/create-new-issue/${project.id}`}>Create New Issue</Link>
        </div>
      </div>
      <ul className="project-list">
        <div className="project-heading">
          <span>Project Issues</span>
          <button
            onClick={() => {
              setIsSorted(!isSorted);
            }}
          >
            {isSorted ? "Cancle Sorting" : "Sort By Number"}
          </button>
        </div>
        {updatedIssueList.length > 0 && (
          <div className="table-header">
            <span>Number</span>
            <span>Title</span>
            <span>Author</span>
          </div>
        )}
        {updatedIssueList.map((issue) => {
          return (
            <li key={issue.id} className="issue-list">
              <Link to={"/project/" + issue.id}>
                <div className="title-container">
                  <span>{issue.number}</span>
                  <span>{issue.title}</span>
                  <span>{issue.author}</span>
                </div>
              </Link>
              <div className="description-container">
                <span className="description"> Description</span>
                <span>{issue.description}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
