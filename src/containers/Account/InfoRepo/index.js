import React from "react";
import Account from "../../Account";

export default class InfoRepo extends React.Component {
  render() {
      const {
        language,
        stargazers_count,
        watchers_count,
        updated_at
      } = this.props;
    return (
      <div>
        {/* {JSON.stringify(this.state.currentRepoInfo)} */}
       1 language: {language}
        <br />
      2  stargazers_count: {stargazers_count}
        <br />
      3 watchers_count: {watchers_count}
        <br />
      4  updated_at: {updated_at}
        <br />
      </div>
    );
  }
}
