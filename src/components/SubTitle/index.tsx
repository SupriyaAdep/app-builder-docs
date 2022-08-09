import React from "react";
import styles from "./subtitle.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

export default function SubTitle({ children }) {
  if (!children) return null;
  let content = React.Children.toArray(children.props.children);

  //console.log(content.length);
  if (content.length == 1) {
    content = content[0].split(":");
  }

  const heading = content.shift().split(":")[0];

  const data = content.map(
    (element: string | React.ReactElement, index: number) => {
      let link = "";
      let text = "";
      let target = "";
      const isLast = content.length - 1 === index;

      if (typeof element === "string") {
        //console.log("type of element :" + element.indexOf("=>"));
        if (element.indexOf("=>") !== -1) {
          link = "";
        } else {
          link = `#${element.trim().toLowerCase()}`;
        }
        text = element;
      } else {
        link = element?.props?.href || "";
        text = element?.props?.children || "";
        target = "_blank";
      }

      return (
        <React.Fragment key={index}>
          {link ? (
            <a className={styles.link} href={link} target={target}>
              {text}
            </a>
          ) : (
            <span className={clsx(styles.link, styles.linkText)}> {text}</span>
          )}
          {!isLast && <span className={styles.separator}>|</span>}
        </React.Fragment>
      );
    }
  );

  return (
    <div className={styles.container}>
      <h2
        id={heading.toLowerCase().split(".").join("").trim()}
        className={clsx(styles.heading, "anchor")}
      >
        {heading} {data.length > 0 && ":"}
      </h2>
      {data}
      <a
        className="hash-link"
        href={"#" + heading.toLowerCase().split(".").join("").trim()}
        title="Direct link to heading"
      ></a>
    </div>
  );
}
