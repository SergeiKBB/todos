import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoComponent extends PureComponent {
  static propTypes = {
      todoData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
  };

  render() {
    const { title, description } = this.props.todoData;
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
}

export default TodoComponent;
