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

<subtitle>

## useRecordingContext: [createHook](a)<[RecordingContextInterface](#recordingcontextinterface)\>

</subtitle>

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

<subtitle>

## useRenderContext: [createHook](a)<[RenderStateInterface](a)\>

</subtitle>

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

<subtitle>

## useLocalContext: [createHook](a)<[RenderInterface](a)\>

</subtitle>

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

<subtitle>

## useLayoutContext: [createHook](a)<[LayoutContextInterface](a)\>

</subtitle>

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

<subtitle>

## useMeetingInfoContext: [createHook](a)<[MeetingInfoContextInterface](a)\>

</subtitle>

The MeetingInfoContext contains the all the information about the active meeting.

<br/>

#### MeetingInfoContext

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

<subtitle>

## useRtcContext: [createHook](a)<[RtcContextInterface](a)/>

</subtitle>

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

<subtitle>

## usePropsContext: [createHook](a)<[PropsInterface](a)\>

</subtitle>

The PropsContext contains the various configuration options and callbacks that are passed to setup [Agora React Native UI Kit](a) internally.

<br/>

#### PropsInterface

| Key         | Type                             | Description                                                          |
| ----------- | -------------------------------- | -------------------------------------------------------------------- |
| rtcProps    | [RtcPropsInterface](a)           | Contains all the configuration options passed to setup the ui kit    |
| styleProps? | Partial<[StylePropInterface](a)> | Contains various styles used by the ui kit                           |
| callbacks?  | Partial<[CallbacksInterface](a)> | Contains various callbacks setup on rtc actions passed to the ui kit |
| mode?       | ChannelProfile                   | Indicates the rtc channel profile to be used                         |

<br/>

#### RtcPropsInterface

| Key                    | Type                  | Description                                                       |
| ---------------------- | --------------------- | ----------------------------------------------------------------- |
| appId                  | string                | Contains all the configuration options passed to setup the ui kit |
| channel                | string                | Contains all the configuration options passed to setup the ui kit |
| uid?                   | [UidType](a)          | Contains all the configuration options passed to setup the ui kit |
| token?                 | string \| null        | Contains all the configuration options passed to setup the ui kit |
| dual?                  | boolean \| null       | Contains all the configuration options passed to setup the ui kit |
| profile?               | [VideoProfile](a)     | Contains all the configuration options passed to setup the ui kit |
| initialDualStreamMode? | [DualStreamMode](a)   | Contains all the configuration options passed to setup the ui kit |
| role?                  | [ClientRole](a)       | Contains all the configuration options passed to setup the ui kit |
| callActive?            | boolean               | Contains all the configuration options passed to setup the ui kit |
| encryption?            | [EncryptionConfig](a) | Contains all the configuration options passed to setup the ui kit |
| geoFencing?            | boolean               | Contains all the configuration options passed to setup the ui kit |

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
