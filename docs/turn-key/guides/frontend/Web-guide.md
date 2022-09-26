---
sidebar_label: Web
sidebar_position: 7
description: Develop with Web
title: Web Guide
keywords: [web, guide]
sidebar_custom_props: { icon: "settings" }
---

# Web guide

## Development build

To create a development build,

1.  Follow the [quickstart guide](/turn-key/quickstart) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    <image alt="Linux_Build" className="guide-img" lightImageSrc="guides/Linux_Build.png" darkImageSrc="guides/Linux_Build.png" />
1.  Select **Web** in the platforms menu
    <image alt="CLIBuild" className="guide-img" lightImageSrc="guides/CLIBuild.png" darkImageSrc="guides/CLIBuild.png" />
1.  Select **Development** in the build menu
    <image alt="Linux_Type_Development" className="guide-img" lightImageSrc="guides/Linux_Type_Development.png" darkImageSrc="guides/Linux_Type_Development.png" />
1.  This will launch the development edition of the Web application on your system

## Production build

To create a production build,

1.  Follow the [quickstart guide](/turn-key/quickstart) to create a new app with the app builder and install all the dependencies
1.  Run `npm start` in the project root. This will launch the CLI
1.  Select **Build** in the main menu
    <image alt="Linux_Build" className="guide-img" lightImageSrc="guides/Linux_Build.png" darkImageSrc="guides/Linux_Build.png" />
1.  Select **Web** in the platforms menu
    <image alt="CLIBuild" className="guide-img"  lightImageSrc="guides/CLIBuild.png" darkImageSrc="guides/CLIBuild.png" />
1.  Select **Production** in the build menu
    <image alt="Linux_Type_Production" className="guide-img" lightImageSrc="guides/Linux_Type_Production.png" darkImageSrc="guides/Linux_Type_Production.png" />
1.  This will build the production edition of the Web application on your system
1.  The binary will be located at `agora-app-builder/<PRODUCT_ID>/dist`
1.  This project uses react-router to perform front-end routing. So you need to configure your website host (or webserver) to redirect all the requests to index.html. We have already provided the config for two popular SPA hosts: [vercel](https://vercel.com/) & [netlify](https://www.netlify.com/)

  <br/>

_Copy paste the appropriate redirect file into `agora-app-builder/<PRODUCT_ID>/dist` (which contains the built index.html and js)._

**vercel.json** (for vercel)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**\_redirects** (for netlify. It's just `_redirects` no file extension)

```
/* /index.html 200
```

1.  Optionally, If you are also building an iOS app, add an `apple-app-site-association` file in `agora-app-builder/<PRODUCT_ID>/dist`
    <br />

**apple-app-site-association** (It's just `apple-app-site-association` no file extension)

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAM_ID.BUNDLE_ID",
        "paths": ["*"]
      }
    ]
  }
}
```

Replace `TEAM_ID` and `BUNDLE_ID` with your own apple team id and bundle id.

Also, add appropriate headers to your CDN to ensure that the `apple-app-site-association` file is served with `Content-Type=application/pkcs7-mime` header. Here is an example `vercel.json` with configured headers:

**vercel.json**

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/apple-app-site-association",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/pkcs7-mime"
        }
      ]
    }
  ]
}
```

1.  This is how your directory will look like once you are done:

```markdown
dist/
├── 0c70ae08030483b5c6ff179bd61b411d.png
├── 0dbb46afd5749f6d8979f9be7869cd5d.png
├── 44da239f706935fc51d14bdc287e6afb.png
├── a09a7277eaeb33e1f28d4f649ce04444.png
├── af43cb6e35c119682e2f40bcec56da30.png
├── b292d48f1bbd5845fd620265eb258d71.png
├── d33dc98eed44cac76032f4d9ad428b3e.png
├── f7215317ffec2eaeee0261c58935f3dc.png
├── index.html
├── main.js
├── apple-app-site-association // Only if you are building for iOS
└── vercel.json //If you are deplying to vercel
```
