---
sidebar_label: Quickstart
sidebar_position: 1
description: Get started with using customization api to modify your App Builder application
title: Customization API quickstart guide
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes how to quickly get started with Customization API to modify your App Builder application. As a showcase we will be exploring how to override the default ChatBubble component with our own component while retaining all of its functionality.

## INITIALIZING

#### STEP 1

Download and extract the app builder source code, [read more on how to do it here](/turn-key/quickstart).

#### STEP 2

Run the **agora-app-builder-cli** in your project folder using the following command:

<!-- RHS -->

```shell
npm i && npm run start
```

#### STEP 3

<!-- LHS -->

Navigate using the arrow keys and select the `Initialize User customization` option using the enter key. After which the CLI will start the initialization.

Once complete a boilerplate user-customization will be created inside `<path-to-app-builder-project-folder>/<project-name>/test-fpe/index.tsx`.

<!-- RHS -->

<!-- ![Main menu, Build highlighted screenshot](sdk/angular/1.png) -->
<image alt="Build option" lightImageSrc="customization-api/guides/quickstart-1.png" darkImageSrc="customization-api/guides/quickstart-1.png" />

<!-- LHS -->

---

## USAGE EXAMPLE

Customization API is a set of APIs and Libraries that allow you to customize your App Builder project.

**APIs** are exposed under the `customize` method by passing an object with keys corresponding to the API you want to interact with. Whereas **Libraries** are available as imports under the `customization-api` namespace.

**The following steps indicate an example customization by overriding the App Builder Chat Bubble component.**

<!-- LHS -->

#### STEP 1

Open the `index.tsx` file present inside the newly created `test-fpe` folder.

<!-- RHS -->

<image alt="Build option" lightImageSrc="customization-api/guides/quickstart-2.png" darkImageSrc="customization-api/guides/quickstart-2.png" />

<!-- LHS -->

#### STEP 2

Create a component you want to override the default Chat Bubble component with.

<!-- RHS -->

```tsx title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/MyChatBubbleComponent.tsx'
import React from "react";

const ChatBubbleComponent = (props) => {
  return <></>;
};

export default ChatBubbleComponent;
```

<!-- LHS -->

#### STEP 3

When passed as an override the component will recieve props to display necessary information or perform necessary actions. We can refer to the [api reference](/customization-api/api-reference/components-api#chatbubblecomponent) to see the props available to our component and destructure them for use.

<!-- RHS -->

```tsx title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/MyChatBubbleComponent.tsx'
import React from "react";

const ChatBubbleComponent = (props) => {
  let { isLocal, createdTimestamp, message, uid } = props;

  return <></>;
};

export default ChatBubbleComponent;
```

<!-- LHS -->

#### STEP 4

Once we have the props, we can fetch any other information like in our case we recieve the message senders `uid` as prop however in UI it would be more helpful to show the `displayName` of the user. We can fetch any such information using the [App state library](/customization-api/api-reference/app-state-library) the `displayName` in specific can be fetched from the [Render app state](/customization-api/api-reference/app-state-library#userender)

<!-- RHS -->

```tsx title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/MyChatBubbleComponent.tsx'
import React from "react";
import { useUserList } from "customization-api";

const ChatBubbleComponent = (props) => {
  const { renderList } = useUserList();

  let { isLocal, createdTimestamp, message, uid } = props;

  const displayName = renderList[uid].name;

  return <></>;
};

export default ChatBubbleComponent;
```

<!-- LHS -->

#### STEP 5

Having all the needed information at hand we can define our UI.

<!-- RHS -->

```tsx title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/MyChatBubbleComponent.tsx'
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUserList } from "customization-api";

const ChatBubbleComponent = (props) => {
  const { renderList } = useUserList();

  let { isLocal, createdTimestamp, message, uid } = props;

  let time =
    new Date(parseInt(createdTimestamp)).getHours() +
    ":" +
    new Date(parseInt(createdTimestamp)).getMinutes();

  return (
    <View>
      <View
        style={[
          style.chatSenderViewCommon,
          isLocal ? style.chatSenderViewLocal : style.chatSenderViewRemote,
        ]}
      >
        <Text
          style={[
            style.timestampTextCommon,
            isLocal ? style.timestampTextLocal : style.timestampTextRemote,
          ]}
        >
          {renderList[uid] ? renderList[uid].name : "user"} | {time + " "}
        </Text>
      </View>
      <View
        style={[
          style.chatBubbleCommon,
          isLocal ? style.chatBubbleLocal : style.chatBubbleRemote,
        ]}
      >
        <Text
          style={[
            style.textCommon,
            isLocal ? style.whiteText : style.blackText,
          ]}
          selectable={true}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  full: {
    flex: 1,
  },
  chatSenderViewCommon: {
    marginVertical: 2,
    flexDirection: "row-reverse",
  },
  chatSenderViewRemote: {
    marginRight: 30,
    marginLeft: 15,
  },
  chatSenderViewLocal: {
    marginRight: 15,
    justifyContent: "flex-end",
  },
  timestampTextCommon: {
    color: $config.PRIMARY_FONT_COLOR + "60",
    fontWeight: "500",
    fontSize: 12,
  },
  timestampTextRemote: {
    textAlign: "left",
  },
  timestampTextLocal: {
    textAlign: "right",
  },
  chatBubbleCommon: {
    borderRadius: 25,
    maxWidth: "80%",
    display: "flex",
    marginVertical: 5,
    padding: 8,
    flex: 1,
  },
  chatBubbleRemote: {
    border: "5px solid gray",
    backgroundColor: $config.PRIMARY_FONT_COLOR + "20",
    alignSelf: "flex-start",
    marginRight: 30,
    marginLeft: 15,
  },
  chatBubbleLocal: {
    border: "5px solid aquamarine",
    backgroundColor: $config.PRIMARY_COLOR,
    alignSelf: "flex-end",
    marginRight: 15,
    marginLeft: 30,
  },
  textCommon: {
    fontWeight: "500",
  },
  whiteText: {
    color: $config.SECONDARY_FONT_COLOR,
  },
  blackText: {
    color: $config.PRIMARY_FONT_COLOR,
  },
});

export default ChatBubbleComponent;
```

<!-- LHS -->

#### STEP 6

Call the `customize` method and pass an object with the necessary keys. Since we want to override the Chat Bubble component our object should look like so based on the [Api Reference](/customization-api/api-reference/components-api).

<!-- RHS -->

```tsx {5-13} title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/index.tsx'
import { customize } from "customization-api";

import MyChatBubbleComponent from "./components/MyChatBubbleComponent";

const userCustomization = customize({
  components: {
    videoCall: {
      chat: {
        chatBubble: MyChatBubbleComponent,
      },
    },
  },
});

export default userCustomization;
```

<!-- LHS -->

#### STEP 7

Finally we export our customization generated by the `customize` method to allow App Builder to apply it.

<!-- RHS -->

```js {15} title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/index.tsx'
import { customize } from "customization-api";

import MyChatBubbleComponent from "./components/MyChatBubbleComponent";

const userCustomization = customize({
  components: {
    videoCall: {
      chat: {
        chatBubble: MyChatBubbleComponent,
      },
    },
  },
});

export default userCustomization;
```

<!-- LHS -->

#### STEP 8

You should now see your customization applied to App Builder when you build your project.

<!-- RHS -->

<!-- ![Website with App Builder embedded](sdk/angular/5.png) -->
<image alt="Build option" lightImageSrc="customization-api/guides/quickstart-3.png" darkImageSrc="customization-api/guides/quickstart-3.png" />
