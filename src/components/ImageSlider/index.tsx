import React from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./image-slider.module.css";
function ImageSlider({
  alt,
  lightImageSrc1,
  darkImageSrc1,
  lightImageSrc2,
  darkImageSrc2,
}) {
  const { colorMode } = useColorMode();

  const slot1LightImg = `/img/docAssets/${
    lightImageSrc1 ? lightImageSrc1 : darkImageSrc1
  }`;
  const slot2LightImg = `/img/docAssets/${
    lightImageSrc2 ? lightImageSrc2 : darkImageSrc2
  }`;
  const slot1DarktImg = `/img/docAssets/${darkImageSrc1}`;
  const slot2DarktImg = `/img/docAssets/${darkImageSrc2}`;

  return (
    <ImgComparisonSlider className="imageSlider">
      <figure slot="first" className="before">
        <img
          width="100%"
          alt={alt}
          src={colorMode === "dark" ? slot1DarktImg : slot1LightImg}
        />
        <figcaption>Before</figcaption>
      </figure>
      <figure slot="second" className="after">
        <img
          width="100%"
          alt={alt}
          src={colorMode === "dark" ? slot2DarktImg : slot2LightImg}
        />
        <figcaption>After</figcaption>
      </figure>
      <svg
        slot="handle"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        className="custom-animated-handle"
        viewBox="-8 -3 16 6"
      >
        <path
          stroke="##808080"
          d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
          stroke-width="1"
          fill="##808080"
          vector-effect="non-scaling-stroke"
        ></path>
      </svg>
    </ImgComparisonSlider>
  );
}

export default ImageSlider;
