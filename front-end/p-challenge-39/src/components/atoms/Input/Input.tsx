import React from 'react';

import styles from './Input.module.css';

interface InputProps {
  rightIcon?: React.ReactNode;
}

export const Input = ({ rightIcon }: InputProps) => {
  return (
    <div className={styles.input_wrapper}>
      <input id='search' placeholder='Search for products...' value='' className={styles.input} />
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};
