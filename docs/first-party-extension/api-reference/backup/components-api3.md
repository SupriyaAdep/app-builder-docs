---
sidebar_label: Components API3
sidebar_position: 9
description: Components API is a very powreful way to override
title: Components API
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

The Components API allows for granular overriding of various aspects of the App Builder user interface ranging from entire screens such as the “VideoCall” screen to specific components within these screens such as the “BottomBar” component.

The overrides are applied by supplying values as an object under the top-level `components` key to the [Customization API config]('a') object.
<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

<api>

<intro>
<subtitle>

## videoCall : [React.ComponentType](#videocall-reactcomponenttype) videoCallInterface

</subtitle>

The VideoCall screen displays the active video call / livestream UI. This UI is shown when a user has joined a meeting.

Hence it is displayed when:

- The user clicks on `JoinButton` inside the `Precall` screen.

However if [$config.precall]('a') is set to disabled, the videoCall screen is directly displayed when:

- The user clicks on the “Start Meeting” button inside the `Share` screen
- The user clicks on a meeting invite link.

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

</intro>

#### VideoCall: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the entire VideoCall screen by pasing in a [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `videoCall` key to the `Components Api Object`

To reuse parts of default video call ui you can import them from the [SubComponents Library](a) accessible under the `fpe-api` module.

Use the code example given below showcasing reconstruction of the default video call ui as a guide.

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
        <VideoComponent />{" "}
        {/* Responsible for showing the user video feeds, something about layouts{ todo(adicyta) } */}
        {sidePanel === SidePanelType.Chat ? <Chat /> : sidePanel === SidePanelType.Settings ? <SettingsView /> : sidePanel === SidePanelType.Participants ? <ParticipantsView /> : <></>}
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

<method>
<collapsible>

#### VideoCallInterface

Customize the entire chat panel or pass in an object to override a subcomponent

