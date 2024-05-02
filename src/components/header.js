import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Твой список Задач</p>
        <div className="header__dropdown">
          <button className="dropDown__button">Список задач</button>
          <ul className="dropdown__List">
            <li
              className="dropdown__item"
              id="active"
              onClick={(el) => {
                this.props.whichTasks(el.target.id);
              }}
            >
              Активные задачи
            </li>
            <li
              className="dropdown__item"
              id="complite"
              onClick={(el) => {
                this.props.whichTasks(el.target.id);
              }}
            >
              Завершённые задачи
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
