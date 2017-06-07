import React, { Component } from 'react';
import '../assets/styles/day-card.css';

class DayCard extends Component {

  constructor() {
    super();
    this.state = {
      oldDay: false,
      tasks: []
    };
  }

  componentDidMount() {
    const today = new Date().getDate();
    const thisDay = this.props.dayNumber;

    if (thisDay < today) {
      this.setState({
        oldDay: true
      });
    }
  }

  addTask() {
    const taskList = this.state.tasks;

    const id = taskList.length + 1;
    const newTask = this.refs.newTask;

    if (newTask.value !== '') {
      taskList.push({
        id: id,
        content: newTask.value,
        done: false
      });
    }

    this.setState({
      tasks: taskList
    });

    newTask.value = '';
  }

  removeTask(index) {
    const taskList = this.state.tasks;

    const newList = taskList.filter((task) => {
      return task.id !== index;
    });

    this.setState({
      tasks: newList
    });
  }

  toggleDone(index) {
    const taskList = this.state.tasks;

    const newList = taskList.map((task) => {

      const isChecked = (task.id === index || task.done === true);
      const toggle = (task.id === index && task.done === true);

      let doneState;

      if (toggle) {
        doneState = false;
      } else if (isChecked) {
        doneState = true;
      } else {
        doneState = false;
      }

      return ({
        id: task.id,
        content: task.content,
        done: doneState
      });

    });

    this.setState({
      tasks: newList
    });
  }

  openDialog() {
    this.refs.dialog.showModal();
  }

  closeDialog() {
    this.refs.dialog.close();
  }

  render() {

    const dayTasks = this.state.tasks.map((task) => {
      return (
        <li key={task.id}>
          {task.content}
          <button onClick={() => this.removeTask(task.id)}>Remove</button>
          <button onClick={() => this.toggleDone(task.id)}>Done</button>
        </li>
      );
    });

    return (
      <article className="day-card">

        <h2 className="day-title">{this.props.dayNumber}</h2>

        <button onClick={this.openDialog.bind(this)}>New Task</button>

        <dialog className="day-insert-task" ref="dialog">
          <input ref="newTask" placeholder="Task name"/>
          <button onClick={this.addTask.bind(this)}>Add</button>
          <button onClick={this.closeDialog.bind(this)}>close</button>
        </dialog>

        <ul>
          {dayTasks}
        </ul>

      </article>
    );
  }
}


export default DayCard;
