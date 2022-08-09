import React from "react";
import styles from "./subtitle.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

export default function SubTitle({ children }) {
  if (!children) return null;
  let content = React.Children.toArray(children.props.children);
  const urlRegx =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm;
  //console.group("subtitle");
  // console.log("children =>", children);

  //console.log("length =>", content.length);

  if (content.length == 1) {
    content = content[0].split(":");
  }
  //console.log("content=>", content);

  const heading = content.shift().split(":")[0];
  //console.log("heading =>", heading);

  const data = content.map(
    (element: string | React.ReactElement, index: number) => {
      let link = "";
      let text = "";
      let target = "";
      let isSeparator = false;
      const isLast = content.length - 1 === index;

      //console.log("type of element", typeof element);

      if (typeof element === "string") {
        //console.log("type of element :" + element.indexOf("=>"));
        if (
          element.indexOf("=>") !== -1 ||
          element === ">" ||
          element === "<" ||
          element.indexOf("string") !== -1
        ) {
          link = "";
        } else {
          link = `#${element.trim().toLowerCase()}`;
          isSeparator = true;
        }
        text = element;
      } else if (element.props.mdxType === "a") {
        // external link
        link = element?.props?.href || "";
        text = element?.props?.children || "";
        target = urlRegx.test(link) ? "_blank" : "";
      } else console.groupEnd();

      return (
        <React.Fragment key={index}>
          {link ? (
            <a className={styles.link} href={link} target={target}>
              {text}
            </a>
          ) : (
            <span className={clsx(styles.linkText)}> {text}</span>
          )}
          {isSeparator && !isLast && (
            <span className={styles.separator}>|</span>
          )}
        </React.Fragment>
      );
    }
  );
  //console.log("data =>", data);
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
