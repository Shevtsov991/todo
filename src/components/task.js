import React from "react";

import { HiArchiveBoxXMark } from "react-icons/hi2"; //удалить
import { HiMiniCheckBadge } from "react-icons/hi2"; //завершить
import { HiMiniPencilSquare } from "react-icons/hi2"; // редактировать
import Addtask from "./addTask";

class Task extends React.Component {
  task = this.props.task;
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  render() {
    return (
      <div className={"task " + this.task.className}>
        <div className="icons-block">
          <HiArchiveBoxXMark
            className="icon "
            onClick={() => {
              this.props.onDel(this.task.id);
            }}
          />
          <HiMiniCheckBadge
            className={"icon " + this.task.isCompl}
            onClick={() => this.props.onComplite(this.task)}
          />
          <HiMiniPencilSquare
            className="icon"
            onClick={() => {
              console.log(this.task);
              this.setState({ editForm: !this.state.editForm });
            }}
          />
        </div>
        <h2 className="taskName">{this.task.taskName}</h2>
        <p className="taskDescription">{this.task.taskDescription}</p>
        {this.state.editForm && (
          <Addtask task={this.task} onAdd={this.props.onEdit} />
        )}
      </div>
    );
  }
}

export default Task;
