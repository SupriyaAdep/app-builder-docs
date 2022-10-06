---
sidebar_label: Components API
sidebar_position: 1
description: Components API is a very powreful way to override
title: Components API
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

<!-- <image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" /> -->

Provides API for granular overriding of various aspects of the App Builder user interface ranging from entire screens such as the “VideoCall” screen to specific components within these screens such as the “BottomBar” component.

The overrides are applied by supplying values as an object under the top-level `components` key to the Customization API config object.

---

<api>

<intro>
<subtitle>

## videoCall : VideoCallComponent : VideoCallInterface

</subtitle>

<image alt="Video Call" caption="video screen" darkImageSrc="customization-api/api/components-api/videocall.svg" />

The VideoCall screen displays the active video call / livestream UI. This UI is shown when a user has joined a meeting.

Hence it is displayed after:

- The user clicks on `JoinButton` inside the `Precall` screen.

However if Precall Screen is disabled in the Builder,

<image alt="Precall Screen Builder Option" caption="Precall toggle"  darkImageSrc="customization-api/api/components-api/precall.svg" />

the videoCall screen is directly displayed after:

- The user clicks on the “Start Meeting” button inside the `Share` screen
- The user clicks on a meeting invite link.

:::tip
To make the customizations powerful, you can use the libraries to access the internal app state, send custom events, or re-use prebuilt subcomponents
:::

<br/>

</intro>

### _Overrides_:

<collapsible>

### VideoCallComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the entire VideoCall screen by pasing in a [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `videoCall` key to the `Components Api Object`

Use the example code given below showcasing reconstruction of the default video call ui as a guide.

```tsx {13-17}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyVideoCallComponent: React.FC = () => {
  return (
    <View>
      <Text>My VideoCall screen</Text>
    </View>
  );
};

const data = customize({
  components: {
    videoCall: MyVideoCallComponent,
  },
});

export default data;
```

Result:

<imageSlider alt="videocall component override" darkImageSrc1="api/GridLayout.png" darkImageSrc2="api/PinnedLayout.png" />

</collapsible>

<br/>

<method>
<collapsible>

### VideoCallInterface

You can override specific parts of the VideoCall screen by pasing in this object with key and values corresponding to the part you want to override under the `videoCall` key to the `Components Api Object`

