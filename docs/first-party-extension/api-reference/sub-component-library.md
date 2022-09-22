---
sidebar_label: Sub-components Library
sidebar_position: 3
description: Sub-components Library
title: Sub-components Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

<api>

The Sub Components library is a set of components to be composed as needed by the user. They can be imported under the `customization-api` module name

---

<method>

<subtitle>

## Icons : IconsInterface

</subtitle>

<br/>

The object containing all the default icons used in the ui.

```jsx
import { icons } from "customization-api";
```

<br/>

#### IconsInterface

| Icon                                                                                                                                                                                                                                                                                                                                                                   | Name                  | Type                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/VideoCam.png" />                                                                                                                                                                                                                                                                                       | videocam              | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/VideoCam-1.png" />                                                                                                                                                                                                                                                                                     | videocamOff           | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Microphone.png" />                                                                                                                                                                                                                                                                                     | mic                   | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Microphone-1.png" />                                                                                                                                                                                                                                                                                   | micOff                | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Record.png" />                                                                                                                                                                                                                                                                                         | recordingIcon         | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Record-1.png" />                                                                                                                                                                                                                                                                                       | recordingActiveIcon   | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Screenshare.png" />                                                                                                                                                                                                                                                                                    | screenshareIcon       | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Screenshare-1.png" />                                                                                                                                                                                                                                                                                  | screenshareOffIcon    | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Raise Hand.png" />                                                                                                                                                                                                                                                                                     | raiseHandIcon         | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/End Call.png" />                                                                                                                                                                                                                                                                                       | endCall               | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Grid View.png" />                                                                                                                                                                                                                                                                                      | gridLayoutIcon        | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Grid View Filled.png" />                                                                                                                                                                                                                                                                               | gridLayoutFilledIcon  | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Pinned Layout Web.png" />                                                                                                                                                                                                                                                                              | pinnedLayoutIcon      | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Standard Base.png" />                                                                                                                                                                                                                                                                                  | participantIcon       | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Standard Base-1.png" />                                                                                                                                                                                                                                                                                | participantFilledIcon | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Chat.png" />                                                                                                                                                                                                                                                                                           | chatIcon              | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Chat-1.png" />                                                                                                                                                                                                                                                                                         | chatIconFilled        | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Settings.png" />                                                                                                                                                                                                                                                                                       | settings              | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Settings-1.png" />                                                                                                                                                                                                                                                                                     | settingFilled         | string                                                                                                                                                                    |
| <image alt="Video camera" className="icon"  darkImageSrc="icons/Copy.png" />                                                                                                                                                                                                                                                                                           | clipboard             | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Check 1.png" />                                                                                                                                                                                                                                                                                        | checkCircleIcon       | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Cross 1.png" />                                                                                                                                                                                                                                                                                        | crossCircleIcon       | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Demote.png" />                                                                                                                                                                                                                                                                                         | demoteIcon            | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Exclamation.png" />                                                                                                                                                                                                                                                                                    | exlamationIcon        | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Back.png" />                                                                                                                                                                                                                                                                                           | backBtn               | string                                                                                                                                                                    |
| <image alt="Video camera"  className="icon" darkImageSrc="icons/Network Base.png" /><br/><image alt="Video camera"  className="icon" darkImageSrc="icons/Network Down.png" /> <br/><image alt="Video camera" className="icon"  darkImageSrc="icons/Network Unknown.png" /><br/><image alt="Video camera" className="icon"  darkImageSrc="icons/Network Loading.png" /> | networkIcons          | {<br/>&emsp;Excellent: string,<br/>&emsp;Unsupported: string,<br/>&emsp;Good: string,<br/>&emsp;Bad: string,<br/>&emsp;VeryBad: string,<br/>&emsp;Loading: string,<br/> } |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## ChatBubble : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatBubbleProps](#chatbubbleprops)\>

</subtitle>

<br/>

<image alt="Video Call"  className="center-img" caption="chat bubble" lightImageSrc="api/ChatBubble.png" darkImageSrc="api/ChatBubble.png" />

The Chat Bubble component displays the message inside the chat ui. It is conditionally styled based on message origin (ie local or remote).

```jsx
import { ChatBubble } from "customization-api";
```

<br/>

#### ChatBubbleProps

