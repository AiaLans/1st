import { Component } from "react";
import "./add-task.css";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.taskName.length < 3) return;
    this.props.onAdd(this.state.taskName);
    this.setState({
      taskName: "",
    });
  };

  render() {
    const { taskName } = this.state;
    return (
      <div className="add-task">
        <h3>Add your new task</h3>
        <form className="add-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="add-input"
            placeholder="write here...."
            name="taskName"
            value={taskName}
            onChange={this.onValueChange}
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddTask;