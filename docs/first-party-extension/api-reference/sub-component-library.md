---
sidebar_label: Sub Components Library
sidebar_position: 3
description: Sub Components Library
title: Sub Components Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

<api>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The Sub Components library is a set of components to be composed as needed by the user. They can be imported under the `fpe-api` module name

---

<method>

<subtitle>

## Icons : IconsInterface

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The object containing all the default icons used in the ui.

```jsx
import { icons } from "fpe-api";
```

<br/>

#### IconsInterface

| Name                  | Type                                                                                                                                                                      | Icon                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| videocam              | string                                                                                                                                                                    | <image alt="Video camera" lightImageSrc="icons/icons8-video-camera-24.png" darkImageSrc="icons/icons8-video-camera-24.png" /> |
| videocamOff           | string                                                                                                                                                                    |
| mic                   | string                                                                                                                                                                    |
| micOff                | string                                                                                                                                                                    |
| recordingIcon         | string                                                                                                                                                                    |
| recordingActiveIcon   | string                                                                                                                                                                    |
| screenshareIcon       | string                                                                                                                                                                    |
| screenshareOffIcon    | string                                                                                                                                                                    |
| raiseHandIcon         | string                                                                                                                                                                    |
| endCall               | string                                                                                                                                                                    |
| gridLayoutIcon        | string                                                                                                                                                                    |
| gridLayoutFilledIcon  | string                                                                                                                                                                    |
| pinnedLayoutIcon      | string                                                                                                                                                                    |
| participantIcon       | string                                                                                                                                                                    |
| participantFilledIcon | string                                                                                                                                                                    |
| chatIcon              | string                                                                                                                                                                    |
| chatIconFilled        | string                                                                                                                                                                    |
| settings              | string                                                                                                                                                                    |
| settingFilled         | string                                                                                                                                                                    |
| clipboard             | string                                                                                                                                                                    |
| checkCircleIcon       | string                                                                                                                                                                    |
| crossCircleIcon       | string                                                                                                                                                                    |
| demoteIcon            | string                                                                                                                                                                    |
| exlamationIcon        | string                                                                                                                                                                    |
| networkIcons          | {<br/>&emsp;Excellent: string,<br/>&emsp;Unsupported: string,<br/>&emsp;Good: string,<br/>&emsp;Bad: string,<br/>&emsp;VeryBad: string,<br/>&emsp;Loading: string,<br/> } |
| backBtn               | string                                                                                                                                                                    |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## MaxVideoView : [React.ComponentType<MaxVideoRendererInterface\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render user video feed. Also includes the following overlays components [NetworkQualityPill](a), [NameLabel](a) etc.

```jsx
import { MaxVideoView } from "fpe-api";
```

<br/>

#### MaxVideoRendererInterface

| Prop   | Type                 | Description                                            |
| ------ | -------------------- | ------------------------------------------------------ |
| user : | [RenderInterface](a) | The user object you need to display the video feed off |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## GridLayout : [React.ComponentType<RenderStateInterface\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render user video feeds in a responsive grid parttern.

```jsx
import { GridLayout } from "fpe-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## PinnedLayout : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)[<RenderStateInterface\>](a)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render user video feeds in a pinned view with a collapsible sidebar displaying unpinned user feeds.

```jsx
import { PinnedLayout } from "fpe-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## VideoComponent : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render the selected layout.

