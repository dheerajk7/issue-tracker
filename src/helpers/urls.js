const API_ROOT = "https://60100e2f6c21e1001704fcc9.mockapi.io";

const getProject = () => `${API_ROOT}/project`;
const getProjectDetail = (id) => `${API_ROOT}/project/${id}`;
const getIssueList = (id) => `${API_ROOT}/project/${id}/issue`;
const createProject = () => `${API_ROOT}/project`;
const createIssue = (id) => `${API_ROOT}/project/${id}/issue`;
export default {
  getProject,
  getProjectDetail,
  getIssueList,
  createProject,
  createIssue,
};
