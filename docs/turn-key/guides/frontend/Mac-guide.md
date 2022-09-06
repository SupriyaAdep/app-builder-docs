---
sidebar_label: Mac
sidebar_position: 7
description: Develop with Mac
title: Mac Guide
keywords: [mac, guide]
sidebar_custom_props: { icon: "settings" }
---

# Mac guide (for desktop app)

## Development build

To create a development build,

1.  Follow the [quickstart guide](/turn-key/quickstart) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    <image alt="Linux_Build" className="guide-img" lightImageSrc="guides/Linux_Build.png" darkImageSrc="guides/Linux_Build.png" />
1.  Select **Mac** in the platforms menu
    <image alt="Mac_Platform" className="guide-img" lightImageSrc="guides/Mac_Platform.png" darkImageSrc="guides/Mac_Platform.png" />
1.  Select **Development** in the build menu
    <image alt="Linux_Type_Development"  className="guide-img" lightImageSrc="guides/Linux_Type_Development.png" darkImageSrc="guides/Linux_Type_Development.png" />
1.  This will launch the development edition of the Mac application on your system

## Production build

To create a production build,

1.  Follow the [quickstart guide](/turn-key/quickstart) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    <image alt="Linux_Build" className="guide-img" lightImageSrc="guides/Linux_Build.png" darkImageSrc="guides/Linux_Build.png" />
1.  Select **Mac** in the platforms menu
    <image alt="Mac_Platform" className="guide-img" lightImageSrc="guides/Mac_Platform.png" darkImageSrc="guides/Mac_Platform.png" />
1.  Select **Production** in the build menu
    <image alt="Linux_Type_Production" className="guide-img" lightImageSrc="guides/Linux_Type_Production.png" darkImageSrc="guides/Linux_Type_Production.png" />

1.  This will build the production edition of the Mac application on your system
1.  The binary will be located at `agora-app-builder/<PRODUCT_ID>/out`

## Production build with code signing

To create a production build with code signing,

1.  Register for an [Apple developer account](https://developer.apple.com/) if you don't have one yet.
2.  Generate an application specific password from [Apple ID account page](https://appleid.apple.com/account/home) (Read : [https://support.apple.com/en-gb/HT204397](https://support.apple.com/en-gb/HT204397))

   <image alt="SignMac1" className="guide-img" lightImageSrc="guides/SignMac1.png" darkImageSrc="guides/SignMac1.png" />
   <image alt="SignMac2" className="guide-img" lightImageSrc="guides/SignMac2.png" darkImageSrc="guides/SignMac2.png" />
   <image alt="SignMac3" className="guide-img" lightImageSrc="guides/SignMac3.png" darkImageSrc="guides/SignMac3.png" />

3.  Open a terminal and execute the following command :

```
security add-generic-password -a "APPLE ID HERE" -w "APP SPECIFIC PASSWORD HERE" -s "AC_PASSWORD"
```

(Replace **APPLE ID HERE** and **APP SPECIFIC PASSWORD HERE** with your Apple ID and app-specific password generated above. Note that **AC_PASSWORD** is a static identifier and should **NOT** be replaced)

4.  Open `XCode > preferences`
5.  Open accounts tab
6.  Sign in to XCode with the developer account if not done already
7.  Click manage certificates

   <image alt="SignMac3" lightImageSrc="guides/SignMac3.png" darkImageSrc="guides/SignMac4.png" />
8.  Create a new certificate of the type “Developer ID Application”

   <image alt="SignMac3" lightImageSrc="guides/SignMac3.png" darkImageSrc="guides/SignMac5.png" />
9.  Execute the following command in a terminal:

```
security find-identity -v -p codesigning
```

and copy the correct hash corresponding to **“Developer ID Application”** into your clipboard

10. Execute the following command in a terminal:

```
export CSC_NAME="Your copied certificate hash"
```

11. Continue building for production by following the [above guide](#production-build)
