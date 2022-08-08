---
sidebar_label: App state and Context Library
sidebar_position: 4
description: Context Library
title: Context Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

The context library exposes various contexts used in app builder. All contexts are wrapped around a selector hook that allows for selective subscribing of data.

---

<method>

## useRecordingContext : [createHook](a)<[RecordingContextInterface](#recordingcontextinterface)\>

The RecordingContext contains methods to start and stop cloud recording as well as state that tracks recording status.

<br/>

#### RecordingContextInterface

| Key                | Type                                                 | Description                                                      |
| ------------------ | ---------------------------------------------------- | ---------------------------------------------------------------- |
| isRecordingActve   | boolean                                              | Flag to indicate if cloud recording is active in the application |
| setRecordingActive | [React.Dispatch<React.SetStateAction<boolean\>\>](a) | Start/Stop cloud recording.                                      |
| startRecording     | () => void                                           | Starts cloud recording                                           |
| stopRecording      | () => void                                           | Stops cloud recording                                            |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
import { useRecordingContext } from "fpe-api";

const MyReactComponent = () => {
  const {
    isRecordingActve,
    setRecordingActive,
    startRecording,
    stopRecording,
  } = useRecordingContext((RecordingContext) => {
    const {
      isRecordingActve,
      setRecordingActive,
      startRecording,
      stopRecording,
    } = RecordingContext;

    return {
      isRecordingActve,
      setRecordingActive,
      startRecording,
      stopRecording,
    };
  });

  ...
};
```

</method>

---

<method>

## useRenderContext : [createHook](a)<[RenderStateInterface](a)\>

The RenderContext contains the information necessary to render user content views.

<br/>

#### RenderStateInterface

| Key            | Type                       | Description                                                           |
| -------------- | -------------------------- | --------------------------------------------------------------------- |
| renderList     | [RenderObjectInterface](a) | Object containing all the render objects stored in the render context |
| renderPosition | Array<[UidType](a)\>       | Array indicating order of all uids in the render context              |

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

## useLocalContext : [createHook](a)<[RenderInterface](a)\>

The LocalContext contains the local user information.

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

## useLayoutContext : [createHook](a)<[LayoutContextInterface](a)\>

The RenderContext contains the active layout and method to modify the active layout

<br/>

#### LayoutContextInterface

| Key                 | Type                                                | Description                                   |
| ------------------- | --------------------------------------------------- | --------------------------------------------- |
| activeLayoutName    | string                                              | State variable containing active layout name  |
| setActiveLayoutName | [React.Dispatch<React.SetStateAction<string\>\>](a) | Set state method to modify active layout name |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
import { useLayoutContext } from "fpe-api";

const MyReactComponent = () => {
  const {
    activeLayoutName,
    setActiveLayoutName,
  } = useLocalContext((LayoutContext) => {
    const {
      activeLayoutName,
      setActiveLayoutName,
    } = LayoutContext;

    return {
      activeLayoutName,
      setActiveLayoutName,
    };
  });

  ...
};
```

</method>

---

<method>

## useMeetingInfoContext : [createHook](a)<[MeetingInfoContextInterface](a)\>

The MeetingInfoContext contains the all the information about the active meeting.

<br/>

#### MeetingInfoContextInterface

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
import { useMeetingInfoContext } from "fpe-api";

const MyReactComponent = () => {
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
  } = useMeetingInfoContext((MeetingInfoContext) => {
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
    } = MeetingInfoContext;

    return {
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
    };
  });

  ...
};
```

</method>

---

<method>

## useRtcContext : [createHook](a)<[RtcContextInterface](a)>

The RenderContext contains the information necessary to render user content views.

<br/>

#### RtcContextInterface

| Key               | Type                                                        | Description                                 |
| ----------------- | ----------------------------------------------------------- | ------------------------------------------- |
| RtcEngine         | [RtcEngine](a)                                              | The RtcEngine object from the Agora SDK     |
| dispatch          | DispatchType](a)                                            | Method to dispatch various callbacks        |
| setDualStreamMode | React.Dispatch<React.SetStateAction<[DualStreamMode](a)\>\> | Set state method to modify dual stream mode |

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

---

<method>

## usePropsContext : [createHook](a)<[PropsInterface](a)\>

The PropsContext contains the various configuration options and callbacks that are passed to setup [Agora React Native UI Kit](a) internally.

<br/>

#### PropsInterface

| Key         | Type                                                                                                                                                    | Description                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| rtcProps    | [RtcPropsInterface](a)                                                                                                                                  | Contains all the configuration options passed to setup the ui kit    |
| styleProps? | Partial<[StylePropInterface](https://agoraio-community.github.io/ReactNative-UIKit/interfaces/Built_in_Components._internal_.RtcPropsInterface.html) \> | Contains various styles used by the ui kit                           |
| callbacks?  | Partial<[CallbacksInterface](a)>                                                                                                                        | Contains various callbacks setup on rtc actions passed to the ui kit |
| mode?       | ChannelProfile                                                                                                                                          | Indicates the rtc channel profile to be used                         |

<br/>

#### RtcPropsInterface _extends_ [AgoraRnUiKitRtcPropsInterface](https://agoraio-community.github.io/ReactNative-UIKit/interfaces/Built_in_Components._internal_.RtcPropsInterface.html)

| Key         | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| geoFencing? | boolean | Determines whether geofencing is enabled |

<br/>

#### CallbacksInterface _extends_ [AgoraRnUiKitCallbackInterface](https://agoraio-community.github.io/ReactNative-UIKit/interfaces/Agora_UIKit._internal_.CallbacksInterface.html)

<!-- TODO(adictya): Add descriptions -->

| Key              | Type                                                             | Description                                            |
| ---------------- | ---------------------------------------------------------------- | ------------------------------------------------------ |
| DequeVideo       | (uid: [UidType](a)) => void                                      | Called when render object for the given uid is dequeud |
| UpdateRenderList | (uid: [UidType](a), user: Partial<[RenderInterface](a)>) => void | Called when render object for the given uid is dequeud |
| AddCustomContent | (uid: [UidType](a), data: any) => void                           | Called when render object for the given uid is dequeud |

<br/>

Use the example code given below showcasing the use of selector to grab all the contents of the context.

```jsx
import { usePropsContext } from "fpe-api";

const MyReactComponent = () => {
  const {
    rtcProps,
    styleProps,
    callbacks,
    mode,
  } = usePropsContext((PropsContext) => {
    const {
      rtcProps,
      styleProps,
      callbacks,
      mode,
    } = PropsContext;

    return {
      rtcProps,
      styleProps,
      callbacks,
      mode,
    };
  });

  ...
};
```

</method>
