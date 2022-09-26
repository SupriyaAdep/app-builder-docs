import React from "react";
import styles from "./heading.module.css";
import clsx from "clsx";

export function H2({ children }) {
  if (!children) return null;
  if (typeof children === "string") {
    const id = children.split(":")[0].toLowerCase().trim().split(" ").join("-");
    return (
      <h2 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
        <a
          className="hash-link"
          href={`#${id}`}
          title="Direct link to heading"
        ></a>
      </h2>
    );
  }

  if (children.length >= 2) {
    if (React.isValidElement(children[0])) return <h2>{children}</h2>;
    const id = children[0].split(":")[0].toLowerCase().trim();
    return (
      <h2 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
        <a
          className="hash-link"
          href={`#${id}`}
          title="Direct link to heading"
        ></a>
      </h2>
    );
  }
  return <h2>{children}</h2>;
}

export function H3({ children }) {
  if (!children) return null;
  if (typeof children === "string") {
    const id = children.split(":")[0].toLowerCase().trim();
    return (
      <h3 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
        <a
          className="hash-link"
          href={`#${id}`}
          title="Direct link to heading"
        ></a>
      </h3>
    );
  }
  if (children.length == 2) {
    console.log(children);
  }
  if (children.length >= 2) {
    if (React.isValidElement(children[0])) return <h3>{children}</h3>;
    const id = children[0].split(":")[0].toLowerCase().trim() || "";
    return (
      <h3 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
        <a
          className="hash-link"
          href={`#${id}`}
          title="Direct link to heading"
        ></a>
      </h3>
    );
  }
  return <h3 id="cat">{children}</h3>;
}

export function H4({ children }) {
  if (!children) return null;
  if (typeof children === "string") {
    const id = children.split(":")[0].toLowerCase().trim();
    return (
      <h4 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
        <a
          className="hash-link"
          href={`#${id}`}
          title="Direct link to heading"
        ></a>
      </h4>
    );
  }
  if (children.length >= 2) {
    const id = children[0].split(":")[0].toLowerCase().trim();
    return (
      <h4 className={clsx(styles.heading, "anchor")} id={id}>
        {children}
        <a
          className="hash-link"
          href={`#${id}`}
          title="Direct link to heading"
        ></a>
      </h4>
    );
  }
  return <h4>{children}</h4>;
}
