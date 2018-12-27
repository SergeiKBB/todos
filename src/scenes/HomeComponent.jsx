import React from 'react';
import styles from './home.scss';
import HeaderComponent from "../components/header/HeaderComponent";
import TodoComponent from "../components/todo/TodoComponent";

const HomeComponent = props => {
  const todo = {
    title: 'Do homework',
    description: 'Do 10 exercise from 125 page'
  };
  return (
    <div className={styles.home}>
      <HeaderComponent>
        <h1>My todo list</h1>
      </HeaderComponent>
      <TodoComponent todoData={todo} />
    </div>
  )
};

export default HomeComponent;
