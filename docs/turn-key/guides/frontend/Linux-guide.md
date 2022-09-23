---
sidebar_label: Linux
sidebar_position: 7
description: Develop with Linux
title: Linux Guide
keywords: [linux, guide]
sidebar_custom_props: { icon: "settings" }
---

# Linux guide (for desktop app)

## Development build

To create a development build,

1.  Follow the [quickstart guide](/turn-key/quickstart) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    <image alt="Linux_Build" className="center-img" lightImageSrc="guides/Linux_Build.png" darkImageSrc="guides/Linux_Build.png" />
1.  Select **Linux** in the platforms menu

     <image alt="Linux_Platform" className="center-img" lightImageSrc="guides/Linux_Platform.png" darkImageSrc="guides/Linux_Platform.png" />

1.  Select **Development** in the build menu

      <image alt="Linux_Type_Development" className="center-img" lightImageSrc="guides/Linux_Type_Development.png" darkImageSrc="guides/Linux_Type_Development.png" />

1.  This will launch the development edition of the Linux application on your system

## Production build

To create a production build,

1.  Follow the [quickstart guide](/turn-key/quickstart) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    <image alt="Linux_Build" className="center-img" lightImageSrc="guides/Linux_Build.png" darkImageSrc="guides/Linux_Build.png" />
1.  Select **Linux** in the platforms menu
    <image alt="Linux_Platform" className="center-img" lightImageSrc="guides/Linux_Platform.png" darkImageSrc="guides/Linux_Platform.png" />
1.  Select **Production** in the build menu

      <image alt="Linux_Type_Production"  className="center-img" lightImageSrc="guides/Linux_Type_Production.png" darkImageSrc="guides/Linux_Type_Production.png" />

1.  This will build the production edition of the Linux application on your system
1.  The binary will be located at `agora-app-builder/<PRODUCT_ID>/out`
