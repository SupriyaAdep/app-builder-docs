import React from "react";
import Button from "./IconButton";

const buttonList: IIconButton[] = [
  {
    text: "Github",
    icon: "github",
    href: "https://github.com/AgoraIO-Community/app-builder-docs",
    external: true,
  },
  {
    text: "Support",
    icon: "discord",
    href: "https://discord.com/",
    external: true,
  },
  {
    text: "Console",
    icon: "sdk",
    href: "/",
    external: false,
  },
  {
    text: "Get Started",
    icon: "sdk",
    href: "/blog",
    external: false,
  },
];

export default function IconButtonContainer(): JSX.Element {
  return (
    <div className="container">
      <div className="row">
        {buttonList.map((props, idx) => (
          <div className="col col--3 margin-bottom--lg" key={idx}>
            <Button {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}
