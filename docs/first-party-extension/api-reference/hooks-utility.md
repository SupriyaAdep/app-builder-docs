---
sidebar_label: Utility Library
sidebar_position: 5
description: Components API is a very powreful way to override
title: Utility Library
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

The Utlity Library provides the user with utility hooks and functions to perform app builder specific tasks easily

You can access these hooks and utility functions under the `customization-api` module as a named export.

---

<method>

## useIsVideoEnabled(): [isVideoEnabled](#isvideoenabled)

Returns a function that checks the video state for a given uid and returns true/false

```js
import { useIsVideoEnabled } from "customization-api";

...

const isVideoEnabled = useIsVideoEnabled();

...

if (isVideoEnabled(/* 123457 */)) {
  // if user video enabled
} else {
  // if user video disabled
}
```

<br/>

### _Returns_:

<method>

<collapsible>

### isVideoEnabled(uid: [UidType](/first-party-extension/api-reference/globals#uidtype)): boolean

</collapsible>

</method>

</method>

---

<method>

## useIsAudioEnabled(): [isAudioEnabled](#isaudioenabled)

Returns a function that checks the audio state for a given uid and returns true/false

```js
import { useIsAudioEnabled } from "customization-api";

...

const isAudioEnabled = useIsAudioEnabled();

...

if (isAudioEnabled(/* 123457 */)) {
  // if user audio enabled
} else {
  // if user audio disabled
}
```

<br/>

### _Returns_:

<method>

<collapsible>

### isAudioEnabled(uid: [UidType](/first-party-extension/api-reference/globals#uidtype)): boolean

</collapsible>

</method>

</method>

---

<method>

## useIsHost(): [isHost](#ishost)

Returns a function that checks whether the given uid is a host and returns true/false

```js
import { useIsHost } from "customization-api";

...

const isHost = useIsHost();

...

if (isHost(/* 123457 */)) {
  // if user is host
} else {
  // if user is not host
}
```

<br/>

### _Returns_:

<method>

<collapsible>

### isHost(uid: [UidType](/first-party-extension/api-reference/globals#uidtype) ): boolean

</collapsible>

</method>

</method>

---

<method>

## useIsAttendee(): [isAttendee](#isattendee)

Returns a function that checks whether the given uid is an attendee and returns true/false

```js
import { useIsAttendee } from "customization-api";

...

const isAttendee = useIsAttendee();

...

if (isAttendee(/* 123457 */)) {
  // if user is attendee
} else {
  // if user is not attendee
}
```

<br/>

### _Returns_:

<method>

<collapsible>

### isAttendee(uid: [UidType](/first-party-extension/api-reference/globals#uidtype)): boolean

</collapsible>

</method>

</method>

---

<method>

## useIsPSTN(): [isPSTN](#ispstn)

Returns a function that checks whether the given uid is a PSTN user and returns true/false

```js
import { useIsPSTN } from "customization-api";

...

const isPSTN = isPSTN();

...

if (isPSTN(/* 123457 */)) {
  // if user joined via pstn
} else {
  // if user did not join via pstn
}
```

<br/>

### _Returns_:

<method>

<collapsible>

### isPSTN(uid: [UidType](/first-party-extension/api-reference/globals#uidtype)): boolean

</collapsible>

</method>

</method>

---

<method>

## useUserName(): \[[userName](#username), [setUserName](#setusername)\]

Returns a function to set local user's display name for everyone in the meeting.

```js
import { useSetName } from "customization-api";
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

## useUserList: () => [RenderStateInterface](a)

Returns the userList interface containing [renderPosition](a) and [renderList](a)

```js
import { useUserList } from "customization-api";
```

<br/>

</method>

---

<method>

## useNavigateTo: () => [navigateToFunction](#navigatetofunction)

Returns a function to navigate to a given path.

```js
import { useNavigateTo } from "customization-api";
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

## useNavParams: () => [getNavParamsFunction](#getnavparamsfunction)

Returns a function to navigate get the navigataion parameters.

```js
import { useNavParams } from "customization-api";
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

useCreateMeeting: () => [createMeetingFunction](#createmeetingfunction)

</subtitle>

Returns an asynchronous function to create a meeting with the given options.

```js
import { useCreateMeeting } from "customization-api";
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

## useJoinMeeting: () => [joinMeetingFunction](#joinmeetingfunction)

Returns an asynchronous function to join a meeting with the given phrase.

```js
import { useJoinMeeting } from "customization-api";
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

## useMuteToggleLocal: () => [muteToggleLocalFunction](#mutetogglelocalfunction)

Returns an asynchronous function to toggle muted state for the given track type for local user.

```js
import { useMuteToggleLocal } from "customization-api";
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

## useRemoteMute: () => [muteToggleRemoteFunction](#mutetogglelocalfunction)

Returns an asynchronous function to toggle muted state for the given track type for a remote user with the given uid.

```js
import { useRemoteMute } from "customization-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### muteToggleLocalFunction: (type: [MUTE_REMOTE_TYPE](a), uid: [UidType](/first-party-extension/api-reference/globals#uidtype) ) => Promise<void\>

</collapsible>

</method>

</method>

---

<method>

## useRemoteEndCall: () => [remoteEndCallFunction](#remoteendcallfunction)

Returns a function to end call for a remote user with the given uid

```js
import { useRemoteEndCall } from "customization-api";
```

<br/>

### _Returns_:

<method>

<collapsible>

### remoteEndCallFunction: (uid: [UidType](/first-party-extension/api-reference/globals#uidtype)) => void

</collapsible>

</method>

</method>

---

<method>

## hasBrandLogo: () => boolean

Checks whether the user config has a brand logo and returns true/false

```js
import { hasBrandLogo } from "customization-api";
```

</method>

---

<method>

## shouldAuthenticate: () => boolean

Checks whether the user config has OAuth enabled with necessary information and returns true/false.

```js
import { shouldAuthenticate } from "customization-api";
```

</method>

---

<method>

## isWeb: () => boolean

Checks whether the application is running on web platform and returns true/false.

```js
import { isWeb } from "customization-api";
```

</method>

---

<method>

## isIOS: () => boolean

Checks whether the application is running on iOS operating system and returns true/false.

```js
import { isIOS } from "customization-api";
```

</method>

---

<method>

## isAndroid : () => boolean

Checks whether the application is running on android operating system and returns true/false.

```js
import { isAndroid } from "customization-api";
```

</method>

---

<method>

## isArray: () => boolean

Checks whether the given parameter is an array and returns true/false.

```js
import { isArray } from "customization-api";
```

</method>

---

<method>

## isValidReactComponent: () => boolean

Checks whether the given parameter is a valid react component and returns true/false.

```js
import { isValidReactComponent } from "customization-api";
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
import { MUTE_LOCAL_TYPE } from "customization-api";
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
import { MUTE_REMOTE_TYPE } from "customization-api";
```

</method>
