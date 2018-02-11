import React from "react";
import PropTypes from "prop-types";

const ContentForm = ({ onChange, onSubmit, inputValue }) => (
  <form onSubmit={onSubmit}>
    <input value={inputValue} onChange={onChange} />
    <button type="submit">Submit</button>
  </form>
);

ContentForm.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  inputValue: PropTypes.string
};

export default ContentForm;
