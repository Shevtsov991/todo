import React from "react";

class Addtask extends React.Component {
  taskAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDescription: "",
    };
  }
  render() {
    return (
      <form ref={(el) => (this.myForm = el)} className="addForm">
        <input
          className="addForm__input"
          placeholder="Введите название задачи"
          onChange={(e) => this.setState({ taskName: e.target.value })}
        ></input>
        <textarea
          className="addForm__textarea"
          placeholder="Введите описание задчи"
          onChange={(e) => this.setState({ taskDescription: e.target.value })}
        ></textarea>
        <button
          className="addForm__btn"
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.taskAdd = {
              taskName: this.state.taskName,
              taskDescription: this.state.taskDescription,
            };
            if (this.props.task) this.taskAdd.id = this.props.task.id;
            this.props.onAdd(this.taskAdd);
          }}
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default Addtask;
