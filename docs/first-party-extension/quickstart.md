---
sidebar_label: Quickstart
sidebar_position: 1
description: Get started with using customization api to modify your App Builder application
title: Customization API quickstart guide
keywords: [appBuilder, websdk]
sidebar_custom_props: { icon: "settings" }
---

The following guide describes how to quickly get started with Customization API to modify your App Builder application.

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

**APIs** are exposed under the `installFPE` method by passing an object with keys corresponding to the API you want to interact with. Whereas **Libraries** are available as imports under the `fpe-api` namespace.

**The following steps indicate an example customization by overriding the App Builder Chat Bubble component.**

<!-- LHS -->

#### STEP 1

Open the `index.tsx` file present inside the newly created `test-fpe` folder.

<!-- RHS -->

<image alt="Build option" lightImageSrc="customization-api/guides/quickstart-2.png" darkImageSrc="customization-api/guides/quickstart-2.png" />

<!-- LHS -->

#### STEP 2

Create the component you want to override the default Chat Bubble component with.

<!-- RHS -->

```tsx title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/MyChatBubbleComponent.tsx'
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useUserList } from "fpe-api";

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

#### STEP 3

Call the `installFPE` method and pass an object with the necessary keys. Since we want to override the Chat Bubble component our object should look like so based on the [Api Reference](/first-party-extension/api-reference/components-api).

<!-- RHS -->

```tsx {5-13} title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/index.tsx'
import { installFPE } from "fpe-api/install";

import MyChatBubbleComponent from "./components/MyChatBubbleComponent";

const userCustomization = installFPE({
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

#### STEP 4

Finally we export our customization generated by the `installFPE` method to allow App Builder to apply it.

<!-- RHS -->

```js {15} title='<path-to-app-builder-project-folder>/<project-name>/test-fpe/components/index.tsx'
import { installFPE } from "fpe-api/install";

import MyChatBubbleComponent from "./components/MyChatBubbleComponent";

const userCustomization = installFPE({
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

#### STEP 5

You should now see your customization applied to App Builder when you build your project.

<!-- RHS -->

<!-- ![Website with App Builder embedded](sdk/angular/5.png) -->
<image alt="Build option" lightImageSrc="customization-api/guides/quickstart-3.png" darkImageSrc="customization-api/guides/quickstart-3.png" />