|     | Key                                               | Type                                                                                                                                                                                        | Description                                                                     |
| --- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| {   |                                                   |                                                                                                                                                                                             |                                                                                 |
|     | [chat](#videocallchat):                           | [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) \| [ChatInterface]("#ChatInterface") | Customize the entire chat panel or pass in an object to override a subcomponent |
|     | [settingsPanel](#videocallsettingspanel):         | [string](a)                                                                                                                                                                                 | Customize the settings panel by passing in your own component.                  |
|     | [participantsPanel](#videocallparticipantspanel): | [string](a)                                                                                                                                                                                 | Customize the Participants Panel by passing in your own component.              |
|     | [topBar](#videocalltopbar):                       | [string](a)                                                                                                                                                                                 | Customize the Top Bar by passing in your own component                          |
|     | [bottomBar](#videocalltopbar):                    | [string](a)                                                                                                                                                                                 | Customize the Bottom Bar by passing in your own component                       |
| }   |                                                   |                                                                                                                                                                                             |                                                                                 |

</collapsible>
</method>

<method>
 
<subtitle>

## videoCall.chat : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) ChatInterface

</subtitle>

Customize the entire video call component

<method>
<collapsible>

#### VideoCall: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the entire VideoCall screen by pasing in a [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `videoCall` key to the `Components Api Object`

To reuse parts of default video call ui you can import them from the [SubComponents Library](a) accessible under the `fpe-api` module.

Use the code example given below showcasing reconstruction of the default video call ui as a guide.

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
      <Navbar></Navbar> {
        // Responsible for showing the TopBar
      }
      <View
        style={{
          flex: 12,
          flexDirection: "row",
        }}
      >
        <VideoComponent />{" "}
        {
          // Responsible for showing the user video feeds.
        }
        {sidePanel === SidePanelType.Chat ? <Chat /> : sidePanel === SidePanelType.Settings ? <SettingsView /> : sidePanel === SidePanelType.Participants ? <ParticipantsView /> : <></>}
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
</method>

<method>
<collapsible >

### ChatInterface

Customize the entire chat panel or pass in an object to override a subcomponent.

| Method                                      | Description                                                |
| ------------------------------------------- | ---------------------------------------------------------- |
| [chat.chatBubble](#videocallchatchatbubble) | Customize the chat Bubble component.                       |
| [chat.chatInput](#videocallchatchatinput)   | Customize the chat input by passing in your own component. |

  </collapsible>
  </method>
  </method>

  <method>
  <subtitle>

## videoCall.chat.chatBubble : [React.ComponentType<ChatBubbleProps\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

  </subtitle>

Customize the chat Bubble component.

<collapsible>

### ChatBubbleProps

| msg     | string  | Content of the chat message                                                  |
| ------- | ------- | ---------------------------------------------------------------------------- |
| isLocal | boolean | Specifies if the message is from a local user or if it is from a remote user |
| uid     | string  | Name of the user who sent the message                                        |
| ts      | number  | Timestamp of the message                                                     |

</collapsible>

</method>

<method>

<subtitle>

## videoCall.chat.chatInput : [React.ComponentType<ChatInputProps\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>
<collapsible>

### ChatInputProps

Customize the chat input by passing in your own component.

| privateActive  | boolean | Content of the chat message                                                  |
| -------------- | ------- | ---------------------------------------------------------------------------- |
| selectedUserID | boolean | Specifies if the message is from a local user or if it is from a remote user |

</collapsible>

</method>

<method>
<subtitle>

## videoCall.settingsPanel : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the settings panel by passing in your own component.
</method>

<method>
  <subtitle>

## videoCall.participantsPanel : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

  </subtitle>

Customize the Participants Panel by passing in your own component.
</method>

<method>
  <subtitle>

## videoCall.topBar : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

  </subtitle>

Customize the Top Bar by passing in your own component.
</method>

<method>
  <subtitle>

## videoCall.bottomBar : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

  </subtitle>

Customize the Bottom Bar by passing in your own component.
</method>

<method>

  <subtitle>

## videoCall.renderingComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) RenderingComponentInterface

  </subtitle>

Customize the rendering by through RenderingComponentInterface

  <method>
  <collapsible>

### RenderingComponentInterface

| rtc                | React.ComponentType | Specifies the rendering component <br/> for displaying Rtc Streams i.e VideoView                                                                         |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [customKey:string] | React.ComponentType | Any Component provided here will be utilized <br/> as custom component for your Application. <br/>For more info, look at the Custom Content API overview |
| Component          | React.ComponentType | Timestamp of the message                                                                                                                                 |

  </collapsible>
  </method>
  </method>

<method>
  <subtitle>

## videoCall.customLayouts : LayoutInterface

  </subtitle>

Customize the layout through LayoutInterface

  <method>
  <collapsible>

### LayoutInterface

| name      | string                            | Specifies if the message is from a local user or if it is from a remote user          |
| --------- | --------------------------------- | ------------------------------------------------------------------------------------- |
| icon      | string                            | Can be a <br/> 1. Base 64 Image string <br/>2. CDN URL <br/>3. Bunder imported string |
| Component | React.ComponentType<LayoutProps\> | Timestamp of the message                                                              |

  </collapsible>
  </method>
  </method>

</api>

<api>
<intro>
<subtitle>

## precall : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) PrecallInterface

</subtitle>

Customize the entire video call component or customize the subcomponents selectively.

```typescript
const fpe = {
  precall: NewPreCallComponent
}

or

const fpe = {
  precall: {
    preview: PreviewComponent
    textBox: TextBoxComponent
  }
}
```

</intro>
<method>
<collapsible>

### PrecallInterface

| Method                               | Description                                                            |
| ------------------------------------ | ---------------------------------------------------------------------- |
| [preview](#precallpreview)           | Customize the Video Preview by passing in your own component.          |
| [audioMute](#precallaudiomute)       | Customize the Audio Mute icon button by passing in your own component. |
| [videoMute](#precallvideomute)       | Customize the Video Mute icon button by passing in your own component. |
| [deviceSelect](#precalldeviceselect) | Customize the Device Select dropdown by passing in your own component  |
| [textBox](#precalltextbox)           | Customize the Name Input text box by passing in your own component     |
| [joinButton](#precalljoinbutton)     | Customize the Join Call button by passing in your own component.       |
| [meetingName](#precallmeetingname)   | Customize the Meeting Name label by passing in your own component      |

</collapsible>

</method>

<method>
<subtitle>

## precall.preview : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Video Preview by passing in your own component.
</method>

<method>

<subtitle>

## precall.audioMute : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Audio Mute icon button by passing in your own component.
</method>

<method>

<subtitle>

## precall.videoMute : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Video Mute icon button by passing in your own component.
</method>

<method>

<subtitle>

## precall.deviceSelect : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Device Select dropdown by passing in your own component.
</method>

<method>
<subtitle>

## precall.textBox : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Name Input text box by passing in your own component.
</method>

<method>
<subtitle>

## precall.joinButton : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Join Call button by passing in your own component.
</method>

<method>
<subtitle>

## precall.meetingName : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Meeting Name label by passing in your own component.

</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.chat : [ChatComponent]('a') ChatInterface

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

The Chat component displays the ui to send and view group as well as private chat messages to every user in the meeting

### _Overrides_:

<collapsible>

### ChatComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

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

```json
{
  chatBubble: ChatBubbleComponent // Customize the Bottom Bar by passing in your own component
  chatInput: ChatInputComponent // Customize the Bottom Bar by passing in your own component
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

## videoCall.chat.chatBubble : [ChatBubbleComponent](a)

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

The Chat Bubble component displays the message inside the chat ui. It is conditionally styled based on message origin (ie local or remote).

### _Overrides_:

<method>
<collapsible>

### ChatBubbleComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) [<ChatBubbleProps\>]('a')

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

<br/>
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

</api>

<api>
<intro>

<subtitle>

## create : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Create screen by passing in your own component.
</intro>
</api>

<api>
<intro>

<subtitle>

## share : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Share screen by passing in your own component.
</intro>
</api>

<api>
<intro>
<subtitle>

## join : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

Customize the Join screen by passing in your own component.
</intro>
</api>
