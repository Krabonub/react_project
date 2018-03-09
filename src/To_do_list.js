import React, {Component} from 'react';
import './To_do_list.css';

class To_do_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tasks: [
        {id: 0, isChecked: false, text: "first"},
        {id: 1, isChecked: false, text: "second"},
        {id: 2, isChecked: false, text: "third"}
      ]
    }
  }
  deleteTask = (index) => {
    this.setState((prevState, props) => {
      var newStateTasks = [];
      for (var i = 0; i < prevState.tasks.length; i++) {
        newStateTasks[i] = Object.assign(prevState.tasks[i]);
      }
      newStateTasks.splice(index, 1);
      return {
        tasks: newStateTasks
      };
    });
  }
  addTask = (task_text) => {
    if (this.state.tasks.length > 10) {
      alert('Maximum list length achieved!');
      return;
    }
    this.setState((prevState, props) => {
      var newStateTasks = [];
      for (var i = 0; i < prevState.tasks.length; i++) {
        newStateTasks[i] = Object.assign(prevState.tasks[i]);
      }
      newStateTasks.push({id: prevState.tasks.length, isChecked: false, text: task_text});
      return {
        inputValue: '',
        tasks: newStateTasks
      }
    });
  }
  checkAsCompleted = (index) => {
    this.setState((prevState, props) => {
      var newStateTasks = [];
      for (var i = 0; i < prevState.tasks.length; i++) {
        newStateTasks[i] = Object.assign(prevState.tasks[i]);
      }
      newStateTasks[index].isChecked = !newStateTasks[index].isChecked;
      return {
        tasks: newStateTasks
      };
    });
  }
  inputOnChange = (event) => {
    this.setState({inputValue: event.target.value});
  }
  clearChecked = () => {
    this.setState((prevState, props) => {
      return {
        tasks: prevState.tasks.filter((item) => {
          return item.isChecked ? false : true;
        })
      }
    })
  }
  checkAll = () => {
    this.setState((prevState, props) => {
      var newStateTasks = [];
      for (var i = 0; i < prevState.tasks.length; i++) {
        newStateTasks[i] = Object.assign(prevState.tasks[i]);
      }
      newStateTasks.map((item) => {
        item.isChecked = true;
        return item;
      })
      return {
        tasks: newStateTasks
      }
    })
  }
  render() {
    return (
      <div className="container">
        <div className="to-do-list">
          <h2>To do List</h2>
          <hr/>
          <div className="input_box">
            <input type="text" maxLength="22" onChange={this.inputOnChange} value={this.state.inputValue}/>
            <button onClick={this.addTask.bind(To_do_list, this.state.inputValue)}>Add task</button>
          </div>
          <div id="notes">
            <ul className="tasks_list">
              {
                this.state.tasks.map(
                  (task, index) => <li key={task.id}>
                    <div>
                      <input type="checkbox" checked={task.isChecked}
                             onChange={this.checkAsCompleted.bind(To_do_list, index)}/>
                      <label>{task.text}</label>
                    </div>
                    <button className="red_button" onClick={this.deleteTask.bind(To_do_list, index)}>X</button>
                  </li>)
              }
            </ul>
          </div>
          <div className="footer">
            <button onClick={this.checkAll}>Check All</button>
            <span>Tasks : {this.state.tasks.length}</span>
            <button onClick={this.clearChecked}>Clear done</button>
          </div>
        </div>
      </div>
    );
  }
}

export default To_do_list;