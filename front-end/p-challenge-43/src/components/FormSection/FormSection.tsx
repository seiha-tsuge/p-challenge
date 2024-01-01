import React from "react";

import { TaskInput } from "./TaskInput";
import { SaveButton } from "./SaveButton";

import styles from "./FormSection.module.css";

export const FormSection = () => {
  return (
    <div className={styles.formSection}>
      <hr className={styles.hr} />
      <form>
        <div className="form-container">
          <TaskInput />
          <div className={styles.buttonContainer}>
            <SaveButton />
          </div>
        </div>
      </form>
    </div>
  );
};
