import "../styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  CreateIssue,
  CreateProject,
  Home,
  Navbar,
  ProjectDetail,
} from "../components";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="blank-nav"></div>
        <Navbar />
        <Switch>
          <Route path="/create-project" component={CreateProject} />
          <Route path="/" exact component={Home} />
          <Route path="/create-new-issue/:projectId" component={CreateIssue} />
          <Route path="/project/:id" component={ProjectDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
