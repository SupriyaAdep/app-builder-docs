---
sidebar_label: How to embed the App Builder Web SDK in a React web app ?
sidebar_position: 1
description: Embed App Builder SDK in your app
title: How to embed the App Builder Web SDK in a React web app ?
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes the process of embedding the App Bulder React SDK in a React web app.

## BUILDING

#### STEP 1

<!-- LHS -->

You need to download and extract the app builder source code, you can read more [here](google.com).

Run the **app-builder-cli** in your project folder using the following command:

<!-- RHS -->

```shell
npm i && npm run start
```

#### STEP 2

<!-- LHS -->

Navigate using the arrow keys and select the `Build` option using the enter key

<!-- RHS -->

<!-- ![Main menu, Build highlighted screenshot](./1.png) -->
<image alt="Build option" lightImageSrc="sdk/react/1.png" darkImageSrc="sdk/react/1.png" />

#### STEP 3

<!-- LHS -->

Select the `React SDK` platform, after which the CLI will start the build process. This will take a few minutes.

<!-- RHS -->

<!-- ![Build menu, React-SDK highlighted screenshot](./2.png) -->
<image alt="Build option" lightImageSrc="sdk/react/2.png" darkImageSrc="sdk/react/2.png" />

#### STEP 4

<!-- LHS -->

Once the build is complete open a terminal window in your React project directory.

<!-- RHS -->

<!-- ![Terminal window inside React js project folder](./3.png) -->
<image alt="Build option" lightImageSrc="sdk/react/3.png" darkImageSrc="sdk/react/3.png" />

#### STEP 5

<!-- LHS -->

The **app-builder-cli** compiles your App Builder project into a node module inside the `<Agora App Builder>/Builds/react-sdk` folder. Simply install this module using the following command.

<!-- RHS -->

```shell
npm install <path-to-app-builder-project-folder>/Builds/react-sdk
```

---

## USAGE

#### STEP 1

<!-- LHS -->

The module is installed with same name as your App Builder project. Import it just like any other node module into your desired React component.

<!-- RHS -->

```js
import AgoraAppBuilder from "AgoraAppBuilder";
```

#### STEP 2

<!-- LHS -->

After importing the module your App Builder project can be rendered using the `View` property on the imported `AgoraAppBuilder` object.

Make sure to provide necessary styling including a width, height and display flex on the parent element of the `View` component for proper scaling.

<!-- RHS -->

```jsx {2-6}
const App = () = {
  return (
    <div style={{ display: "flex", width: "100vw", height: "550px" }}>
      <AgoraAppBuilder.View />
    </div>
  );
}
```

#### STEP 3

<!-- LHS -->

Start the development server inside your React project directory with the following command

<!-- RHS -->

`npm run start`

#### STEP 4

<!-- LHS -->

You should now see your App Builder project being displayed in your desired React component.

<!-- RHS -->

<!-- ![Website with App Builder embedded](./5.png) -->
<image alt="Build option" lightImageSrc="sdk/react/5.png" darkImageSrc="sdk/react/5.png" />

---

## CUSTOMIZATION

#### STEP 1

<!-- LHS -->

You can use FPEs (First Party Extension) to customize your embedded App Builder project.

Read [this guide](https://google.com) for more information.

#### STEP 2

<!-- LHS -->

To create a FPE in a React web app you need to access the `createFPE` method on the imported `AgoraAppBuilder` object, which takes the `FPEConfig` as a parameter and returns a FPE Object.

Make sure you do this on component mount for best results.

<!-- RHS -->

```js {4-10}
import AgoraAppBuilder from "AgoraAppBuilder";

const App = () = {
  useEffect(()=>{
    const fpe = AgoraAppBuilder.createFPE({
    /*
      My FPE Config. See https://example.com for config reference.
    */
    });
  },[])
...
```

#### STEP 3

<!-- LHS -->

Pass the returned FPE Object to the `installFPE` method available under the same `AgoraAppBuilder` object to apply the config to your embedded App Builder project.

<!-- RHS -->

```js {10}
import AgoraAppBuilder from "AgoraAppBuilder";

const App = () = {
  useEffect(()=>{
    const fpe = AgoraAppBuilder.createFPE({
    /*
      My FPE Config. See https://example.com for config reference.
    */
    });
    AgoraAppBuilder.installFPE(FPE);
  },[])
...
```

#### STEP 4

<!-- LHS -->

You should now be able to see your customizations in action!

<!-- RHS -->

<!-- ![Website with App Builder embedded customized](./6.png) -->
<image alt="Build option" lightImageSrc="sdk/react/6.png" darkImageSrc="sdk/react/6.png" />

---
