import React from "react";

import styles from "./SaveButton.module.css";

export const SaveButton = () => {
  return (
    <button className={`${styles.button} ${styles.btnPrimary}`}>
      Save Item
    </button>
  );
};
