import React from "react";
import Task from "./task";

class Tasks extends React.Component {
  render() {
    if (this.props.tasks.length > 0)
      return (
        <div>
          {this.props.tasks.map((el) => (
            <Task
              key={el.id}
              task={el}
              onDel={this.props.onDel}
              onComplite={this.props.onComplite}
              onEdit={this.props.onEdit}
            />
          ))}
        </div>
      );
    else
      return (
        <div className="task">
          <h3>Задч нет</h3>
        </div>
      );
  }
}

export default Tasks;
