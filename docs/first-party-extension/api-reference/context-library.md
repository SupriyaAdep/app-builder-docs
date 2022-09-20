---
sidebar_label: App State Library
sidebar_position: 4
description: App State Library
title: App State Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

The App State Library exposes various contexts used in App Builder. All contexts are wrapped around a [selector](/first-party-extension/api-reference/globals#renderinterface) hook that allows for selective subscribing of data.

---

<method>

## useRecording(selector?: [Selector](/first-party-extension/api-reference/globals#selector)) : [RecordingContextInterface](/first-party-extension/api-reference/context-library#recordingcontextinterface)

The RecordingContext contains methods to start and stop cloud recording as well as state that tracks recording status.

<br/>

#### RecordingContextInterface

| Key              | Type       | Description                                                      |
| ---------------- | ---------- | ---------------------------------------------------------------- |
| isRecordingActve | boolean    | Flag to indicate if cloud recording is active in the application |
| startRecording   | () => void | Starts cloud recording                                           |
| stopRecording    | () => void | Stops cloud recording                                            |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
const { isRecordingActive, startRecording, stopRecording } = useRecording();
```

</method>

---

<method>

<!-- PENDING -->

## useRender(selector?: [Selector](/first-party-extension/api-reference/globals#selector)) : [RenderStateInterface](#renderstateinterface)

The RenderContext contains the information necessary to render user content views.

<br/>

#### RenderStateInterface

| Key            | Type                                                                                        | Description                                                           |
| -------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| renderList     | [RenderObjectInterface](/first-party-extension/api-reference/globals#renderobjectinterface) | Object containing all the render objects stored in the render context |
| renderPosition | Array<[UidType](/first-party-extension/api-reference/globals#uidtype)\>                     | Array indicating order of all uids in the render context              |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
import { useRenderContext } from "fpe-api";

const MyReactComponent = () => {
  const {
    renderList,
    renderPosition,
  } = useRenderContext((RenderContext) => {
    const {
      renderList,
      renderPosition,
    } = RenderContext;

    return {
      renderList,
      renderPosition,
    };
  });

  ...
};
```

</method>

---

<method>

## useLocalUserInfo : (selector?: [Selector](/first-party-extension/api-reference/globals#selector)) : [LocalUserInfo](#localuserinfo)

The LocalContext contains the local user information.

<!-- PENDING -->

#### LocalUserInfo

| Key                 | Type                                                       | Description                                   |
| ------------------- | ---------------------------------------------------------- | --------------------------------------------- |
| activeLayoutName    | string                                                     | State variable containing active layout name  |
| setActiveLayoutName | [React.Dispatch](a)< [React.SetStateAction](a) <string\>\> | Set state method to modify active layout name |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
import { useLocalContext } from "fpe-api";

const MyReactComponent = () => {
  const LocalContext = useLocalContext();
  ...
};
```

</method>

---

<method>

## useLayout : (selector?: [Selector](/first-party-extension/api-reference/globals#selector)) : [LayoutContextInterface](#layoutcontextinterface)

<!-- PENDING -->

The RenderContext contains the active layout and method to modify the active layout

<br/>

#### LayoutContextInterface

| Key           | Type                           | Description                                                                                                                                                                                    |
| ------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| currentLayout | string                         | Name of the current layout. Can be `GridLayout`, `PinnedLayout` or any other key defined in the [custom layout API](#first-party-extension/api-reference/components-api#videocallcustomlayout) |
| setLayout     | ( layoutName: string ) => void | Sets the current layout with given layout name                                                                                                                                                 |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
const { currentLayout, setLayout } = useLayout();
```

</method>

---

<method>

## useMeetingInfo : (selector?: [Selector](/first-party-extension/api-reference/globals#selector)) : [MeetingInfo](#meetinginfo)

The MeetingInfoContext contains the all the information about the active meeting.

<br/>

<!-- PENDING -->

#### MeetingInfo

| Key                | Type                                                                                                                                                      | Description                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| isHost             | boolean                                                                                                                                                   | Indicates if the user joined using the Host URL or using the Attendee URL                         |
| meetingTitle       | string                                                                                                                                                    | Meeting title                                                                                     |
| meetingPassphrase  | {<br/>&emsp;attendee: string,<br/>&emsp;host?: string,<br/>&emsp;pstn?: {<br/>&emsp;&emsp;number: string,<br/> &emsp;&emsp;pin: string<br/>&emsp;}<br/> } | Object containing host and attendee meeting passphrases along with PSTN info                      |
| isSeparateHostLink | boolean                                                                                                                                                   | A flag that determines if the host uses a separate link or if everybody uses the same(host) link. |
| channel            | string                                                                                                                                                    | Channel name of current meeting                                                                   |
| uid                | number                                                                                                                                                    | uid of the local user                                                                             |
| token              | string                                                                                                                                                    | rtc authentication token required to join the channel                                             |
| rtm                | string                                                                                                                                                    | rtm uid of the local user                                                                         |
| secret             | string                                                                                                                                                    | authentication secret                                                                             |
| screenShareUid     | string                                                                                                                                                    | uid of local user screenshare                                                                     |
| screenShareToken   | string                                                                                                                                                    | authentication token for local user screenshare                                                   |
| isJoinDataFetched  | boolean                                                                                                                                                   | Videocall screen only - The boolean value indicates if the backend query has been completed.      |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
const {
  isHost,
  meetingTitle,
  meetingPassphrase,
  isSeparateHostLink,
  channel,
  uid,
  token,
  rtm,
  secret,
  screenShareUid,
  screenShareToken,
  isJoinDataFetched,
} = useMeetingInfoContext();
```

</method>

---

<method>

## useRtcContext : (selector?: [Selector](/first-party-extension/api-reference/globals#selector)) : [RtcContextInterface](#rtccontextinterface)

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
import { useRtcContext } from "fpe-api";

const MyReactComponent = () => {
  const {
    RtcEngine,
    dispatch,
    setDualStreamMode,
  } = useRtcContext((RtcContext) => {
    const {
      RtcEngine,
      dispatch,
      setDualStreamMode,
    } = RtcContext;

    return {
      RtcEngine,
      dispatch,
      setDualStreamMode,
    };
  });

  ...
};
```

</method>
