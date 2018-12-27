import React from 'react';
import styles from './header.scss';

const HeaderComponent = props => {
  const { children } = props;
  return (
    <header className={styles.header}>
      {children}
    </header>
  )
};

export default HeaderComponent;
