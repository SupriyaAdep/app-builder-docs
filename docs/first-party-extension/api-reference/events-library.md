---
sidebar_label: Events and Notification Library
sidebar_position: 6
description: Events and Notification Library
title: Events and Notification Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

<api>

The events library allows users to send and consume custom events. These events can be broadcasted to specific user(s) in the meeting or to the entire channel.

Custom events can be of 3 predefined presistance levels

Level 1:

Level 2:

Level 3:

<method>

<subtitle>

FpeEvents

</subtitle>

Event manager instance for customization api events.

```js
import { useIsVideoEnabled } from "fpe-api";
```

<br/>

### _Methods_:

<collapsible>
<method>

### send: (evt: string, payload: [EventPayload](a), to?: [ToOptions](a) ) => void

</method>
</collapsible>

</method>

</api>
