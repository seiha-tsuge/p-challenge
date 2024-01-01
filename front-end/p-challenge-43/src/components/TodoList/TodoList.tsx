import React from "react";

import styles from "./TodoList.module.css";

interface TodoListProps {
  items: {
    text: string;
  }[];
}

export const TodoList = ({ items }: TodoListProps) => {
  return (
    <ul className={styles.todoList}>
      {items.map(({ text }, index) => (
        <li key={index} className={styles.todoItem}>
          <span>{text}</span>
          <div className={styles.todoButtons}>
            <button
              className={`${styles.button} ${styles.buttonXS} ${styles.btnSuccess}`}
            >
              ✓
            </button>
            <button
              className={`${styles.button} ${styles.buttonXS} ${styles.btnDanger}`}
            >
              Ｘ
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
