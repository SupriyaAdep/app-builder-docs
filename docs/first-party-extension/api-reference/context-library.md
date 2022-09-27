---
sidebar_label: App State Library
sidebar_position: 4
description: App State Library
title: App State Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

Provides methods to interact with various app states used in App Builder. Some methods accept a [selector](/first-party-extension/api-reference/globals#renderinterface) method that allows for selective subscribing of data.

You can access them under the `customization-api` module as a named export.

---

<method>

## useRecording(selector?: [Selector](/first-party-extension/api-reference/globals#selector)): [RecordingContextInterface](/first-party-extension/api-reference/context-library#recordingcontextinterface)

The Recording app state governs the App Builder cloud recording functionality.

<br/>

#### RecordingContextInterface

| Key              | Type       | Description                                               |
| ---------------- | ---------- | --------------------------------------------------------- |
| isRecordingActve | boolean    | Indicates if cloud recording is active in the application |
| startRecording   | () => void | Starts cloud recording                                    |
| stopRecording    | () => void | Stops cloud recording                                     |

<br/>

Usage example of the context:

```jsx
import { useRecording } from "customization-api";

...

const { isRecordingActive, startRecording, stopRecording } = useRecording();
```

</method>

---

<method>

<!-- PENDING -->

## useRender(selector?: [Selector](/first-party-extension/api-reference/globals#selector)): [RenderStateInterface](#renderstateinterface)

The Render context contains the information necessary to render user content views displayed in the videocall screen.

<br/>

#### RenderStateInterface

| Key            | Type                                                                                      | Description                              |
| -------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------- |
| renderList     | [RenderListInterface](/first-party-extension/api-reference/globals#renderobjectinterface) | Object containing all the render objects |
| renderPosition | Array<[UidType](/first-party-extension/api-reference/globals#uidtype)\>                   | Array of all uids in the render context  |

<br/>

Usage example of the context:

```jsx
import { useRender } from "customization-api";

...

const { renderList, renderPosition } = useRender();
```

</method>

---

<method>

## useLocalUserInfo(): [LocalUserInfo](/first-party-extension/api-reference/globals#renderinterface)

The LocalUserInfo context contains the local user information.

Usage example of the context:

```jsx
import { useLocalUserInfo } from "customization-api";

...

const { uid, audio, video, streamType, contentType } = useLocalUserInfo();
```

</method>

---

<method>

## useLayout(selector?: [Selector](/first-party-extension/api-reference/globals#selector)): [LayoutContextInterface](#layoutcontextinterface)

The Layout context governs the video call screen content display layout.

<br/>

#### LayoutContextInterface

| Key           | Type                           | Description                                                                                                                                                                                    |
| ------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currentLayout | string                         | Name of the current layout. Can be `GridLayout`, `PinnedLayout` or any other key defined in the [custom layout API](#first-party-extension/api-reference/components-api#videocallcustomlayout) |
| setLayout     | ( layoutName: string ) => void | Sets the current layout with given layout name                                                                                                                                                 |

<br/>

Usage example of the context:

```jsx
import { useLayout } from "customization-api";

...

const { currentLayout, setLayout } = useLayout();
```

</method>

---

<method>

## useMeetingInfo(selector?: [Selector](/first-party-extension/api-reference/globals#selector)): [MeetingInfo](#meetinginfo)

The MeetingInfoContext contains the all the information about the active meeting.

<br/>

<!-- PENDING -->

#### MeetingInfo

| Key               | Type                                | Description                                              |
| ----------------- | ----------------------------------- | -------------------------------------------------------- |
| isJoinDataFetched | boolean                             | Indicates meeting info has been fetched from the backend |
| data?             | [MeetingInfoData](#meetinginfodata) | Meeting info data                                        |

#### MeetingInfoData

| Key                | Type                                                            | Description                                                               |
| ------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| isHost             | boolean                                                         | Indicates if the user joined using the Host URL or using the Attendee URL |
| meetingTitle       | string                                                          | Meeting title                                                             |
| roomId             | {<br/>&emsp;attendee: string,<br/>&emsp;host?: string,<br/>}    | Host and attendee roomIds                                                 |
| pstn?              | {<br/>&emsp;number: string,<br/>&emsp;pin: string<br/>}         | PSTN info                                                                 |
| isSeparateHostLink | boolean                                                         | Indicates if seperate host and attendee links generated                   |
| channel            | string                                                          | Channel name of current meeting                                           |
| uid                | [UidType](/first-party-extension/api-reference/globals#uidtype) | Uid of the local user                                                     |
| token              | string                                                          | RTC authentication token required to join the channel                     |
| rtmToken           | string                                                          | RTM authentication token required to join the channel                     |
| encryptionSecret?  | string                                                          | Packet encryption secret secret                                           |
| screenShareUid     | string                                                          | Uid of local user's screenshare                                           |
| screenShareToken   | string                                                          | Authentication token for local user's screenshare                         |

<br/>

Usage example of the context:

```jsx
import { useMeetingInfo } from "customization-api";

...

const { isJoinDataFetched, data } = useMeetingInfo();
```

</method>

---

<method>

## useUserName(): \[[userName](#username), [setUserName](#setusername)\]

The UserName context contains the local user's display name.

```js
import { useUserName } from "customization-api";

...

const [userName, setUserName] = useUserName();
```

<br/>

### _Returns_:

<method>

<collapsible>

### userName: string

</collapsible>

<br/>

<collapsible>

### setUserName: (name: string) => void;

</collapsible>

</method>

</method>

---

<method>

## useRtcContext(selector?: [Selector](/first-party-extension/api-reference/globals#selector)): [RtcContextInterface](#rtccontextinterface)

<!-- PENDING -->

The RenderContext contains the information necessary to render user content views.

<br/>

#### RtcContextInterface

| Key               | Type                                                                                                                                                                | Description                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| RtcEngine         | [RtcEngine](https://docs.agora.io/en/Voice/API%20Reference/react_native/classes/rtcengine.html)                                                                     | The RtcEngine object from the Agora SDK     |
| dispatch          | [DispatchType](https://agoraio-community.github.io/ReactNative-UIKit/modules/Built_in_Components._internal_.html#DispatchType)                                      | Method to dispatch various callbacks        |
| setDualStreamMode | [React.Dispatch](a)< [React.SetStateAction](a) <[DualStreamMode](https://agoraio-community.github.io/ReactNative-UIKit/enums/Agora_UIKit.DualStreamMode.html) \> \> | Set state method to modify dual stream mode |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
import { useRtcContext } from "customization-api";

...

const { RtcEngine, dispatch, setDualStreamMode } = useRtcContext();
```

</method>
