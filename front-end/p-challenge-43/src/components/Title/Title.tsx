import React from "react";
import type { PropsWithChildren } from "react";

import styles from "./Title.module.css";

export const Title = ({ children }: PropsWithChildren) => {
  return <h1 className={styles.title}>{children}</h1>;
};
