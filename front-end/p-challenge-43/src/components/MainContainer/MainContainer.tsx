import React from "react";
import type { PropsWithChildren } from "react";

import styles from "./MainContainer.module.css";

export const MainContainer = ({ children }: PropsWithChildren) => {
  return <main className={styles.main}>{children}</main>;
};
