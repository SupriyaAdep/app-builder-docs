---
sidebar_label: Components API
sidebar_position: 1
description: Components API is a very powreful way to override
title: Components API
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The Components API allows for granular overriding of various aspects of the App Builder user interface ranging from entire screens such as the “VideoCall” screen to specific components within these screens such as the “BottomBar” component.

The overrides are applied by supplying values as an object under the top-level `components` key to the [Customization API config]('a') object.

---

<api>

<intro>
<subtitle>

## videoCall : VideoCallComponent : VideoCallInterface

</subtitle>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The VideoCall screen displays the active video call / livestream UI. This UI is shown when a user has joined a meeting.

Hence it is displayed after:

- The user clicks on `JoinButton` inside the `Precall` screen.

However if [$config.precall]('a') is set to disabled, the videoCall screen is directly displayed after:

- The user clicks on the “Start Meeting” button inside the `Share` screen
- The user clicks on a meeting invite link.

<br/>

</intro>

### _Overrides_:

<collapsible>

### VideoCallComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the entire VideoCall screen by pasing in a [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `videoCall` key to the `Components Api Object`

To reuse parts of default video call ui you can import them from the [SubComponents Library](a) accessible under the `fpe-api` module.

Use the example code given below showcasing reconstruction of the default video call ui as a guide.

```js {15-42}
import React from "react";
import { View } from "react-native";
import { installFPE } from "fpe-api/install";
import {
  ParticipantsView,
  Chat,
  Navbar,
  SettingsView,
  Controls,
  VideoComponent,
  useSidePanel,
} from "fpe-api";
import { SidePanelType } from "../src/subComponents/SidePanelEnum";

const VideoCall: React.FC = () => {
  const { sidePanel } = useSidePanel();
  return (
    <View style={{ flex: 1, flexDirection: "column", overflow: "hidden" }}>
      <Navbar></Navbar>
      <View
        style={{
          flex: 12,
          flexDirection: "row",
        }}
      >
        <VideoComponent />
        {/* Responsible for showing the user video feeds, 
        something about layouts{ todo(adicyta) } */}
        {sidePanel === SidePanelType.Chat ? (
          <Chat />
        ) : sidePanel === SidePanelType.Settings ? (
          <SettingsView />
        ) : sidePanel === SidePanelType.Participants ? (
          <ParticipantsView />
        ) : (
          <></>
        )}
      </View>
      <Controls />
    </View>
  );
};

const data = installFPE({
  components: {
    videoCall: VideoCall,
  },
});

export default data;
```

</collapsible>

<br/>

<method>
<collapsible>

### VideoCallInterface

You can override specific parts of the VideoCall screen by pasing in this object with key and values corresponding to the part you want to override under the `videoCall` key to the `Components Api Object`

