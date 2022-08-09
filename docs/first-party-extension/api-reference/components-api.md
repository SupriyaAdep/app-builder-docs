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

The overrides are applied by supplying values as an object under the top-level `components` key to the Customization API config object.

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

However if `$config.precall` is set to disabled, the videoCall screen is directly displayed after:

- The user clicks on the “Start Meeting” button inside the `Share` screen
- The user clicks on a meeting invite link.

<br/>

</intro>

### _Overrides_:

<collapsible>

### VideoCallComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

You can override the entire VideoCall screen by pasing in a [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `videoCall` key to the `Components Api Object`

To reuse parts of default video call ui you can import them from the [SubComponents Library](/first-party-extension/api-reference/sub-component-library) accessible under the `fpe-api` module.

Use the example code given below showcasing reconstruction of the default video call ui as a guide.

```tsx {13-17}
import React from "react";
import { View, Text } from "react-native";
import { installFPE } from "fpe-api/install";

const MyVideoCallComponent: React.FC = () => {
  return (
    <View>
      <Text>My VideoCall screen</Text>
    </View>
  );
};

const data = installFPE({
  components: {
    videoCall: MyVideoCallComponent,
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

| Key                                                 | Type                                                            | Description                                                                     |
| --------------------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [bottomBar](#videocallbottombar) ?:                 | [BottomBarComponent](#bottombarcomponent)                       | Customize the Bottom Bar by passing in your own component                       |
| [chat](#videocallchat) ?:                           | [ChatInterface](#chatinterface)                                 | Customize the entire chat panel or pass in an object to override a subcomponent |
| [customContent](#videocallcustomcontent) ?:         | [RenderingComponentInterface](#renderingcomponentinterface)     | Customize the settings panel by passing in your own component.                  |
| [customLayouts](#videocallcustomlayouts) ?:         | [CustomLayoutsOverrideFunction](#customlayoutsoverridefunction) | Customize the settings panel by passing in your own component.                  |
| [participantsPanel](#videocallparticipantspanel) ?: | [ParticipantPanelComponent](#participantspanelcomponent)        | Customize the Participants Panel by passing in your own component.              |

<br/>

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

To reuse parts of default bottom bar ui you can import them from the [SubComponents Library](/first-party-extension/api-reference/sub-component-library) accessible under the `fpe-api` module.

Use the example code given below showcasing reconstruction of the default bottom bar ui as a guide.

```tsx {13-19}
import React from "react";
import { View, Text } from "react-native";
import { installFPE } from "fpe-api/install";

const MyBottomBarComponent: React.FC = () => {
  return (
    <View>
      <Text>My bottom bar component</Text>
    </View>
  );
};

const userCustomization = installFPE({
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

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

The Chat component displays the ui to send and view the chat messages.

### _Overrides_:

<collapsible >

### ChatInterface

You can override the specific parts chat ui by pasing in this object with key and values corresponding to the part you want to overrid under the `chat` key to the `VideoCallInterface`

| Method                                         | Description                          |
| ---------------------------------------------- | ------------------------------------ |
| [chat.chatBubble](#videocallchatchatbubble) ?: | Customize the chat Bubble component. |

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

| Prop      | Type                                                                                                                                                                                                          | Description                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| message   | string                                                                                                                                                                                                        | Content of the chat message                                                  |
| isLocal   | boolean                                                                                                                                                                                                       | Specifies if the message is from a local user or if it is from a remote user |
| uid       | [UidType](/first-party-extension/api-reference/globals#uidtype-string)                                                                                                                                        | Name of the user who sent the message                                        |
| timestamp | number                                                                                                                                                                                                        | Timestamp of the message                                                     |
| render?   | ( msg: string, isLocal: boolean, uid: string, ts: number) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Render method for chat bubble to provide a custom jsx                        |

<br/>

Use the code example given below showcasing overriding of the default chat bubble ui as a guide.

```tsx {13-21}
import React from "react";
import { View, Text } from "react-native";
import { installFPE } from "fpe-api/install";

const MyChatBubbleComponent = () => {
  return (
    <View>
      <Text>My chat bubble component</Text>
    </View>
  );
};

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

</collapsible>
</method>

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## videoCall.customContent : RenderingComponentInterface

</subtitle>

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

The constomContent object specifies the react component to be used for rendering each custom content type including user inserted and default types present in the [Render Context](/first-party-extension/api-reference/context-library#userendercontext).

### _Overrides_:

<method>
<collapsible>

### RenderingComponentInterface

You can override the render component for each content type present in the [Render Context](/first-party-extension/api-reference/context-library#userendercontext) by passing in this object with key corresponding to the custom content type you want to override under the `customContent` key to the `VideoCallInterface`.

| Key                   | Type                | Description                                                                                                 |
| --------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| rtc ?:                | React.ComponentType | Specifies the component to be used for rendering the default RTC video feed.                                |
| [customKey:string] ?: | React.ComponentType | Component to be rendered corresponding to `type` property of custom content object added to render context. |

<br/>

Use the example code given below showcasing overriding of the default render component for `rtc` content type as a guide.

```tsx {13-21}
import React from "react";
import { View, Text } from "react-native";
import { installFPE } from "fpe-api/install";

const MyRTCRenderer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "deepskyblue" }}>
      <Text>My RTC component</Text>
    </View>
  );
};

const userCustomization = installFPE({
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

<image alt="Video Call" lightImageSrc="api/bottomBar_light.png" darkImageSrc="api/bottomBar_dark.png" />

Customize the layout through LayoutInterface

### _Overrides_:

<method>
<collapsible>

### customLayoutsOverrideFunction: ( [DefaultLayouts](#defaultlayouts-array-layoutinterface) ) => [LayoutObjectType](#layoutobjecttype)[]

You can override the layouts by providing a function with LayoutInterface[] return type to the `customLayouts` under `VideoCallInterface` object.

This function recieves an array of default layouts and expects you to return an array of LayoutObjects that represent your layouts.

#### DefaultLayouts: Array <[LayoutInterface](#layoutinterface)\>

| Index | Type            | Value                                                                                                                                                                                                                                                                     |
| ----- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0     | LayoutInterface | {<br/>&emsp;name: 'PinnedLayout',<br/>&emsp;icon: [PinnedIcon](/first-party-extension/api-reference/sub-component-library#iconsinterface),<br/>&emsp;component: [PinnedLayoutComponent](/first-party-extension/api-reference/sub-component-library#iconsinterface)<br/> } |
| 1     | LayoutInterface | {<br/>&emsp;name: 'GridLayout',<br/>&emsp;icon: [GridIcon](/first-party-extension/api-reference/sub-component-library#iconsinterface),<br/>&emsp;component: [GridLayoutComponent](/first-party-extension/api-reference/sub-component-library#iconsinterface)<br/> }       |

<br/>

#### LayoutObjectType: [LayoutObjectWithIcon](#layoutobjectwithicon) | [LayoutObjectWithIconName](#layoutobjectwithiconname)

#### LayoutObjectWithIcon

| Key         | Type                                                                                                                                      | Description                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| name :      | string                                                                                                                                    | Name of the layout                                                                    |
| label :     | string                                                                                                                                    | Label of the layout to be displayed in UI                                             |
| icon :      | string                                                                                                                                    | Can be a <br/> 1. Base 64 Image string <br/>2. CDN URL <br/>3. Bunder imported string |
| component : | [LayoutComponent](/first-party-extension/api-reference/components-api#layoutcomponent-reactcomponent-renderstateinterfacerenderposition-) | Layout component to be used to render the video feeds                                 |

<br/>

#### LayoutObjectWithIconName

| Key         | Type                                                                                                                                      | Description                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| name :      | string                                                                                                                                    | Name of the layout                                    |
| label :     | string                                                                                                                                    | Label of the layout to be displayed in UI             |
| iconName :  | keyof [IconsInterface](/first-party-extension/api-reference/sub-component-library#iconsinterface)                                         | Name of the icon to be displayed in UI for the layout |
| component : | [LayoutComponent](/first-party-extension/api-reference/components-api#layoutcomponent-reactcomponent-renderstateinterfacerenderposition-) | Layout component to be used to render the video feeds |

<br/>

#### LayoutComponent: [React.Component](a)<{ [renderStateInterface](/first-party-extension/api-reference/globals#renderinterface)\["renderPosition"\] }>

Use the example code given below showcasing appending a custom layout as a guide.

```tsx {13-27}
import React from "react";
import { View, Text } from "react-native";
import { installFPE } from "fpe-api/install";

const MyLayoutComponent = ({ renderData }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>My layout component</Text>
    </View>
  );
};

const userCustomization = installFPE({
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

```tsx {13-19}
import React from "react";
import { View, Text } from "react-native";
import { installFPE } from "fpe-api/install";

const MyParticipantPanel = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>My participant panel</Text>
    </View>
  );
};

const userCustomization = installFPE({
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

</api>
