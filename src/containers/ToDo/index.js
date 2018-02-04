import React, { Component } from 'react';

import logo from '../../logo.svg';
import './index.css';

import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import Content from '../../components/Content/';
import TodoList from '../../components/TodoList/';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todoList: [],
      type: 'all',
    };
  }

  onChange = inputValue => this.setState({ inputValue })

  onSubmit = (e) => {
    e.preventDefault();
    const { inputValue, todoList } = this.state;

    if (inputValue) {
      this.setState({
        todoList: [
          {
            title: inputValue,
            id: Date.now(),
            checked: false,
          },
          ...todoList,
        ],
        inputValue: '',
      });
    }
  }

  onTodoDelete = (todoId) => this.setState({
    todoList: this.state.todoList.filter(item => item.id !== todoId)
  })

  onTodoCheck = (todoId) => this.setState({
    todoList: this.state.todoList.map(item => {
      if (todoId === item.id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    })
  })

  showTodos = type => this.setState({ type })

  render() {
    const { todoList, inputValue, type } = this.state;
    const filteredTodos = type === 'all' ? todoList : todoList.filter(item => item.checked !== false);
    return (
      <div className="App">
   
        <Content
          inputValue={inputValue}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <div>
          <button onClick={() => this.showTodos('all')}>
            Show All
          </button>
          <button onClick={() => this.showTodos('checked')}>
            Show Checked
          </button>
        </div>
        <TodoList
          todoList={filteredTodos}
          onTodoDelete={this.onTodoDelete}
          onTodoCheck={this.onTodoCheck}
        />
      
      </div>
    );
  }
}

export default ToDo;
