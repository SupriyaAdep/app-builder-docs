---
sidebar_label: How to embed the App Builder Web SDK in a VueJS web app ?
sidebar_position: 4
description: Embed App Builder SDK in your app
title: How to embed the App Builder Web SDK in a VueJS web app ?
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes the process of embedding the App Bulder Web SDK in a VueJS web app.

## BUILDING

#### STEP 1

You need to download and extract the app builder source code, you can read more [here](https://appbuilder.agora.io/docs/Frontend/Web-guide)<br/> Run the app-builder-cli in your project folder using the following command:

```shell
npm i && npm run start
```

#### STEP 2

Navigate using the arrow keys and select the build option using the enter key

<image alt="Build option" lightImageSrc="sdk/vue/1.png" darkImageSrc="sdk/vue/1.png" />

#### STEP 3

Select the Web SDK platform, after which the CLI will start the build process. This will take a few minutes.

<image alt="Build option" lightImageSrc="sdk/vue/2.png" darkImageSrc="sdk/vue/2.png" />

#### STEP 4

Select the <strong>Web SDK</strong> platform, after which the CLI will start the build process. This will take a few minutes.

<image alt="Build option" lightImageSrc="sdk/vue/3.png" darkImageSrc="sdk/vue/3.png" />

<hr/>

## USAGE

#### STEP 1

The module is installed with same name as your App Builder project. Import it just like any other node module into your desired Vue component.

```html
<script>
  import AgoraAppBuilder from "AgoraAppBuilder";
</script>
```

#### STEP 2

After importing the module your App Builder project can be rendered using the <app-builder /> custom html element.

Make sure to provide necessary styling including a width and height on the parent element of the custom html element for proper scaling.

```html {2-4}
<template>
  <div style="width: 100vw; height: 550px;">
    <app-builder />
  </div>
</template>
```

#### STEP 3

Start the development server inside your VueJS project directory with the following command

`npm run serve`

<hr/>

#### STEP 4

You should now see your App Builder project being displayed in your desired Vue component.

<image alt="Build option" lightImageSrc="sdk/vue/5.png" darkImageSrc="sdk/vue/5.png" />

#### STEP 5

The **app-builder-cli** compiles your App Builder project into a node module inside the `<Agora App Builder>/Builds/web-sdk` folder. Simply install this module using the following command.

<!-- RHS -->

```shell
npm install <path-to-app-builder-project-folder>/Builds/web-sdk
```

## CUSTOMIZATION

You can use FPEs (First Party Extension) to customize your embedded App Builder project.<br/>
Read this [guide](https://appbuilder.agora.io/docs/Frontend/Web-guide) for more information

#### STEP 1

<!-- LHS -->

To create a FPE in a VueJS web app you need to access the `createFPE` method on the imported `AgoraAppBuilder` object, which takes the `FPEConfig` as a parameter and returns a FPE Object.

<!-- RHS -->

```html {3-7}
<script>
import AgoraAppBuilder from "AgoraAppBuilder";
const fpe = AgoraAppBuilder.createFPE({
  /*
    My FPE Config. See https://example.com for config reference.
  */
});
</script>
```

#### STEP 2

<!-- LHS -->

Pass the returned FPE Object to the `installFPE` method available under the same `AgoraAppBuilder` object to apply the config to your embedded App Builder project.

<!-- RHS -->

```html {8}
<script>
import AgoraAppBuilder from "AgoraAppBuilder";
const FPE = AgoraAppBuilder.createFPE({
  /*
    My FPE Config. See https://example.com for config reference.
  */
});
AgoraAppBuilder.installFPE(FPE);
</script>
```

#### STEP 3

<!-- LHS -->

You should now be able to see your customizations in action!

<!-- RHS -->

<!-- ![Website with App Builder embedded customized](./6.png) -->
<image alt="Build option" lightImageSrc="sdk/vue/6.png" darkImageSrc="sdk/vue/6.png" />
