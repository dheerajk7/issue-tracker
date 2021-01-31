import React, { Component, createRef } from "react";
import { showMessage } from "../helpers";
import { createNewProject } from "../services";

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
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
    } else if (input === "author") {
      this.setState({ author: value });
    }
  };

  // handle form submission for creating new product
  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description, author } = this.state;
    if (title.length === 0 || description.length === 0 || author.length === 0) {
      showMessage("warning", "Missing Field", "Please Enter All Fields");
      return;
    }
    const response = createNewProject({ name: title, description, author });
    showMessage("success", "Successfull", "Project Created Successfully");
    this.formRef.current.reset();
  };

  render() {
    return (
      <div className="create-project-container">
        <div className="heading">Creat Project</div>
        <form ref={this.formRef}>
          <div className="input-container">
            <label>Name</label>
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

export default CreateProject;
