import React from "react";

import { TaskInput } from "./TaskInput";
import { SaveButton } from "./SaveButton";

import styles from "./FormSection.module.css";

export const FormSection = () => {
  return (
    <div className={styles.formSection}>
      <hr className={styles.hr} />
      <form>
        <div className={styles.formGroup}>
          <TaskInput />
        </div>
        <div className={styles.buttonContainer}>
          <SaveButton />
        </div>
      </form>
    </div>
  );
};
