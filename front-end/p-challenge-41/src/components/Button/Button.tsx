import React from "react";

import cn from "clsx";
import styles from "./Button.module.css";

interface ButtonProps {
  color?: "red" | "blue" | "green";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  color = "blue",
  size = "medium",
  children,
  disabled,
  onClick,
}: ButtonProps) => {
  const className = cn(styles.button, {
    [styles.small]: size === "small",
    [styles.medium]: size === "medium",
    [styles.large]: size === "large",

    [styles.red]: color === "red",
    [styles.blue]: color === "blue",
    [styles.green]: color === "green",
  });

  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {children}
    </button>
  );
};
