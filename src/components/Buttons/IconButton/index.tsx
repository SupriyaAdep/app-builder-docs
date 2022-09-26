import React from "react";
import Button from "./IconButton";

const buttonList: IIconButton[] = [
  {
    text: "Github",
    icon: "github",
    href: "https://github.com/AgoraIO-Community",
    external: true,
  },
  {
    text: "Support",
    icon: "discord",
    href: "https://agoraiodev.slack.com/signup#/domain-signup",
    external: true,
  },
  {
    text: "Console",
    icon: "sdk",
    href: "https://console.agora.io/",
    external: true,
  },
  {
    text: "Get Started",
    icon: "sdk",
    href: "https://appbuilder.agora.io/",
    external: true,
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
