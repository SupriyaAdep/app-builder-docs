import React from "react";
import clsx from "clsx";
import Card from "./Card";
import styles from "./styles.module.css";

const cardList: ICardItem[] = [
  {
    title: "Product manual",
    icon: "config",
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [{ text: "Guide", href: "/sdk/guides" }],
  },
  {
    title: "Turn Key",
    icon: "config",
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [{ text: "Guide", href: "/turn-key/quickstart" }],
  },
  {
    title: "Embed SDKs",
    icon: "config",
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [
      { text: "Guide", href: "/sdks/guides/getting-started" },
      { text: "API Reference", href: "/api-ref" },
    ],
  },
  {
    title: "Customization API",
    icon: "code",
    description: <>Designed for efficiency and ease of use by our developers</>,
    ctas: [
      { text: "Guide", href: "/first-party-extension/guides/getting-started" },
      {
        text: "API Reference",
        href: "/first-party-extension/api-reference/components-api",
      },
    ],
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