| Key                                                 | Type                                                            | Description                                                                     |
| --------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [bottomBar](#videocallbottombar) ?:                 | [BottomBarComponent](#bottombarcomponent)                       | Customize the Bottom Bar by passing in your own component                       |
| [chat](#videocallchat) ?:                           | [ChatInterface](#chatinterface)                                 | Customize the entire chat panel or pass in an object to override a subcomponent |
| [customContent](#videocallcustomcontent) ?:         | [RenderingComponentInterface](#renderingcomponentinterface)     | Add custom content to the layouts by passing in your own Render object          |
| [customLayouts](#videocallcustomlayouts) ?:         | [CustomLayoutsOverrideFunction](#customlayoutsoverridefunction) | Customize the available layouts or pass in your own layout.                     |
| [participantsPanel](#videocallparticipantspanel) ?: | [ParticipantPanelComponent](#participantspanelcomponent)        | Customize the Participants Panel by passing in your own component.              |

<br/>

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.bottomBar : BottomBarComponent

</subtitle>

<image alt="Bottom bar"  caption="bottom bar" darkImageSrc="customization-api/api/components-api/bottombar2.svg" />

The BottomBarComponent occupies the bottom part of the VideoCall screen and displays all the meeting controls.

:::note
The controls displayed change depending on the operating sytem/platform and the user config
:::

### _Overrides_:

<collapsible>

### BottomBarComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the BottomBar component by passing in a [React Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `bottomBar` key to the `VideoCallInterface Object`

To reuse parts of default bottom bar ui you can import them from the [SubComponents Library](/customization-api/api-reference/sub-component-library) accessible under the `customization-api` module.

Use the example code given below showcasing reconstruction of the default bottom bar ui as a guide.

```tsx {13-19}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyBottomBarComponent: React.FC = () => {
  return (
    <View>
      <Text>My bottom bar component</Text>
    </View>
  );
};

const userCustomization = customize({
  components: {
    videoCall: {
      bottomBar: MyBottomBarComponent,
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

## videoCall.topBar : TopBarComponent

</subtitle>

<image caption="Top Bar" darkImageSrc="customization-api/api/components-api/topbar.svg" />

The TopBarComponent occupies the bottom part of the VideoCall screen and displays all the meeting controls.

:::note
The controls displayed change depending on the operating sytem/platform and the user config
:::

### _Overrides_:

<collapsible>

### TopBarComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the TopBar component by passing in a [React Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `topBar` key to the `VideoCallInterface Object`

To reuse parts of default top bar ui you can import them from the [SubComponents Library](/customization-api/api-reference/sub-component-library) accessible under the `customization-api` module.

Use the example code given below showcasing reconstruction of the default top bar ui as a guide.

```tsx {13-19}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyBottomBarComponent: React.FC = () => {
  return (
    <View>
      <Text>My bottom bar component</Text>
    </View>
  );
};

const userCustomization = customize({
  components: {
    videoCall: {
      bottomBar: MyBottomBarComponent,
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

## videoCall.chat : ChatInterface

</subtitle>

<image alt="Chat"  darkImageSrc="customization-api/api/components-api/chat.svg" caption="chat"/>

The Chat component displays the ui to send and view the chat messages.

### _Overrides_:

<collapsible >

### ChatInterface

You can override the specific parts chat ui by pasing in this object with key and values corresponding to the part you want to overrid under the `chat` key to the `VideoCallInterface`

| Method                                             | Description                               |
| -------------------------------------------------- | ----------------------------------------- |
| [chat.chatBubble](#videocallchatchatbubble) ?:     | Customize the chat Bubble component.      |
| [chat.chatTextInput](#videocallchatchatbubble) ?:  | Customize the chat input component.       |
| [chat.chatSendButton](#videocallchatchatbubble) ?: | Customize the chat send button component. |

</collapsible>

</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.chat.chatTextInput: ChatTextInputComponent

</subtitle>
<image alt="Chat Text Input" className="center-img" caption="Chat Text Input" darkImageSrc="customization-api/api/components-api/chatTextInput.svg" />

The ChatTextInput component displays the input box used to enter message text inside the chat ui.

### _Overrides_ :

<method>
<collapsible>

### ChatTextInputComponent: [React.ComponentType<ChatTextInputProps\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the ChatTextInput component component by passing in a [React Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `chatTextInput` key to the `ChatInterface Object`

#### ChatTextInputProps

| Prop    | Type                                                                   | Description                     |
| ------- | ---------------------------------------------------------------------- | ------------------------------- |
| render? | ([ChatTextInputRenderProps](#chattextinputrenderprops)) => JSX.Element | Render method for ChatTextInput |

<br/>

#### ChatTextInputRenderProps

| Prop                        | Type                      |
| --------------------------- | ------------------------- |
| message                     | string                    |
| onChangeText                | ( text: string ) => void, |
| onSubmitEditing             | () => void,               |
| chatMessageInputPlaceholder | string                    |

<br/>

Use the code example given below showcasing overriding of the default chat bubble ui as a guide.

```tsx {13-21}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyChatTextInputRender = () => {
  return (
    <View>
      <Text>My chat text input component</Text>
    </View>
  );
};

const userCustomization = customize({
  components: {
    videoCall: {
      chat: {
        chatTextInput: MyChatTextInputRender,
      },
    },
  },
});

export default userCustomization;
```

</collapsible>
</method>

</method>

<method>
<subtitle>

## videoCall.chat.chatSendButton: ChatSendButtonComponent

</subtitle>

<image alt="Chat Send Button" className="center-img" caption="Chat Send Button" darkImageSrc="customization-api/api/components-api/chatSendButton.svg" />

The ChatSendButton component displays the send button used to send messages inside the chat ui.

### _Overrides_ :

<method>
<collapsible>

### ChatSendButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatSendButtonProps](#chatsendbuttonprops)\>

You can override the ChatSendButton component by passing in a [React Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `chatSendButton` key to the `ChatInterface Object`

#### ChatSendButtonProps

| Prop    | Type                                   | Description                     |
| ------- | -------------------------------------- | ------------------------------- |
| render? | ( onPress: () => void ) => JSX.Element | Render method for ChatTextInput |

<br/>

Use the code example given below showcasing overriding of the default chat bubble ui as a guide.

```tsx {13-21}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyChatSendButtonComponent = () => {
  return (
    <View>
      <Text>My chat send button component</Text>
    </View>
  );
};

const userCustomization = customize({
  components: {
    videoCall: {
      chat: {
        chatSendButton: MyChatSendButtonComponent,
      },
    },
  },
});

export default userCustomization;
```

</collapsible>
</method>

</method>

<method>
<subtitle>

## videoCall.chat.chatBubble : ChatBubbleComponent

</subtitle>

<image alt="Chat Bubble" className="center-img" caption="Chat Bubble" darkImageSrc="customization-api/api/components-api/chatbubble2.svg" />

The Chat Bubble component displays the message inside the chat ui. It is conditionally styled based on message origin (ie local or remote).

### _Overrides_ :

<method>
<collapsible>

### ChatBubbleComponent: [React.ComponentType<ChatBubbleProps\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the ChatBubble component by passing in a [React Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `chatBubble` key to the `ChatInterface Object`

#### ChatBubbleProps

| Prop      | Type                                                                                                                                                                                                          | Description                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| message   | string                                                                                                                                                                                                        | Content of the chat message                                                  |
| isLocal   | boolean                                                                                                                                                                                                       | Specifies if the message is from a local user or if it is from a remote user |
| uid       | [UidType](/customization-api/api-reference/types#uidtype)                                                                                                                                                     | Name of the user who sent the message                                        |
| timestamp | number                                                                                                                                                                                                        | Timestamp of the message                                                     |
| render?   | ( msg: string, isLocal: boolean, uid: string, ts: number) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Render method for chat bubble to provide a custom jsx                        |

<br/>

Use the code example given below showcasing overriding of the default chat bubble ui as a guide.

```tsx {13-21}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyChatBubbleComponent = () => {
  return (
    <View>
      <Text>My chat bubble component</Text>
    </View>
  );
};

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

</collapsible>
</method>

</method>

<!-- ***************************************************************************************************************** -->

<method>
<subtitle>

## videoCall.participantsPanel : ParticipantsPanelComponent

</subtitle>

<image alt="Participant Panel" caption="Participant Panel" darkImageSrc="customization-api/api/components-api/participantpanel.svg" />

The participantsPanel component lists all the users in the video call / livestream along with their audio and video status. Hosts additionally are able to see user controls such as `mute participant` , `remove participant from call`.

<br/>

### _Overrides_:

<collapsible>

### ParticipantsPanelComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the entire participantsPanel component by pasing in a [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `participanPanel` key to the `VideocallInterface Object`

You can import parts of default participantsPanel ui from the [SubComponents Library](/customization-api/api-reference/sub-component-library) accessible under the `customization-api` module to reuse them in your component.

Use the example code given below showcasing reconstruction of the default participantsPanel ui as a guide.

```tsx {13-19}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyParticipantPanel = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>My participant panel</Text>
    </View>
  );
};

const userCustomization = customize({
  components: {
    videoCall: {
      participantsPanel: MyParticipantPanel,
    },
  },
});

export default userCustomization;
```

</collapsible>

<br/>

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## videoCall.customContent : RenderingComponentInterface

</subtitle>

<!-- <image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" /> -->

The constomContent object specifies the react component to be used for rendering each custom content type including user inserted and default types present in the [Render Context](/customization-api/api-reference/app-state-library#userendercontext).

### _Overrides_:

<method>
<collapsible>

### RenderingComponentInterface

You can override the render component for each content type present in the [Render Context](/customization-api/api-reference/app-state-library#userendercontext) by passing in this object with key corresponding to the custom content type you want to override under the `customContent` key to the `VideoCallInterface`.

| Key                   | Type                | Description                                                                                                 |
| --------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| rtc ?:                | React.ComponentType | Specifies the component to be used for rendering the default RTC video feed.                                |
| [customKey:string] ?: | React.ComponentType | Component to be rendered corresponding to `type` property of custom content object added to render context. |

<br/>

Use the example code given below showcasing overriding of the default render component for `rtc` content type as a guide.

```tsx {13-21}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyRTCRenderer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "deepskyblue" }}>
      <Text>My RTC component</Text>
    </View>
  );
};

const userCustomization = customize({
  components: {
    videoCall: {
      customContent: {
        rtc: MyRTCRenderer,
      },
    },
  },
});

export default userCustomization;
```

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->
<subtitle>

## videoCall.customLayout : customLayoutsOverrideFunction

</subtitle>

<!-- <image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" /> -->

Customize the layout through LayoutInterface

### _Overrides_:

<method>
<collapsible>

### customLayoutsOverrideFunction: ( [DefaultLayouts](#defaultlayouts-array-layoutinterface) ) => [LayoutObjectType](#layoutobjecttype)[]

You can override the layouts by providing a function with LayoutInterface[] return type to the `customLayouts` under `VideoCallInterface` object.

This function recieves an array of default layouts and expects you to return an array of LayoutObjects that represent your layouts.

#### DefaultLayouts: Array <[LayoutInterface](#layoutinterface)\>

| Index | Type            | Value                                                                                                                                                                                                                                                       |
| ----- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | LayoutInterface | {<br/>&emsp;name: 'pinned',<br/>&emsp;icon: [PinnedIcon](/customization-api/api-reference/sub-component-library#iconsinterface),<br/>&emsp;component: [PinnedLayoutComponent](/customization-api/api-reference/sub-component-library#iconsinterface)<br/> } |
| 1     | LayoutInterface | {<br/>&emsp;name: 'grid',<br/>&emsp;icon: [GridIcon](/customization-api/api-reference/sub-component-library#iconsinterface),<br/>&emsp;component: [GridLayoutComponent](/customization-api/api-reference/sub-component-library#iconsinterface)<br/> }       |

<br/>

#### LayoutObjectType: [LayoutObjectWithIcon](#layoutobjectwithicon) | [LayoutObjectWithIconName](#layoutobjectwithiconname)

#### LayoutObjectWithIcon

| Key         | Type                                                                                                                                  | Description                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| name :      | string                                                                                                                                | Name of the layout                                                                    |
| label :     | string                                                                                                                                | Label of the layout to be displayed in UI                                             |
| icon :      | string                                                                                                                                | Can be a <br/> 1. Base 64 Image string <br/>2. CDN URL <br/>3. Bunder imported string |
| component : | [LayoutComponent](/customization-api/api-reference/components-api#layoutcomponent-reactcomponent-renderstateinterfacerenderposition-) | Layout component to be used to render the video feeds                                 |

<br/>

#### LayoutObjectWithIconName

| Key         | Type                                                                                                                                  | Description                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| name :      | string                                                                                                                                | Name of the layout                                    |
| label :     | string                                                                                                                                | Label of the layout to be displayed in UI             |
| iconName :  | keyof [IconsInterface](/customization-api/api-reference/sub-component-library#iconsinterface)                                         | Name of the icon to be displayed in UI for the layout |
| component : | [LayoutComponent](/customization-api/api-reference/components-api#layoutcomponent-reactcomponent-renderstateinterfacerenderposition-) | Layout component to be used to render the video feeds |

<br/>

#### LayoutComponent: [React.Component](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<{ [renderStateInterface](/customization-api/api-reference/types#renderinterface)\["renderPosition"\] }>

Use the example code given below showcasing appending a custom layout as a guide.

```tsx {13-27}
import React from "react";
import { View, Text } from "react-native";
import { customize } from "customization-api";

const MyLayoutComponent = ({ renderData }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>My layout component</Text>
    </View>
  );
};

const userCustomization = customize({
  components: {
    videoCall: {
      customLayout: (DefaultLayouts) => [
        ...DefaultLayouts,
        {
          label: "My Layout",
          name: "myLayout",
          iconName: "videocam",
          component: MyLayoutComponent,
        },
      ],
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

## videoCall.useUserContext

</subtitle>
</method>

</api>
