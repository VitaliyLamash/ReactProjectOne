import React from 'react';

export default class TodoList extends React.Component {
  render() {
    const {
      todoList,
      onTodoDelete,
      onTodoCheck,
    } = this.props;

    return (
      <div>
        {
          todoList.map((item, idx) => (
            <div key={item.id} style={{ background: item.checked ? 'red' : '' }}>
              {item.title}
              <button onClick={() => onTodoDelete(item.id)}>
                DELETE
              </button>
              <button onClick={() => onTodoCheck(item.id)}>
                CHECK
              </button>
              <div> </div>
            </div>
          
          ))
        }
      </div>
    );
  }
}