| Prop      | Type                                                                                                                                                                                                          | Description                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| message   | string                                                                                                                                                                                                        | Content of the chat message                                                  |
| isLocal   | boolean                                                                                                                                                                                                       | Specifies if the message is from a local user or if it is from a remote user |
| uid       | [UidType](/first-party-extension/api-reference/globals#uidtype)                                                                                                                                               | Name of the user who sent the message                                        |
| timestamp | number                                                                                                                                                                                                        | Timestamp of the message                                                     |
| render?   | ( msg: string, isLocal: boolean, uid: string, ts: number) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Render method for chat bubble to provide a custom jsx                        |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## MaxVideoView : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[MaxVideoRendererInterface](#maxvideorendererinterface)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/MaxVideoView.png" darkImageSrc="api/MaxVideoView.png" />

The MaxVideoView component is used to render the user video feed along with overlay components like [NameWithMicStatus](#namewithmicstatus), [NetworkQualityPill](#networkqualitypill) etc.

```jsx
import { MaxVideoView } from "customization-api";
```

<br/>

#### MaxVideoRendererInterface

| Prop   | Type                                                                            | Description                                            |
| ------ | ------------------------------------------------------------------------------- | ------------------------------------------------------ |
| user : | [RenderInterface](/first-party-extension/api-reference/globals#renderinterface) | The user object you need to display the video feed off |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## GridLayout : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RenderStateInterface](#renderstateinterface)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/GridLayout.png" darkImageSrc="api/GridLayout.png" />

The GridLayout component is used to render the user video feeds in a responsive grid parttern.

```jsx
import { GridLayout } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## PinnedLayout : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RenderStateInterface](#renderstateinterface)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/PinnedLayout.png" darkImageSrc="api/PinnedLayout.png" />

The PinnedLayout component is used to render the user video feeds in a pinned view with a collapsible sidebar displaying unpinned user feeds.

```jsx
import { PinnedLayout } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## VideoComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/VideoComponent.png" darkImageSrc="api/VideoComponent.png" />

The VideoComponent is used to automatically render the user video feeds in the selected layout.

```jsx
import { VideoComponent } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## NameWithMicStatus : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[NameWithMicStatusInteface](#namewithmicstatusinteface)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/NameLabel.png" darkImageSrc="api/NameLabel.png" />

The NameWithMicStatus component is used to render the user name along with their mic muted state.

```jsx
import { NameWithMicStatus } from "customization-api";
```

<br/>

#### NameWithMicStatusInteface

| Prop   | Type                                                                            | Description                                                    |
| ------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| user : | [RenderInterface](/first-party-extension/api-reference/globals#renderinterface) | The user object you need to display the name and mic status of |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

NetworkQualityPill : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[NetworkQualityPillInteface](#networkqualitypillinteface)\>

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/NetworkQuality.png" darkImageSrc="api/NetworkQuality.png" />

The NetworkQualityPill component is used to render the user network quality in a pill container that expands when hovered over.

```jsx
import { NetworkQualityPill } from "customization-api";
```

<br/>

#### NetworkQualityPillInteface

| Prop   | Type                                                                            | Description                                                |
| ------ | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| user : | [RenderInterface](/first-party-extension/api-reference/globals#renderinterface) | The user object you need to display the network quality of |

</method>

<method>

<subtitle>

## VideoCallScreen : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The VideoCallScreen component is used to render the entire video call screen.

```jsx
import { VideoCallScreen } from "customization-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## ParticipantsView : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" className="center-img" caption="participant panel" lightImageSrc="api/Participants Panel.png" darkImageSrc="api/Participant Panel.png" />

The ParticipantsView component is used to render the participant panel that lists all the users in the video call / livestream along with their audio and video status. Hosts additionally are able to see user controls such as `mute participant` , `remove participant from call`.

```jsx
import { ParticipantsView } from "customization-api";
```

</method>

<method>

<subtitle>

## Controls : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/Bottombar.png" darkImageSrc="api/Bottombar.png" />

The Controls component is used to render all the meeting controls.

```jsx
import { MaxVideoView } from "customization-api";
```

:::note
The controls displayed change depending on the operating sytem/platform and the user config
:::

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## ControlsComponentArray : [React.ComponentType\[\]](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

The SidePanelButtonsArray is an array of all meeting control button subcomponents listed below.

| Index | Name               | Type                                                    | Description                                                 |
| ----- | ------------------ | ------------------------------------------------------- | ----------------------------------------------------------- |
| 0     | LocalAudioMute     | [LocalAudioMuteComponent](#localaudiomuteprops)         | Control button to mute/unmute local user audio              |
| 1     | LocalVideoMute     | [LocalVideoMuteComponent](#localvideomuteprops)         | Control button to mute/unmute local user video              |
| 2     | LocalSwitchCamera  | [LocalSwitchCameraComponent](#localswitchcameraprops)   | Control button to switch local user video camera            |
| 3     | ScreenshareButton  | [ScreenshareButtonComponent](#screensharebuttonprops)   | Control button to start/stop screenshare                    |
| 4     | Recording          | [RecordingComponent](#recordingprops)                   | Control button to start/stop meeting recording              |
| 5     | LocalEndCall       | [LocalEndCallComponent](#localendcallprops)             | Control button to end local user call                       |
| 6     | LiveStreamControls | [LiveStreamControlsComponent](#livestreamcontrolsprops) | Control button to send/recall local user raise hand request |

```jsx
import { ControlsComponentArray } from "customization-api";
```

<br/>

### _Control Components_:

<collapsible>

### LocalAudioMuteComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalAudioMuteProps](#localaudiomuteprops)>

#### LocalAudioMuteProps

| Key                | Type                                                                                                                                                                                                            | Description                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                                                                                                                         | Type of button template to be used for the button |
| render?            | [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalAudioMuteRenderProps](#localaudiomuterenderprops)> | Component to be used to render the button         |

<br/>

#### LocalAudioMuteRenderProps

| Parameter           | Type               | Description                                       |
| ------------------- | ------------------ | ------------------------------------------------- |
| onPress             | () => void         | Function called when button is pressed            |
| isEnabled?          | boolean            | Display state of the button                       |
| buttonTemplateName? | buttonTemplateName | Type of button template to be used for the button |

</collapsible>

<br/>

<collapsible>

### LocalVideoMuteComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalVideoMuteProps](#localvideomuteprops)>

#### LocalVideoMuteProps

| Key                | Type                                                                                                                                                                                                                                             | Description                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LocalSwitchCameraComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalSwitchCameraProps](#localswitchcameraprops)>

#### LocalSwitchCameraProps

| Key                | Type                                                                                                                                                                                                                                             | Description                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### ScreenshareButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ScreenshareButtonProps](#screensharebuttonprops)>

#### ScreenshareButtonProps

| Key                | Type                                                                                                                                                                                                                                             | Description                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### RecordingComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RecordingProps](#recordingprops)>

#### RecordingProps

| Key                | Type                                                                                                                                                                                                                                             | Description                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                                                                                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LocalEndCallComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LocalEndCallProps](a)>

#### LocalEndCallProps

| Key                | Type                                                                                                                                                                                                                      | Description                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                                                                                                                                   | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LiveStreamControlsComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[LiveStreamControlsProps](#livestreamcontrolsprops)>

#### LiveStreamControlsProps

| Key          | Type    | Description                                   |
| ------------ | ------- | --------------------------------------------- |
| showControls | boolean | Determines if livestream controls are renders |

</collapsible>

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## SidePanelButtonsArray : [React.ComponentType[]](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

The SidePanelButtonsArray is an array of all the side panel button subcomponents listed below.

| Index | Name                                  | Type                                                                                          | Description                                              |
| ----- | ------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 0     | RemoteAudioMute                       | [RemoteAudioMuteComponent](#remoteaudiomuteprops)                                             | Side panel button to mute remote user audio              |
| 1     | RemoteVideoMute                       | [RemoteVideoMuteComponent](#remotevideomuteprops)                                             | Side panel button to mute remote user video              |
| 2     | RemoteEndCall                         | [RemoteEndCallComponent](#remoteendcallprops)                                                 | Side panel button to remote remote user from call        |
| 3     | RemoteLiveStreamApprovedRequestRecall | [RemoteLiveStreamApprovedRequestRecallComponent](#remotelivestreamapprovedrequestrecallprops) | Side panel button to recall attendee raise hand request  |
| 4     | RemoteLiveStreamControlApprove        | [RemoteLiveStreamControlApproveComponent](#remotelivestreamcontrolapproveprops)               | Side panel button to approve attendee raise hand request |
| 4     | RemoteLiveStreamControlReject         | [RemoteLiveStreamControlRejectComponent](#remotelivestreamcontrolrejectprops)                 | Side panel button to reject attendee raise hand request  |
| 5     | ChatSendButton                        | [ChatSendButtonComponent](#chatsendbuttonprops)                                               | Side panel button send chat message                      |
| 6     | MuteAllAudioButton                    | [MuteAllAudioButtonComponent](#muteallaudiobuttonprops)                                       | Side panel button to mute all remote users audio         |
| 6     | MuteAllVideoButton                    | [MuteAllVideoButtonComponent](#muteallvideobuttonprops)                                       | Side panel button to mute all remote users video         |

```jsx
import { SidePanelButtonsArray } from "customization-api";
```

<br/>

### _SidePanel Control Components_:

<collapsible>

### RemoteAudioMuteComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteAudioMuteProps](#remoteaudiomuteprops)>

#### RemoteAudioMuteProps

| Key    | Type                                                            | Description                               |
| ------ | --------------------------------------------------------------- | ----------------------------------------- |
| uid    | [UidType](/first-party-extension/api-reference/globals#uidtype) | uid of the user to perform the action for |
| audio  | boolean                                                         | audio mute state of the remote user       |
| isHost | boolean                                                         | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteVideoMuteComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteVideoMuteProps](#remotevideomuteprops)>

#### RemoteVideoMuteProps

| Key    | Type                                                            | Description                               |
| ------ | --------------------------------------------------------------- | ----------------------------------------- |
| uid    | [UidType](/first-party-extension/api-reference/globals#uidtype) | uid of the user to perform the action for |
| video  | boolean                                                         | video mute state of the remote user       |
| isHost | boolean                                                         | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteEndCallComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteEndCallProps](#remoteendcallprops)>

#### RemoteEndCallProps

| Key    | Type                                                            | Description                               |
| ------ | --------------------------------------------------------------- | ----------------------------------------- |
| uid    | [UidType](/first-party-extension/api-reference/globals#uidtype) | uid of the user to perform the action for |
| isHost | boolean                                                         | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamApprovedRequestRecallComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteLiveStreamApprovedRequestRecallProps](#remotelivestreamapprovedrequestrecallprops)>

#### RemoteLiveStreamApprovedRequestRecallProps

| Key | Type                                                            | Description                               |
| --- | --------------------------------------------------------------- | ----------------------------------------- |
| uid | [UidType](/first-party-extension/api-reference/globals#uidtype) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamControlApproveComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteLiveStreamControlApproveProps](#remotelivestreamcontrolapproveprops)>

#### RemoteLiveStreamControlApproveProps

| Key | Type                                                            | Description                               |
| --- | --------------------------------------------------------------- | ----------------------------------------- |
| uid | [UidType](/first-party-extension/api-reference/globals#uidtype) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamControlRejectComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[RemoteLiveStreamControlRejectProps](#remotelivestreamcontrolrejectprops)>

#### RemoteLiveStreamControlRejectProps

| Key | Type                                                            | Description                               |
| --- | --------------------------------------------------------------- | ----------------------------------------- |
| uid | [UidType](/first-party-extension/api-reference/globals#uidtype) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### ChatSendButtonComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatSendButtonProps](#chatsendbuttonprops)>

#### ChatSendButtonProps

| Key    | Type                                                                                                                                                                      | Description                              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button |

</collapsible>

<br/>

<collapsible>

### MuteAllAudioButtonComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[MuteAllAudioButtonProps](#muteallaudiobuttonprops)>

#### MuteAllAudioButtonProps

| Key    | Type                                                                                                                                                                      | Description                              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button |

</collapsible>

<br/>

<collapsible>

### MuteAllVideoButtonComponent: [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[MuteAllVideoButtonProps](#muteallvideobuttonprops)>

#### MuteAllVideoButtonProps

| Key    | Type                                                                                                                                                                      | Description                              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L3073) | Function to be used to render the button |

</collapsible>

<br/>

</method>

</api>
