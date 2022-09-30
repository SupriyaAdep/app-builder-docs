---
sidebar_label: App State Library
sidebar_position: 4
description: App State Library
title: App State Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

Provides accessors for various app states used in App Builder. Some accessors accept a [selector](/customization-api/api-reference/globals#selector) method that allows for selective subscribing of data.

You can access them under the `customization-api` module as a named export.

---

<method>

## useRecording(selector?: [Selector](/customization-api/api-reference/globals#selector)): [RecordingContextInterface](/customization-api/api-reference/context-library#recordingcontextinterface)

The Recording app state governs the App Builder cloud recording functionality.

<br/>

#### RecordingContextInterface

| Key              | Type       | Description                                               |
| ---------------- | ---------- | --------------------------------------------------------- |
| isRecordingActve | boolean    | Indicates if cloud recording is active in the application |
| startRecording   | () => void | Starts cloud recording                                    |
| stopRecording    | () => void | Stops cloud recording                                     |

<br/>

Usage example of the app state:

```jsx
import { useRecording } from "customization-api";

...

const { isRecordingActive, startRecording, stopRecording } = useRecording();
```

</method>

---

<method>

## useSidePanel(selector?: [Selector](/customization-api/api-reference/globals#selector)): [SidePanelContextInterface](/customization-api/api-reference/context-library#sidepanelcontextinterface)

The Recording app state governs the App Builder cloud recording functionality.

<br/>

#### SidePanelContextInterface

| Key          | Type                                                   | Description                         |
| ------------ | ------------------------------------------------------ | ----------------------------------- |
| sidePanel    | [SidePanelType](#sidepaneltype)                        | Active sidepanel name               |
| setSidePanel | ( sidepanel: [SidePanelType](#sidepaneltype) ) => void | Method to set active sidepanel name |

#### SidePanelType

| Name         | Value |
| ------------ | ----- |
| None         | 0     |
| Participants | 1     |
| Chat         | 2     |
| Settings     | 3     |

<br/>

Usage example of the app state:

```jsx
import { useSidePanel, SidePanelType } from "customization-api";

...

const { sidePanel, setSidePanel } = useSidePanel();
```

</method>

---

<method>

## useChatUiControl(selector?: [Selector](/customization-api/api-reference/globals#selector)): [ChatUiControlInterface](/customization-api/api-reference/context-library#chatuicontrolinterface)

The ChatUiControl app state governs the chat ui.

<br/>

#### ChatUiControlInterface

| Key                   | Type                                                                        | Description                                           |
| --------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------- |
| groupActive           | boolean                                                                     | Determines if group tab is active in chat sidepanel   |
| setGroupActive        | (status: boolean) => void                                                   | Method to set group tab active status                 |
| privateActive         | boolean                                                                     | Determines if private tab is active in chat sidepanel |
| setPrivateActive      | (status: boolean) => void                                                   | Method to set private tab active status               |
| selectedChatUserId    | [uidtype](/customization-api/api-reference/globals#uidtype)                 | Uid of the user selected in private chat tab          |
| setSelectedChatUserId | (uid: [uidtype](/customization-api/api-reference/globals#uidtype) ) => void | Method to set selected user                           |
| message               | string                                                                      | Content of message to be sent                         |
| setMessage            | (message: string) => void                                                   | Method to set content of message to be sent           |

<br/>

Usage example of the app state:

```jsx
import { useRecording } from "customization-api";

...

const { isRecordingActive, startRecording, stopRecording } = useRecording();
```

</method>

---

<method>

## useMessages(): [MessageInterface](/customization-api/api-reference/context-library#messageinterface)

The Messages app state governs the chat messages.

<br/>

#### MessageInterface

| Key                      | Type                                                                 | Description                                                                   |
| ------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| groupMessages            | [messageStoreInterface](#messagestoreinterface)[]                    | Array of all the group messages                                               |
| privateMessages          | { [key: string]: [messageStoreInterface](#messagestoreinterface)[] } | Object containing all private messages                                        |
| sendMessage              | ( msg: string, toUid?: number ) => void                              | Method to send a message. Sends group message if `toUid` is not passed        |
| editMessage              | ( msgId: string, msg: string, toUid?: number ) => void               | Method to edit a message                                                      |
| deleteMessage            | ( msgId: string, toUid?: number ) => void                            | Method to delete a message                                                    |
| groupUnreadCount         | number                                                               | Number of unread group messages                                               |
| setGroupUnreadCount      | (count: number) => void                                              | method to set number of unread group messages                                 |
| individualunreadcount    | { [key: string]: number }                                            | object containing number of unread private messages corresponding to each uid |
| setindividualunreadcount | (count: { [key: string]: number } ) => void                          | method to set nubmer of unread private messages                               |

#### messagestoreinterface

| key               | type                                                        | description                     |
| ----------------- | ----------------------------------------------------------- | ------------------------------- |
| createdtimestamp  | number                                                      | message creation timestamp      |
| updatedtimestamp? | number                                                      | last message update timestamp   |
| msg               | string                                                      | message content                 |
| msgid             | string                                                      | message id                      |
| isdeleted         | boolean                                                     | indicates if message is deleted |
| uid               | [uidtype](/customization-api/api-reference/globals#uidtype) | uid of the message sender       |

<br/>

usage example of the app state:

```jsx
import { usemessages } from "customization-api";

const {
  groupmessages,
  privatemessages,
  sendmessage,
  editmessage,
  deletemessage,
  groupunreadcount,
  setgroupunreadcount,
  individualunreadcount,
  setindividualunreadcount,
} = usemessages();
```

</method>

---

<method>

## useRender(selector?: [Selector](/customization-api/api-reference/globals#selector)): [Renderstateinterface](#renderstateinterface)

<!-- the render app state contains the information necessary to render user content views displayed in the videocall screen. this app state is passed to the layouts as an array of components to display the content views. the renderlist object contains renderobjects for every uid in the the rendercontext as key value pairs. -->

The Render app state governs the information necessary to render each user content view displayed in the videocall screen.

it is composed of:

#### Renderstateinterface

| key            | type                                                                                | description                                                                                                          |
| -------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| renderlist     | [renderlistinterface](/customization-api/api-reference/globals#renderlistinterface) | Object containing information necessary to render the content view corresponding to each uid in the Render app state |
| renderposition | array<[Uidtype](/customization-api/api-reference/globals#uidtype)\>                 | Array of all uids in the Render app state                                                                            |

<br/>

Each [renderobject](/customization-api/api-reference/globals#renderobjectinterface) in the `renderlist` is passed as a prop to corresponding type of [content component](/customization-api/api-reference/components-api#renderingcomponentinterface). All the resulting components are then passed to the layouts as an array to be rendered as desired.

**For eg.** The Render app state contains a [renderobject](/customization-api/api-reference/globals#rtcrenderinterface) of `type:'rtc'` for each user in the meeting by default stored in `renderList`. It is used to display user video feeds coming from AgoraRTC hence they contain all the necessary information like: `uid` to identify and subscribe to the video and audio, `audio` and `video` mute states to correctly display fallbacks and icons, etc. each Renderobject is passed as a prop to [MaxVideoView](/customization-api/api-reference/sub-components-library#maxvideoview) unless overriden by [CustomContent API](/customization-api/api-reference/components-api#videocallcustomcontent). After which the resulting array of components is passed to layout to be rendered.

:::tip
You can add custom render objects to the render app state using the 'AddCustomContent' action in [dispatch](/customization-api/api-reference/globals#dispatchtype)
:::

Usage example of the app state:

```jsx
import { useRender } from "customization-api";

...

const { renderList, renderPosition } = useRender();
```

</method>

---

<method>

## useLocalUserInfo(): [LocalUserInfo](/customization-api/api-reference/globals#rtcrenderinterface)

The LocalUserInfo app state contains the local user information like `uid`, `audio` and `video` mute states etc.

Usage example of the app state:

```jsx
import { useLocalUserInfo } from "customization-api";

...

const { uid, audio, video, streamType, contentType, name, screenUid, offline} = useLocalUserInfo();
```

</method>

---

<method>

## useLayout(selector?: [Selector](/customization-api/api-reference/globals#selector)): [LayoutContextInterface](#layoutcontextinterface)

The Layout app state governs the video call screen content display layout.

<br/>

#### LayoutContextInterface

| Key           | Type                           | Description                                                                                                                                                                    |
| ------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| currentLayout | string                         | Name of the current layout. Can be `grid`, `pinned` or any other key defined in the [custom layout API](#customization-api/api-reference/components-api#videocallcustomlayout) |
| setLayout     | ( layoutName: string ) => void | Sets the current layout with given layout name                                                                                                                                 |

<br/>

Usage example of the app state:

```jsx
import { useLayout } from "customization-api";

...

const { currentLayout, setLayout } = useLayout();
```

</method>

---

<method>

## useMeetingInfo(selector?: [Selector](/customization-api/api-reference/globals#selector)): [MeetingInfo](#meetinginfo)

The MeetingInfo app state contains information about the active meeting.

<br/>

<!-- PENDING -->

#### MeetingInfo

| Key               | Type                                | Description                                              |
| ----------------- | ----------------------------------- | -------------------------------------------------------- |
| isJoinDataFetched | boolean                             | Indicates meeting info has been fetched from the backend |
| data?             | [MeetingInfoData](#meetinginfodata) | Meeting info data                                        |

#### MeetingInfoData

| Key                | Type                                                         | Description                                                               |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| isHost             | boolean                                                      | Indicates if the user joined using the Host URL or using the Attendee URL |
| meetingTitle       | string                                                       | Meeting title                                                             |
| roomId             | {<br/>&emsp;attendee: string,<br/>&emsp;host?: string,<br/>} | Host and attendee roomIds                                                 |
| pstn?              | {<br/>&emsp;number: string,<br/>&emsp;pin: string<br/>}      | PSTN info                                                                 |
| isSeparateHostLink | boolean                                                      | Indicates if seperate host and attendee links generated                   |
| channel            | string                                                       | Channel name of current meeting                                           |
| uid                | [UidType](/customization-api/api-reference/globals#uidtype)  | Uid of the local user                                                     |
| token              | string                                                       | RTC authentication token required to join the channel                     |
| rtmToken           | string                                                       | RTM authentication token required to join the channel                     |
| encryptionSecret?  | string                                                       | Packet encryption secret secret                                           |
| screenShareUid     | string                                                       | Uid of local user's screenshare                                           |
| screenShareToken   | string                                                       | Authentication token for local user's screenshare                         |

<br/>

Usage example of the app state:

```jsx
import { useMeetingInfo } from "customization-api";

...

const { isJoinDataFetched, data } = useMeetingInfo();
```

</method>

---

<method>

## useUserName(): \[[userName](#username), [setUserName](#setusername)\]

The UserName app state governs the local user's display name.

Usage example of the app state:

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

## useRtc(selector?: [Selector](/customization-api/api-reference/globals#selector)): [RtcInterface](#rtcinterface)

The RTC app state exposes the internal RtcEngine object as well as dispatch interface to perform various actions.

<br/>

#### RtcInterface

| Key               | Type                                                                                                                          | Description                                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RtcEngine         | [RtcEngine](https://docs.agora.io/en/Voice/API%20Reference/react_native/classes/rtcengine.html)                               | The RtcEngine object from the AgoraRTC SDK                                                                                                                |
| dispatch          | [DispatchType](/customization-api/api-reference/globals#dispatchtype)                                                         | Method to perform various app builder actions. You can see list of available actions [here](/customization-api/api-reference/globals#callbacksinterface). |
| setDualStreamMode | ( mode: [DualStreamMode](https://agoraio-community.github.io/ReactNative-UIKit/enums/Agora_UIKit.DualStreamMode.html) ): void | Method to modify dual stream mode                                                                                                                         |

:::danger
Avoid using `RtcEngine` directly to perform actions such as muting audio, joining a channel etc. Instead rely on [Actions Library](/customization-api/api-reference/actions-library) or [Dispatch](/customization-api/api-reference/globals#dispatchtype) provided by the `customization-api` as they handle modifying the internal app states along with performing the required action.
:::

<br/>

Usage example of the app state:

```jsx
import { useRtc } from "customization-api";

...

const { RtcEngine, dispatch, setDualStreamMode } = useRtc();
```

</method>
