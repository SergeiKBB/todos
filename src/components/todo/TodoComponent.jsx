import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './todo.scss';

class TodoComponent extends PureComponent {
  static propTypes = {
      todoData: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  };

  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
  }

  handleDone = () => {
    this.setState({
      isDone: !this.state.isDone
    })
  };

  render() {
    const { todoData: { title, id }, handleRemoveTodo } = this.props;
    const { isDone } = this.state;
    const viewTodo = isDone ? styles.done : '';
    return (
      <div className={`card p-3 mb-1 ${styles.todo} ${viewTodo}`} onClick={this.handleDone}>
        <p className={styles.title}>{title}</p>
        <button type="button" className="close" aria-label="Close" onClick={handleRemoveTodo.bind(null, id)}>
          <i className="fas fa-times"/>
        </button>
      </div>
    )
  }
}

export default TodoComponent;
