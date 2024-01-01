import React from "react";

import styles from "./TaskInput.module.css";

export const TaskInput = () => {
  return (
    <div className={styles.formGroup}>
      <label className="task-label">Task</label>
      <div className="input-container">
        <input
          id="task"
          type="text"
          placeholder="What do you need to do?"
          className={styles.taskInput}
        />
      </div>
    </div>
  );
};
