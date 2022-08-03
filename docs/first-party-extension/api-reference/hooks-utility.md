---
sidebar_label: Utility Library
sidebar_position: 5
description: Components API is a very powreful way to override
title: Utility Library
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

The Utlity Library provides the user with utility hooks and functions to perform app builder specific tasks easily

You can access these hooks and utility functions under the `fpe-api` module as a named export.

---

<method>
<subtitle>

useIsVideoEnabled: (uid: [UserID](a) ) => boolean

</subtitle>

Checks the video state for a given uid and returns true/false

```js
import { useIsVideoEnabled } from "fpe-api";
```

</method>

---

<method>
<subtitle>

## useIsAudioEnabled: (uid: [UserID](a) ) => boolean

</subtitle>

Checks the audio state for a given uid is host and returns true/false

```js
import { useIsAudioEnabled } from "fpe-api";
```

<br/>

</method>

---

<method>
<subtitle>

useIsHost : () => boolean | [isHostCheckFunction](a)

</subtitle>

Returns a function that checks whether given uid and returns true/false

```js
import { useIsHost } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### isHostCheckFunction: (uid: [UserID](a)) => boolean

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useIsAttendee : () => boolean | [isAttendeeCheckFunction](a)

</subtitle>

Returns a function that checks whether given uid is attendee and returns true/false

```js
import { useIsAttendee } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### isAttendeeCheckFunction: (uid: [UserID](a)) => boolean

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useIsPSTN: (uid: [UserID](a) ) => boolean

</subtitle>

Checks the audio state for a given uid is a PSTN user and returns true/false

```js
import { useIsPSTN } from "fpe-api";
```

<br/>

</method>

---

<method>
<subtitle>

useSetName: () => [setDisplayNameFunction](a)

</subtitle>

Returns a function to set local users display name for everyone in the meeting.

```js
import { useSetName } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### setDisplayNameFunction: (name: string) => void;

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useGetName: () => [getDisplayNameFunction](a)

</subtitle>

Returns a function to get local users display name.

```js
import { useSetName } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### getDisplayNameFunction: () => string;

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useUserList: () => [RenderStateInterface](a)

</subtitle>

Returns the userList interface containing [renderPosition](a) and [renderList](a)

```js
import { useUserList } from "fpe-api";
```

<br/>

</method>

---

<method>
<subtitle>

useNavigateTo: () => [navigateToFunction](a)

</subtitle>

Returns a function to navigate to a given path.

```js
import { useNavigateTo } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### navigateToFunction: (path: string) => void;

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useNavParams: () => [getNavParamsFunction](a)

</subtitle>

Returns a function to navigate get the navigataion parameters.

```js
import { useNavParams } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### getNavParamsFunction: () => {[key:string]: string};

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useCreateMeeting: () => [createMeetingFunction](a)

</subtitle>

Returns an asynchronous function to create a meeting with the given options.

```js
import { useCreateMeeting } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### createMeetingFunction: (roomTitle: string, enablePSTN?: boolean, isSeperateHostLink?: boolean) => Promise<void\>

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useJoinMeeting: () => [joinMeetingFunction](a)

</subtitle>

Returns an asynchronous function to join a meeting with the given phrase.

```js
import { useJoinMeeting } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### joinMeetingFunction: (phrase: string) => Promise<void\>

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useMuteToggleLocal: () => [muteToggleLocalFunction](a)

</subtitle>

Returns an asynchronous function to toggle muted state for the given track type for local user.

```js
import { useMuteToggleLocal } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### muteToggleLocalFunction: (type: [MUTE_LOCAL_TYPE](a)) => Promise<void\>

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useRemoteMute: () => [muteToggleRemoteFunction](a)

</subtitle>

Returns an asynchronous function to toggle muted state for the given track type for a remote user with the given uid.

```js
import { useRemoteMute } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### muteToggleLocalFunction: (type: [MUTE_REMOTE_TYPE](a), uid: [UidType](a) ) => Promise<void\>

</collapsible>

</method>

</method>

---

<method>
<subtitle>

useRemoteEndCall: () => [remoteEndCallFunction](a)

</subtitle>

Returns a function to end call for a remote user with the given uid

```js
import { useRemoteEndCall } from "fpe-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### remoteEndCallFunction: (uid: [UidType](a)) => void

</collapsible>

</method>

</method>

---

<method>
<subtitle>

hasBrandLogo: () => boolean

</subtitle>

Checks whether the user config has a brand logo and returns true/false

```js
import { hasBrandLogo } from "fpe-api";
```

</method>

---

<method>
<subtitle>

shouldAuthenticate: () => boolean

</subtitle>

Checks whether the user config has OAuth enabled with necessary information and returns true/false.

```js
import { shouldAuthenticate } from "fpe-api";
```

</method>

---

<method>
<subtitle>

isWeb: () => boolean

</subtitle>

Checks whether the application is running on web platform and returns true/false.

```js
import { isWeb } from "fpe-api";
```

</method>

---

<method>
<subtitle>

isIOS: () => boolean

</subtitle>

Checks whether the application is running on iOS operating system and returns true/false.

```js
import { isIOS } from "fpe-api";
```

</method>

---

<method>
<subtitle>

isAndroid: () => boolean

</subtitle>

Checks whether the application is running on android operating system and returns true/false.

```js
import { isAndroid } from "fpe-api";
```

</method>

---

<method>
<subtitle>

isArray: () => boolean

</subtitle>

Checks whether the given parameter is an array and returns true/false.

```js
import { isArray } from "fpe-api";
```

</method>

---

<method>
<subtitle>

isValidReactComponent: () => boolean

</subtitle>

Checks whether the given parameter is a valid react component and returns true/false.

```js
import { isValidReactComponent } from "fpe-api";
```

</method>

---

# **TYPES**:

<br/>

<method>
<subtitle>

MUTE_LOCAL_TYPE

</subtitle>

| Name  | Value |
| ----- | ----- |
| audio | 0     |
| video | 1     |

```js
import { MUTE_LOCAL_TYPE } from "fpe-api";
```

</method>

---

<method>
<subtitle>

MUTE_REMOTE_TYPE

</subtitle>

| Name  | Value |
| ----- | ----- |
| audio | 0     |
| video | 1     |

```js
import { MUTE_REMOTE_TYPE } from "fpe-api";
```

</method>
