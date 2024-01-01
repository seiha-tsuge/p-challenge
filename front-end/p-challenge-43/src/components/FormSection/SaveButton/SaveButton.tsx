import React from "react";

import styles from "./SaveButton.module.css";

export const SaveButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={`${styles.button} ${styles.btnDanger}`}>
        Save Item
      </button>
    </div>
  );
};
