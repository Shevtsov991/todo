import React from "react";

class EditTask extends React.Component {
  render() {
    return (
      <form ref={(el) => (this.myForm = el)} className="addForm">
        <input
          className="addForm__input"
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
            // this.taskAdd = {
            //   taskName: this.state.taskName,
            //   taskDescription: this.state.taskDescription,
            // };
            console.log(this.props.onEdit);
            // if (this.props.task) this.taskAdd.id = this.props.task.id;
            // this.props.onAdd(this.taskAdd);
          }}
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default EditTask;
