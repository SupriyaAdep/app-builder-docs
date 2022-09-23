import React from "react";
import { default as Img } from "@theme/IdealImage";
import styles from "./image.module.css";
import { useColorMode } from "@docusaurus/theme-common";


export default function Image({ alt, lightImageSrc = '', darkImageSrc, className = '', caption = '' }) {
  const { colorMode } = useColorMode();
  const img1 = `/img/docAssets/${darkImageSrc}`;
  const img2 = `/img/docAssets/${lightImageSrc ? lightImageSrc : darkImageSrc}`;

  return (
    <div className={`mdImage ${className}`} style={{ paddingBottom: !caption ? '28px' : 0 }}>
      <img loading="lazy"
        src={colorMode === 'dark' ? img1 : img2
        }
        alt={alt} />
      {caption && <figcaption className="caption">{caption}</figcaption>}
    </div>

  )
}