| Key                                                 | Type                                                            | Description                                                        |
| --------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------ |
| [bottomBar](#videocallbottombar) ?:                 | [BottomBarComponent](#bottombarcomponent)                       | Customize the Bottom Bar by passing in your own component          |
| [customContent](#videocallcustomcontent) ?:         | [RenderingComponentInterface](#renderingcomponentinterface)     | Customize the settings panel by passing in your own component.     |
| [customLayouts](#videocallcustomlayouts) ?:         | [CustomLayoutsOverrideFunction](#customlayoutsoverridefunction) | Customize the settings panel by passing in your own component.     |
| [participantsPanel](#videocallparticipantspanel) ?: | [ParticipantPanelComponent](#participantspanelcomponent)        | Customize the Participants Panel by passing in your own component. |

<br/>
Use the example code given below showcasing overridding of specific video call components as a guide.

```tsx {9-18}
import { installFPE } from "fpe-api/install";
import {
  MyBottomBar,
  myCustomContent,
  myCustomLayout,
  MyParticipantPanel,
} from "./Customizations";

const userCustomization = installFPE({
  components: {
    videoCall: {
      bottomBar: MyBottomBar,
      customContent: myCustomContent,
      customLayout: myCustomLayout,
      participantsPanel: MyParticipantPanel,
    },
  },
});

export default userCustomization;
```

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.bottomBar : BottomBarComponent

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

The BottomBarComponent occupies the bottom part of the VideoCall screen and displays all the meeting controls.

:::note
The controls displayed change depending on the operating sytem/platform and the user config
:::

### _Overrides_:

<collapsible>

### BottomBarComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the BottomBar component by passing in a [React Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `bottomBar` key to the `VideoCallInterface Object`

To reuse parts of default bottom bar ui you can import them from the [SubComponents Library](a) accessible under the `fpe-api` module.

Use the example code given below showcasing reconstruction of the default bottom bar ui as a guide.

```tsx
import React from "react";
import { installFPE } from "fpe-api/install";

// todo(adicyta)
const BottomBar = () => {
  return <></>;
};

const userCustomization = installFPE({
  components: {
    videoCall: {
      bottomBar: BottomBar,
    },
  },
});

export default userCustomization;
```

</collapsible>

</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.chat : ChatComponent : ChatInterface

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

The Chat component displays the ui to send and view group as well as private chat messages to every user in the meeting

### _Overrides_:

<collapsible>

### ChatComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the Chat component by passing in a [React Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `chat` key to the `VideoCallInterface Object`

To reuse parts of chat ui you can import them from the [SubComponents Library](a) accessible under the `fpe-api` module.

Use the code example given below showcasing reconstruction of the default chat ui as a guide.

```js
import React from "react";
import { installFPE } from "fpe-api/install";

// todo(adicyta)
const BottomBar = () => {
  return <></>;
};

const userCustomization = installFPE({
  components: {
    videoCall: {
      bottomBar: BottomBar,
    },
  },
});

export default userCustomization;
```

:::info

Use `useChatUIControl()` utility from the [Hooks and Utility Library]('a') to control ui state within your chat component to ensure compatibility with other default App Builder flows.

:::

</collapsible>

<br/>

<collapsible >

### ChatInterface

You can override the specific parts chat ui by pasing in this object with key and values corresponding to the part you want to overrid under the `chat` key to the `VideoCallInterface`

```js
{
  chatBubble: ChatBubbleComponent;
  // Customize the Bottom Bar by passing in your own component
  chatInput: ChatInputComponent;
  // Customize the Bottom Bar by passing in your own component
}
```

| Method                                      | Description                                                |
| ------------------------------------------- | ---------------------------------------------------------- |
| [chat.chatBubble](#videocallchatchatbubble) | Customize the chat Bubble component.                       |
| [chat.chatInput](#videocallchatchatinput)   | Customize the chat input by passing in your own component. |

</collapsible>

</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.chat.chatBubble : ChatBubbleComponent

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

The Chat Bubble component displays the message inside the chat ui. It is conditionally styled based on message origin (ie local or remote).

### _Overrides_ :

<method>
<collapsible>

### ChatBubbleComponent: [React.ComponentType<ChatBubbleProps\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the ChatBubble component by passing in a [React Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `chatBubble` key to the `ChatInterface Object`

#### ChatBubbleProps

| Prop          | Type                                                                              | Description                                                                  |
| ------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| msg           | string                                                                            | Content of the chat message                                                  |
| isLocal       | boolean                                                                           | Specifies if the message is from a local user or if it is from a remote user |
| uid           | string                                                                            | Name of the user who sent the message                                        |
| ts            | number                                                                            | Timestamp of the message                                                     |
| someObject    | [myInterface]('')                                                                 | Some interface only used by ChatBubbleProps and nowhere else                 |
| someObject    | {<br/>&emsp;msg: string,<br/>&emsp;isLocal: boolean,<br/>&emsp;uid: string<br/> } | Some interface only used by ChatBubbleProps and nowhere else                 |
| anotherObject | [myInterfaceCommon]('')                                                           | A common interface used in multiple places besides here eg.UserObject        |

<br/>

#### myInterface

| Key     | Type    | Description                                                                  |
| ------- | ------- | ---------------------------------------------------------------------------- |
| msg     | string  | Content of the chat message                                                  |
| isLocal | boolean | Specifies if the message is from a local user or if it is from a remote user |
| uid     | string  | Name of the user who sent the message                                        |

<br/>

Use the code example given below showcasing reconstruction of the default chat bubble ui as a guide.

```tsx
import React from "react";
import { installFPE } from "fpe-api/install";

// todo(adicyta)
const BottomBar = () => {
  return <></>;
};

const userCustomization = installFPE({
  components: {
    videoCall: {
      bottomBar: BottomBar,
    },
  },
});

export default userCustomization;
```

</collapsible>
</method>

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## videoCall.chat.chatInput : [React.ComponentType<ChatInputProps\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

### _Overrides_:

<collapsible>

### ChatInputProps

Customize the chat input by passing in your own component.

| Prop           | Type    | Description                                                                  |
| -------------- | ------- | ---------------------------------------------------------------------------- |
| privateActive  | boolean | Content of the chat message                                                  |
| selectedUserID | boolean | Specifies if the message is from a local user or if it is from a remote user |

</collapsible>

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## videoCall.customContent : RenderingComponentInterface

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

Specifies the react component to be used to render custom content injected into the renderingContext or to override default RTC render.

### _Overrides_:

<method>
<collapsible>

### RenderingComponentInterface

You can override the specific renderer of each render object type by passing in this object with key and values corresponding to the render object type you want to override under the `customContent` key to the `VideoCallInterface`

| Key                | Type                | Description                                                                                                 |
| ------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| rtc                | React.ComponentType | Specifies the component to be used for rendering the default RTC video feed.                                |
| [customKey:string] | React.ComponentType | Component to be rendered corresponding to `type` property of custom content object added to render context. |

<br/>

Use the example code given below showcasing overriding of the default rtc renderer as a guide.

```tsx
import React from "react";
import { installFPE } from "fpe-api/install";

// todo(adicyta)
const BottomBar = () => {
  return <></>;
};

const userCustomization = installFPE({
  components: {
    videoCall: {
      bottomBar: BottomBar,
    },
  },
});

export default userCustomization;
```

</collapsible>
</method>
</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.customLayouts : customLayoutsOverrideFunction

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

Customize the layout through LayoutInterface

### _Overrides_:

<method>
<collapsible>

### customLayoutsOverrideFunction: ( [DefaultLayouts](#defaultlayouts) ) => [LayoutInterface](#layoutinterface)[]

You can override the layouts by providing a function with LayoutInterface[] return type to the `customLayouts` under `VideoCallInterface` object.

This function recieves an array of default layouts and expects you to return an array of LayoutInterfaceObjects that represent your layouts.

#### DefaultLayouts: Array <[LayoutInterface](#layoutinterface)\>

| Index | Type            | Value                                                                                                                     |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 0     | LayoutInterface | {<br/>&emsp;name: 'PinnedLayout',<br/>&emsp;icon: [PinnedIcon](a),<br/>&emsp;component: [PinnedLayoutComponent](a)<br/> } |
| 1     | LayoutInterface | {<br/>&emsp;name: 'GridLayout',<br/>&emsp;icon: [GridIcon](a),<br/>&emsp;component: [GridLayoutComponent](a)<br/> }       |

<br/>

#### LayoutInterface

| Key       | Type                              | Description                                                                           |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| name      | string                            | Specifies if the message is from a local user or if it is from a remote user          |
| icon      | string                            | Can be a <br/> 1. Base 64 Image string <br/>2. CDN URL <br/>3. Bunder imported string |
| Component | React.ComponentType<LayoutProps\> | Timestamp of the message                                                              |

<br/>

Use the example code given below showcasing overriding of the default layout as a guide.

```tsx
import React from "react";
import { installFPE } from "fpe-api/install";

// todo(adicyta)
const BottomBar = () => {
  return <></>;
};

const userCustomization = installFPE({
  components: {
    videoCall: {
      bottomBar: BottomBar,
    },
  },
});

export default userCustomization;
```

</collapsible>
</method>
</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.participantsPanel : ParticipantsPanelComponent

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

The participantsPanel component lists all the users in the video call / livestream along with their audio and video status. Hosts additionally are able to see user controls such as `mute participant` , `remove participant from call`.

<br/>

### _Overrides_:

<collapsible>

### ParticipantsPanelComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the entire participantsPanel component by pasing in a [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `participanPanel` key to the `VideocallInterface Object`

You can import parts of default participantsPanel ui from the [SubComponents Library](/first-party-extension/api-reference/sub-component-library) accessible under the `fpe-api` module to reuse them in your component.

Use the example code given below showcasing reconstruction of the default participantsPanel ui as a guide.

```js
import React from "react";
import { View } from "react-native";
import { installFPE } from "fpe-api/install";
import {
  ParticipantsView,
  Chat,
  Navbar,
  SettingsView,
  Controls,
  VideoComponent,
  useSidePanel,
} from "fpe-api";
import { SidePanelType } from "../src/subComponents/SidePanelEnum";

const VideoCall: React.FC = () => {
  const { sidePanel } = useSidePanel();
  return (
    <View style={{ flex: 1, flexDirection: "column", overflow: "hidden" }}>
      <Navbar></Navbar>
      <View
        style={{
          flex: 12,
          flexDirection: "row",
        }}
      >
        <VideoComponent />
        {/* Responsible for showing the user video feeds, something about layouts{ todo(adicyta) } */}
        {sidePanel === SidePanelType.Chat ? (
          <Chat />
        ) : sidePanel === SidePanelType.Settings ? (
          <SettingsView />
        ) : sidePanel === SidePanelType.Participants ? (
          <ParticipantsView />
        ) : (
          <></>
        )}
      </View>
      <Controls />
    </View>
  );
};

const data = installFPE({
  components: {
    videoCall: VideoCall,
  },
});

export default data;
```

</collapsible>

<br/>

</method>

<!-- ***************************************************************************************************************** -->

</api>
