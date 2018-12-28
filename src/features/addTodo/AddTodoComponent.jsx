import React, { PureComponent } from 'react';

class AddTodoComponent extends PureComponent {
  render() {
    const { handleSubmit, handleTodoChange } = this.props;
    return (
      <form className='card p-2 mb-4' onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Todo...'
            onChange={handleTodoChange}
          />
          <div className='input-group-append'>
            <button
              type='submit'
              className='btn btn-secondary'
            >Add</button>
          </div>
        </div>
      </form>
    )
  }
}

export default AddTodoComponent;
