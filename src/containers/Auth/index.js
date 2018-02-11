import React from "react";

import "./index.css";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      repoList: [],
      currentRepoInfo: {}
    };

    this.handleChange = this.handleChange.bind(this);
    //  this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   if (!this.state.value) return;

  //   const newItem = {
  //     text: this.state.value
  //   };

  //   this.setState(prevState => ({
  //     listLogIn: [...prevState.listLogIn, newItem],
  //     value: ""
  //   }));
  // }

  //urlForUsername = username => `http://api.github.com.user/${username}`

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  urlForUsername = username =>
    `https://api.github.com/users/${this.state.value}/repos`;

  handlePush = event => {
    const myInit = {
      method: "GET"
    };

    fetch(this.urlForUsername(), myInit)
      .then(response => response.json())
      .then(parsedJSON => {
        console.log(parsedJSON);
        this.setState({ repoList: parsedJSON });
      })
      .catch(error => console.log("parsing failed", error));

    event.preventDefault();
  };

  getRepoInfo = (owner, repo) => {
    fetch(`https://api.github.com/repos/${owner}/${repo}`, { method: "GET" })
      .then(response => response.json())
      .then(parsedJSON => {
        console.log(parsedJSON);
        this.setState({ currentRepoInfo: parsedJSON });
      })
      .catch(error => console.log("parsing failed", error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlePush}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">BUTT</button>
          {/* <input type="submit" value="Submit" /> */}
          {/* {this.state.listLogIn.map((item, idx) => item.text)} */}
        </form>
        <div>
          {/* {JSON.stringify(this.state.currentRepoInfo)} */}
          <InfoRepo
            language={this.state.currentRepoInfo.language}
            stargazers_count={this.state.currentRepoInfo.stargazers_count}
            watchers_count={this.state.currentRepoInfo.watchers_count}
            updated_at={this.state.currentRepoInfo.updated_at}
          />
        </div>
        {this.state.repoList.map(repo => (
          <div key={repo.id}>
            <h4> {repo.name} </h4>
            <div>{repo.id}</div>
            {/* <div>{repo.url}</div> */}
            <br />
            <br />
            <button onClick={() => this.getRepoInfo(repo.owner.login, repo.name)}>
              GET INFO
            </button>
          </div>
        ))}
      </div>
    );
  }
}
