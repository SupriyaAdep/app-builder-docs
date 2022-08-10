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

Custom events can be of 3 predefined presistance levels:

**Level 1:**

The messages are sent and recieved and no state is persisted.

**Level 2:**

The messages are sent and recieved and the sender persists the state in their local user attributes. Any new user joining the channel would recieve the local attributes of all the other users in the channel and be informed of the intial sender's state.

The local user attributes are removed when the sender leaves the channel hence state is only persisted until the user remains in the channel.

**Level 3:**

The messages are sent and recieved after which the sender and the reciever both persist the state in their local user attributes. Any new user joining the channel would recieve the local attributes of all the other users in the channel and be informed of the intial sender's and reciever's state.

The local user attributes are removed when the sender and reciever leave the channel hence state is only persisted until the sender and all recievers remain in the channel.

:::info

**User Attributes**: Key-value pairs associated with each memeber present in the channel. Changes to a user's attributes are communicated to all other users in the channel.

:::

---

<method>

<subtitle>

## CustomEvents

</subtitle>

CustomEvents object handles customization api events and holds the necessary methods for sending and subscribing/unsubscribing to events.

```js
import { CustomEvents } from "fpe-api";
```

<br/>

### _Methods_:

<collapsible>
<method>

### send : (evt: string, payload: [EventPayload](#eventpayload), to?: [ToOptions](#tooptions) ) => void

Sends the event with the provided details.

| Prop    | Type                          | Description                                                                          |
| ------- | ----------------------------- | ------------------------------------------------------------------------------------ |
| evt     | string                        | Name of the event to be sent                                                         |
| payload | [EventPayload](#eventpayload) | Payload to be sent along with the event                                              |
| to?     | [ToOptions](#tooptions)       | Uid(s) to send the message to. Leave emtpy to send as a channel message to all users |

</method>
</collapsible>

<br/>

<collapsible>
<method>

### on: (evt: string, listener: [TEventCallback](#teventcallback) ) => void

Subscribes to the event with the provided details.

| Prop     | Type                              | Description                                                   |
| -------- | --------------------------------- | ------------------------------------------------------------- |
| evt      | string                            | Name of the event to be subscribed                            |
| listener | [TEventCallback](#teventcallback) | Callback method for the event to be called when even recieved |

</method>
</collapsible>

<br/>

<collapsible>
<method>

### off: (evt?: string, listenerToRemove?: [TEventCallback](#teventcallback) ) => void

Unsubscribes to the event with the provided details.

| Prop              | Type                              | Description                                                                                                                                 |
| ----------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| evt?              | string                            | Name of the event to be unsubscribed. If no event name provided all subscribed events will be unsubscribed                                  |
| listenerToRemove? | [TEventCallback](#teventcallback) | Callback method of the event to be unsubscribed. If no callback method provided all callbacks for the given event name will be unsubscribed |

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

| Key     | Type   | Description              |
| ------- | ------ | ------------------------ |
| action? | any    | Descriptor for the value |
| level?  | never  | Level of persistance     |
| value   | string | Value to be presisted    |

</method>

---

<method>
<subtitle>

## IEventPayloadWithAttributes

</subtitle>

| Key     | Type   | Description              |
| ------- | ------ | ------------------------ |
| action? | any    | Descriptor for the value |
| level?  | 2 \| 3 | Level of persistance     |
| value   | string | Value to be presisted    |

</method>

---

<method>
<subtitle>

## ToOptions : [UidType](/first-party-extension/api-reference/globals#uidtype-string)[UidType\[\]](/first-party-extension/api-reference/globals#uidtype-string)

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

| Key    | Type        | Description                     |
| ------ | ----------- | ------------------------------- |
| action | string      | String descriptor for the value |
| level  | 1 \| 2 \| 3 | Level of persistance            |
| value  | string      | Value of the persisted state    |

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