```jsx
import { VideoComponent } from "fpe-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## NameWithMicStatus : [React.ComponentType<NameWithMicStatusInteface\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render user name along with their mic muted state.

```jsx
import { NameWithMicStatus } from "fpe-api";
```

<br/>

#### NameWithMicStatusInteface

| Prop   | Type                 | Description                                                    |
| ------ | -------------------- | -------------------------------------------------------------- |
| user : | [RenderInterface](a) | The user object you need to display the name and mic status of |

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

NetworkQualityPill : [React.ComponentType<NetworkQualityPillInteface\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render user network quality.

```jsx
import { NetworkQualityPill } from "fpe-api";
```

<br/>

#### NetworkQualityPillInteface

| Prop   | Type                 | Description                                                |
| ------ | -------------------- | ---------------------------------------------------------- |
| user : | [RenderInterface](a) | The user object you need to display the network quality of |

</method>

<method>

<subtitle>

## VideoCallScreen : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render the entire video call screen.

```jsx
import { VideoCallScreen } from "fpe-api";
```

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## ParticipantsView : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render the participant panel that Lists all the users in the video call / livestream along with their audio and video status. Hosts additionally are able to see user controls such as `mute participant` , `remove participant from call`.

```jsx
import { ParticipantsView } from "fpe-api";
```

</method>

<method>

<subtitle>

## Controls : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render all the meeting controls.

```jsx
import { MaxVideoView } from "fpe-api";
```

:::note
The controls displayed change depending on the operating sytem/platform and the user config
:::

</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## ControlsComponentArray : [React.ComponentType<ControlsComponentArray\>](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The array of all meeting control button subcomponents listed below.

```jsx
import { ControlsComponentArray } from "fpe-api";
```

<br/>

#### ControlsComponentArray

| Index | Name               | Type                             | Description                                                 |
| ----- | ------------------ | -------------------------------- | ----------------------------------------------------------- |
| 0     | LocalAudioMute     | [LocalAudioMuteComponent](a)     | Control button to mute/unmute local user audio              |
| 1     | LocalVideoMute     | [LocalVideoMuteComponent](a)     | Control button to mute/unmute local user video              |
| 2     | LocalSwitchCamera  | [LocalSwitchCameraComponent](a)  | Control button to switch local user video camera            |
| 3     | ScreenshareButton  | [ScreenshareButtonComponent](a)  | Control button to start/stop screenshare                    |
| 4     | Recording          | [LocalAudioMuteComponent](a)     | Control button to start/stop meeting recording              |
| 5     | LocalEndCall       | [LocalEndCallComponent](a)       | Control button to end local user call                       |
| 6     | LiveStreamControls | [LiveStreamControlsComponent](a) | Control button to send/recall local user raise hand request |

<br/>

### _Control Components_:

<collapsible>

### LocalAudioMuteComponent: [React.ComponentType](a)<[LocalAudioMuteProps](a)>

LocalAudioMuteProps

| Key                | Type                                                     | Description                                       |
| ------------------ | -------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                  | Type of button template to be used for the button |
| render?            | [React.ComponentType](a)<[LocalAudioMuteRenderProps](a)> | Component to be used to render the button         |

<br/>

LocalAudioMuteRenderProps

| Parameter           | Type               | Description                                       |
| ------------------- | ------------------ | ------------------------------------------------- |
| onPress             | () => void         | Function called when button is pressed            |
| isEnabled?          | boolean            | Display state of the button                       |
| buttonTemplateName? | buttonTemplateName | Type of button template to be used for the button |

</collapsible>

<br/>

<collapsible>

### LocalVideoMuteComponent: [React.ComponentType](a)<[LocalVideoMuteProps](a)>

| Key                | Type                                                                                                             | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](a) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LocalSwitchCameraComponent: [React.ComponentType](a)<[LocalSwitchCameraProps](a)>

LocalSwitchCameraProps

| Key                | Type                                                                                                             | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](a) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### ScreenshareButtonComponent: [React.ComponentType](a)<[ScreenshareButtonProps](a)>

ScreenshareButtonProps

| Key                | Type                                                                                                             | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](a) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### RecordingComponent: [React.ComponentType](a)<[RecordingProps](a)>

RecordingProps

| Key                | Type                                                                                                             | Description                                       |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                                          | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , isEnabled: `boolean` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](a) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LocalEndCallComponent: [React.ComponentType](a)<[LocalEndCallProps](a)>

LocalEndCallProps

| Key                | Type                                                                                      | Description                                       |
| ------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| buttonTemplateName | [buttonTemplateName](a)                                                                   | Type of button template to be used for the button |
| render?            | ( onPress: `()=>void` , buttonTemplateName: [buttonTemplateName](a) ) => [JSX.Element](a) | Function to be used to render the button          |

</collapsible>

<br/>

<collapsible>

### LiveStreamControlsComponent : [React.ComponentType](a)<[LiveStreamControlsProps](a)>

LiveStreamControlsProps

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

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The array of all the side panel button subcomponents listed below.

```jsx
import { ControlsComponentArray } from "fpe-api";
```

<br/>

#### SidePanelButtonsArray

| Index | Name                                  | Type                                                | Description                                              |
| ----- | ------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| 0     | RemoteAudioMute                       | [RemoteAudioMuteComponent](a)                       | Side panel button to mute remote user audio              |
| 1     | RemoteVideoMute                       | [RemoteVideoMuteComponent](a)                       | Side panel button to mute remote user video              |
| 2     | RemoteEndCall                         | [RemoteEndCallComponent](a)                         | Side panel button to remote remote user from call        |
| 3     | RemoteLiveStreamApprovedRequestRecall | [RemoteLiveStreamApprovedRequestRecallComponent](a) | Side panel button to recall attendee raise hand request  |
| 4     | RemoteLiveStreamControlApprove        | [RemoteLiveStreamControlApproveComponent](a)        | Side panel button to approve attendee raise hand request |
| 4     | RemoteLiveStreamControlReject         | [RemoteLiveStreamControlRejectComponent](a)         | Side panel button to reject attendee raise hand request  |
| 5     | ChatSendButton                        | [ChatSendButtonComponent](a)                        | Side panel button send chat message                      |
| 6     | MuteAllAudioButton                    | [MuteAllAudioButtonComponent](a)                    | Side panel button to mute all remote users audio         |
| 6     | MuteAllVideoButton                    | [MuteAllVideoButtonComponent](a)                    | Side panel button to mute all remote users video         |

<br/>

### _Control Components_:

<collapsible>

### RemoteAudioMuteComponent : [React.ComponentType](a)<[RemoteAudioMuteProps](a)>

RemoteAudioMuteProps

| Key    | Type         | Description                               |
| ------ | ------------ | ----------------------------------------- |
| uid    | [UidType](a) | uid of the user to perform the action for |
| audio  | boolean      | audio mute state of the remote user       |
| isHost | boolean      | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteVideoMuteComponent : [React.ComponentType](a)<[RemoteVideoMuteProps](a)>

RemoteVideoMuteProps

| Key    | Type         | Description                               |
| ------ | ------------ | ----------------------------------------- |
| uid    | [UidType](a) | uid of the user to perform the action for |
| video  | boolean      | video mute state of the remote user       |
| isHost | boolean      | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteEndCallComponent : [React.ComponentType](a)<[RemoteEndCallProps](a)>

RemoteEndCallProps

| Key    | Type         | Description                               |
| ------ | ------------ | ----------------------------------------- |
| uid    | [UidType](a) | uid of the user to perform the action for |
| isHost | boolean      | host status of the local user             |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamApprovedRequestRecallComponent : [React.ComponentType](a)<[RemoteLiveStreamApprovedRequestRecallProps](a)>

RemoteLiveStreamApprovedRequestRecallProps

| Key | Type         | Description                               |
| --- | ------------ | ----------------------------------------- |
| uid | [UidType](a) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamControlApproveComponent : [React.ComponentType](a)<[RemoteLiveStreamControlApproveProps](a)>

RemoteLiveStreamControlApproveProps

| Key | Type         | Description                               |
| --- | ------------ | ----------------------------------------- |
| uid | [UidType](a) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### RemoteLiveStreamControlRejectComponent : [React.ComponentType](a)<[RemoteLiveStreamControlRejectProps](a)>

RemoteLiveStreamControlRejectProps

| Key | Type         | Description                               |
| --- | ------------ | ----------------------------------------- |
| uid | [UidType](a) | uid of the user to perform the action for |

</collapsible>

<br/>

<collapsible>

### ChatSendButtonComponent : [React.ComponentType](a)<[ChatSendButtonProps](a)>

ChatSendButtonProps

| Key    | Type                                      | Description                              |
| ------ | ----------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](a) | Function to be used to render the button |

</collapsible>

<br/>

<collapsible>

### MuteAllAudioButtonComponent : [React.ComponentType](a)<[MuteAllAudioButtonProps](a)>

MuteAllAudioButtonProps

| Key    | Type                                      | Description                              |
| ------ | ----------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](a) | Function to be used to render the button |

</collapsible>

<br/>

<collapsible>

### MuteAllVideoButtonComponent: [React.ComponentType](a)<[MuteAllVideoButtonProps](a)>

MuteAllVideoButtonProps

| Key    | Type                                      | Description                              |
| ------ | ----------------------------------------- | ---------------------------------------- |
| render | (onPress: () => void) => [JSX.Element](a) | Function to be used to render the button |

</collapsible>

<br/>

</method>

</api>
