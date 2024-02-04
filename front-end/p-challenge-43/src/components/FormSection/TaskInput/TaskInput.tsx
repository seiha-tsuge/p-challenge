import React from "react";

import styles from "./TaskInput.module.css";

export const TaskInput = () => {
  return (
    <>
      <label className={styles.taskLabel}>Task</label>
      <input
        id="task"
        type="text"
        placeholder="What do you need to do?"
        className={styles.taskInput}
      />
    </>
  );
};
