import React from "react";

import styles from "./TodoList.module.css";

interface TodoListProps {
  data: {
    id: string;
    task: string;
    complete: boolean;
  }[];
  removeData: (nodeId: string) => void;
  toggleComplete: (nodeId: string) => void;
}

export const TodoList = ({
  data,
  removeData,
  toggleComplete,
}: TodoListProps) => {
  return (
    <ul className={styles.todoList}>
      {data.map(({ id, task, complete }, index) => (
        <li
          key={index}
          className={`${styles.todoItem} ${
            complete ? styles.todoItemSuccess : ""
          }`}
        >
          <span>{task}</span>
          <div className={styles.todoButtons}>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                toggleComplete(id);
              }}
              className={`${styles.button} ${styles.buttonXS} ${styles.btnSuccess}`}
            >
              ✓
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                removeData(id);
              }}
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
