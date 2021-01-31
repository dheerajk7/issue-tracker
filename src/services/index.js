import URL from "../helpers/urls";

async function fetchProject() {
  const response = await fetch(URL.getProject());
  const responseJSON = await response.json();
  return responseJSON;
}

async function fetchProjectDetail(id) {
  const response = await fetch(URL.getProjectDetail(id));
  const responseJSON = await response.json();
  return responseJSON;
}

async function fetchIssueList(id) {
  const response = await fetch(URL.getIssueList(id));
  const responseJSON = await response.json();
  return responseJSON;
}

async function createNewProject(body) {
  const response = await fetch(URL.createProject(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseJSON = await response.json();
  return responseJSON;
}

async function createNewIssue(id, body) {
  const response = await fetch(URL.createIssue(id), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const responseJSON = await response.json();
  return responseJSON;
}
export {
  fetchProject,
  fetchProjectDetail,
  fetchIssueList,
  createNewProject,
  createNewIssue,
};
