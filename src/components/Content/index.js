import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentForm from "./ContentForm";

export default class Content extends Component {
  static propTypes = {
    inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func
  };

  render() {
    const { inputValue, onChange, onSubmit } = this.props;
    return (
      <div>
        I'm Content
        <ContentForm
          onChange={e => onChange(e.target.value)}
          onSubmit={onSubmit}
          inputValue={inputValue}
        />
      </div>
    );
  }
}
