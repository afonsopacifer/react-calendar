import React, { Component } from 'react';

import '../../assets/styles/molecules/Todo.css';

import CheckMark from '../../assets/icons/check-mark.svg';
import DeleteIcon from '../../assets/icons/x-mark.svg';

// Components
import Button from '../atoms/Button';
import CheckBox from '../atoms/CheckBox';

class Todo extends Component {

  constructor() {
    super();
    this.state = {
      tasks: [],
isActive: false
    }
  }

	// Validation
	// --------------------------------
	validActive() {
    this.refs.newTask.value
    ? this.setState({isActive: true})
    : this.setState({isActive: false})
	}

	// CREATE
	// --------------------------------
  addTask() {
    const taskList = this.state.tasks;
    const newTask = this.refs.newTask;

    if (newTask.value) {

			taskList.push({
        content: newTask.value,
        done: false
      });

			this.setState({
				tasks: taskList,
				isActive: false
			})

    }

    newTask.value = "";
  }

	// DELETE
	// --------------------------------
  removeTask(index) {
    const taskList = this.state.tasks;

    const newList = taskList.filter((task, i) => {
      return i !== index
    });

    this.setState({
      tasks: newList
    })
  }

	// UPDATE
	// --------------------------------

	// Mark With Done
	// --------------------------------
  toggleDone(index) {
    const taskList = this.state.tasks;

    const newList = taskList.map((task, i) => {

      const isChecked = (i === index || task.done === true)
      const toggle = (i === index && task.done === true)

      let state;

      if (toggle) {
        state = false
      } else if (isChecked) {
        state = true
      } else {
        state = false
      }

      return ({
        id: task.id,
        content: task.content,
        done: state
      })

    });

    this.setState({
      tasks: newList
    })
  }

	render() {

		// Custom Style
		// --------------------------------
		const customStyle = {
			add: {
				backgroundColor: '#98f442'
			},
			edit: {
				backgroundColor: '#fcbc3c'
			},
			remove: {
				backgroundColor: '#fc3c4f'
			},
			check: {
				backgroundColor: '#ffc43d',
        marginRight: '10px'
			}
		}

		// RETRIEVAL
		// --------------------------------
    const dayTasks = this.state.tasks.map((task, i) => {
      return (
        <li key = {i} className = "day-todo__task-list__item">

          <CheckBox
            id = {i}
            label = {task.content}
            action = {() => this.toggleDone(i)}
            isChecked = {task.done}>
          </CheckBox>

          {/*{task.content}*/}

          <div className = "day-todo__task-list__item__buttons">
            <Button
              onClick = {() => this.removeTask(i)}
              customStyle = {customStyle.remove}
              rightIcon = {DeleteIcon}>
              Remove
            </Button>
          </div>

        </li>
      );
    });

		// Final Render
		// --------------------------------
		return (
			<div>

        <input
          ref = "newTask"
          placeholder = "New task"
          className="day-todo__input"
          onChange = {() => this.validActive()}/>

				<Button
          onClick = {() => this.addTask()}
          isActive = {this.state.isActive}
          customStyle = {customStyle.add}>
          Add
        </Button>

				<ul className = "day-todo__task-list">
					{dayTasks.reverse()}
				</ul>

			</div>
		)

	}
}

export default Todo;
