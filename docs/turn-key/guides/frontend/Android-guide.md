---
sidebar_label: Android
sidebar_position: 4
description: Develop with Android
title: Android Guide
keywords: [android, guide]
sidebar_custom_props: { icon: "settings" }
---

# Android guide

## Development build

To create a development build,

1.  Follow the [quickstart guide](/turn-key/quickstart) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    <image alt="Linux_Build"  className="guide-img" lightImageSrc="guides/Linux_Build.png" darkImageSrc="guides/Linux_Build.png" />
1.  Select **Android** in the platforms menu
    <image alt="Android_Platform" className="guide-img" lightImageSrc="guides/Android_Platform.png" darkImageSrc="guides/Android_Platform.png" />
1.  Select **Development** in the build menu
    <image alt="Linux_Type_Development" className="guide-img" lightImageSrc="guides/Linux_Type_Development.png" darkImageSrc="guides/Linux_Type_Development.png" />
1.  This will launch the development edition of the Android application on your system

## Production build

To create a production build,

1.  Follow the [quickstart guide](/turn-key/quickstart) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    <image alt="Linux_Build" className="guide-img" lightImageSrc="guides/Linux_Build.png" darkImageSrc="guides/Linux_Build.png" />
1.  Select **Android** in the platforms menu
    <image alt="Android_Platform" className="guide-img" lightImageSrc="guides/Android_Platform.png" darkImageSrc="guides/Android_Platform.png" />
1.  Select **Production** in the build menu
    <image alt="Linux_Type_Production" className="guide-img" lightImageSrc="guides/Linux_Type_Production.png" darkImageSrc="guides/Linux_Type_Production.png" />
1.  This will build the production edition of the Android application on your system
1.  The binary will be located at `agora-app-builder/<PRODUCT_ID>/android/app/build/outputs/apk/release`

## Production build with code signing

To create a production build with code signing,

1. Set up environment variables for code signing by following [this guide](https://reactnative.dev/docs/signed-apk-android)

2. Continue building for production by following the [above guide](#production-build)
