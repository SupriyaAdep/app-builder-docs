import React from "react";
import clsx from "clsx";
import Card from "./Card";
import styles from "./styles.module.css";

const cardList: ICardItem[] = [
  {
    title: "Turn Key",
    icon: "turnkey",
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [{ text: "Guide", href: "/turn-key/quickstart" }],
    released: true,
  },
  {
    title: "Embed SDKs",
    icon: "sdk",
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [{ text: "Guide", href: "/sdks/guides/embed_web_sdk_react" }],
    released: true,
  },
  {
    title: "Product manual",
    icon: "manual",
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [{ text: "Guide", href: "" }],
    released: false,
  },
  {
    title: "Customization API",
    icon: "settings",
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [
      { text: "Guide", href: "/customization-api/quickstart" },
      {
        text: "API Reference",
        href: "/customization-api/api-reference/components-api",
      },
    ],
    released: true,
  },
];

export default function CardContainer(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {cardList.map((props, idx) => (
            <div className="col col--6 margin-bottom--lg" key={idx}>
              <Card {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
