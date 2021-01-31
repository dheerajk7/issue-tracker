import React, { Component, createRef } from "react";
import "../styles/CreateIssue.scss";
import { showMessage } from "../helpers";
import { createNewIssue } from "../services";

class CreateIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      label: "",
      author: "",
    };
    this.formRef = createRef();
  }

  // handle input form change and saving them in state
  handleChange = (input, value) => {
    if (input === "title") {
      this.setState({ title: value });
    } else if (input === "description") {
      this.setState({ description: value });
    } else if (input === "label") {
      this.setState({ label: value });
    } else if (input === "author") {
      this.setState({ author: value });
    }
  };

  // handle form submission for creating new product
  handleSubmit = async (event) => {
    event.preventDefault();
    const { title, description, label, author } = this.state;
    // checking if any field in form is empty
    // showing alert if any field is empty
    if (
      title.length === 0 ||
      description.length === 0 ||
      label.length === 0 ||
      author.length === 0
    ) {
      showMessage("warning", "Missing Field", "Please Enter All Fields");
      return;
    }
    const response = await createNewIssue(this.props.match.params.projectId, {
      title,
      description,
      author,
      label: label.split(","),
      number: Date.now() % 1000,
    });
    this.formRef.current.reset();
  };

  // rendering add product component
  render() {
    return (
      <div className="create-project-container">
        <div className="heading">Creat Issue</div>
        <form ref={this.formRef}>
          <div className="input-container">
            <label>Title</label>
            <input
              type="text"
              required={true}
              placeholder="Title"
              onChange={(event) => {
                this.handleChange("title", event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label>Description</label>
            <input
              type="text"
              required={true}
              placeholder="Description"
              onChange={(event) => {
                this.handleChange("description", event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label>Labels (Comma Separated)</label>
            <input
              type="text"
              required={true}
              placeholder="Labels"
              onChange={(event) => {
                this.handleChange("label", event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label>Author</label>
            <input
              type="text"
              required={true}
              placeholder="Author"
              onChange={(event) => {
                this.handleChange("author", event.target.value);
              }}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateIssue;
