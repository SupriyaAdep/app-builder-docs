import React from "react";
import styles from "./heading.module.css";
import clsx from "clsx";

export function H2({ children }) {
  if (!children) return null;
  if (typeof children === "string") {
    const id = children.split(":")[0].toLowerCase().trim();
    return (
      <h2 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
      </h2>
    );
  }
  console.log(children);
  if (children.length >= 2) {
    const id = children[0].split(":")[0].toLowerCase().trim();
    return (
      <h2 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
      </h2>
    );
  }
  return <h3>{children}</h3>;
}

export function H3({ children }) {
  if (!children) return null;
  if (typeof children === "string") {
    const id = children.split(":")[0].toLowerCase().trim();
    return (
      <h3 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
      </h3>
    );
  }
  console.log(children);
  if (children.length > 2) {
    console.log(children);
    const id = children[0].split(":")[0].toLowerCase().trim();
    return (
      <h3 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
      </h3>
    );
  }
  return <h3>{children}</h3>;
}

export function H4({ children }) {
  if (!children) return null;
  if (typeof children === "string") {
    const id = children.split(":")[0].toLowerCase().trim();
    return (
      <h4 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
      </h4>
    );
  }
  if (children.length >= 2) {
    const id = children[0].split(":")[0].toLowerCase().trim();
    return (
      <h4 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
      </h4>
    );
  }
  return <h4>{children}</h4>;
}
