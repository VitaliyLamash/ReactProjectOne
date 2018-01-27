import React from "react";

export class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      list: [],
      filterChecked: false
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault(); //при отправки формы отмена перезагрузки страницы
    if (!this.state.value) return;

    const newItem = {
      text: this.state.value,
      id: Date.now(),
      checked: false,
      hidden: false
    };
    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      value: ""
    }));
  };

  deleteItem = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(todo => todo.id !== id)
    }));
  };

  handleChecked = id => {
    this.setState(prevState => ({
      list: prevState.list.map(todo => {
        if (todo.id === id) {
          todo.checked = !todo.check;
        }
        return todo;
      })
    }));
  };

  filterItems = filterName => {
    this.setState(prevState => ({
      list: prevState.list.map(todo => {
        switch (filterName) {
          case "completed":
            if (todo.checked === false) {
              todo.hidden = true;
            }
            break;
          case "all":
          default:
            todo.hidden = false;
        }
        return todo;
      })
    }));
  };
  render() {
    return (
      <div className="content">
        <button type="button" onClick={() => this.filterItems("all")}>
          ShowAll
        </button>
        <button type="button" onClick={() => this.filterItems("completed")}>
          Completed
        </button>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>

          <input type="submit" value="Save" />
        </form>

        <ul>
          {this.state.list.length > 0 ? (
            this.state.list.map((todo, index) => (
              <li key={todo.id} hidden={todo.hidden}>
                <input
                  type="checkbox"
                  onChange={() => this.handleChecked(todo.id)}
                />
                {/* {" № " + (index + 1) + " " + todo.text + " "} */}
                {` № ${index + 1} ${todo.text} `}
                <button type="button" onClick={() => this.deleteItem(todo.id)}>
                  Delete
                </button>
              </li>
            ))
          ) : (
            <em>NO</em>
          )}
        </ul>
      </div>
    );
  }
}
