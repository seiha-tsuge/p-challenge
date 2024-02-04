import React from "react";
import type { FormEvent } from "react";

import { TaskInput } from "./TaskInput";
import { SaveButton } from "./SaveButton";

import styles from "./FormSection.module.css";

interface FormSectionProps {
  addData: (newTask: string) => void;
}

export const FormSection = ({ addData }: FormSectionProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = e.currentTarget.task.value;
    addData(newTask);
    e.currentTarget.reset();
  };

  return (
    <div className={styles.formSection}>
      <hr className={styles.hr} />
      <form onSubmit={handleSubmit}>
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
