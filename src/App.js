import "./App.css";
import Tasks from "./components/tasks";
import Header from "./components/header";
import Addtask from "./components/addTask";
import React from "react";
//import EditTask from "./components/editForm";
//let arr = JSON.parse(localStorage.getItem("todo"));
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,

      tasks: JSON.parse(localStorage.getItem("todo")) || [],
      compliteTAskList: JSON.parse(localStorage.getItem("todoComplite")) || [],
    };

    this.renderTasksList = this.renderTasksList.bind(this);
    this.newTask = this.newTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.compliteTask = this.compliteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
  }

  render() {
    return (
      <div className="app">
        <Header whichTasks={this.renderTasksList} />
        <main>
          <Tasks
            tasks={
              this.state.start ? this.state.tasks : this.state.compliteTAskList
            }
            onDel={this.deleteTask}
            onComplite={this.compliteTask}
            onEdit={this.editTask}
          />

          <aside>
            <Addtask onAdd={this.newTask} />
          </aside>
        </main>
      </div>
    );
  }
  editTask(task) {
    let newArr = this.state.tasks;
    newArr[Math.floor(task.id)] = task;

    this.setState({ tasks: [] }, () => {
      this.setState({ tasks: [...newArr] });
    });
    setTimeout(() => this.saveLocalStorage(), 100);
  }
  renderTasksList(id) {
    id === "active"
      ? this.setState({ start: true })
      : this.setState({ start: false });
  }

  compliteTask(task) {
    this.setState({
      compliteTAskList: [
        ...this.state.compliteTAskList,
        { className: "complete", isCompl: "hide", ...task },
      ],
    });
    task.className = "complete";
    setTimeout(() => this.deleteTask(task.id), 2000);
    setTimeout(() => this.saveLocalStorage(), 100);
  }

  deleteTask(id) {
    if (this.state.start) {
      this.setState({ tasks: this.state.tasks.filter((el) => el.id !== id) });
    } else {
      this.setState({
        compliteTAskList: this.state.compliteTAskList.filter(
          (el) => el.id !== id
        ),
      });
    }
    setTimeout(() => this.saveLocalStorage(), 100);
  }
  newTask(task) {
    let id = this.state.tasks.length + 0.01 * Math.random();
    this.setState({ tasks: [...this.state.tasks, { id, ...task }] });
    setTimeout(() => this.saveLocalStorage(), 100);
  }
  saveLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.state.tasks));
    localStorage.setItem(
      "todoComplite",
      JSON.stringify(this.state.compliteTAskList)
    );
  }
}

export default App;
