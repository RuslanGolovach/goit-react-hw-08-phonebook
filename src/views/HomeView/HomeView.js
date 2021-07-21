import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.Container}>
    <h1 className={styles.Title}>
      Welcome to the PHONEBOOK{' '}
      <span role="img" aria-label="Иконка приветствия">
        ☎
      </span>
    </h1>
  </div>
);

export default HomeView;
