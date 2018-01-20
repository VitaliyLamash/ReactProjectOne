import React from 'react';
import ReactDOM from 'react-dom';



export class Content extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: '',
        list: []
      };
      this.handleSubmit = this.handleSubmit.bind(this); 
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit (event) {
      event.preventDefault(); //при отправки формы отмена перезагрузки страницы
      if(!this.state.value) return;
      this.setState({list:[...this.state.list, this.state.value]});
      this.setState({value: ''});
    }

    deleteItem = (index) =>{
      let copy = [...this.state.list];
      copy.splice(index, 1);
      this.setState({list: copy});
    }
    
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Save" />
        </form>
        <ul>
        {
          this.state.list.map((item, i) =>
          <li key={i.toString()}> {item} <button onClick={ () => this.deleteItem(i)}>Delete</button> </li> )
        }
      </ul>
      </div>
      );
    }
  }

