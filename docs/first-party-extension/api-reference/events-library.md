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

---

<method>

<subtitle>

## FpeEvents

</subtitle>

Event manager instance for customization api events.

```js
import { useIsVideoEnabled } from "fpe-api";
```

<br/>

### _Methods_:

<collapsible>
<method>

### send : (evt: string, payload: [EventPayload](#eventpayload), to?: [ToOptions](#tooptions) ) => void

</method>
</collapsible>

<br/>

<collapsible>
<method>

### on: (evt: string, listener: [TEventCallback](#teventcallback) ) => void

</method>
</collapsible>

<br/>

<collapsible>
<method>

### off: (evt: string, listener: [TEventCallback](#teventcallback) ) => void

</method>
</collapsible>

</method>

</api>

## **TYPES**:

<method>
<subtitle>

## EventPayload : IEventPayloadWithoutAttributes : IEventPayloadWithAttributes

</subtitle>

</method>

---

<method>
<subtitle>

## IEventPayloadWithoutAttributes

</subtitle>

| Key     | Type   | Description          |
| ------- | ------ | -------------------- |
| action? | any    |                      |
| level?  | never  | level of persistance |
| value   | string |                      |

</method>

---

<method>
<subtitle>

## IEventPayloadWithAttributes

</subtitle>

| Key     | Type   | Description          |
| ------- | ------ | -------------------- |
| action? | any    |                      |
| level?  | 2 \| 3 | level of persistance |
| value   | string |                      |

</method>

---

<method>
<subtitle>

## ToOptions : [UidType](/first-party-extension/api-reference/globals#uidtype-string)[UidType\[\]](a)

</subtitle>

</method>

---

<method>

## TEventCallback : \(args: [EvtCbPayload](#evtcbpayload)): void

</method>

---

<method>
<subtitle>

## EvtCbPayload

</subtitle>

| Name    | Value                               |
| ------- | ----------------------------------- |
| payload | [dataPayload](#datapayload)         |
| sender  | string                              |
| ts      | number                              |
| source  | [EventSourceEnum](#eventsourceenum) |

</method>

---

<method>
<subtitle>

## dataPayload

</subtitle>

| Key    | Type        | Description          |
| ------ | ----------- | -------------------- |
| action | string      |                      |
| level  | 1 \| 2 \| 3 | level of persistance |
| value  | string      |                      |

</method>

---

<method>
<subtitle>

## EventSourceEnum

</subtitle>

| Name | Value |
| ---- | ----- |
| core | core  |
| fpe  | fpe   |

</method>
