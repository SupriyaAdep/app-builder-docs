---
sidebar_label: Events and Notification Library
sidebar_position: 6
description: Events and Notification Library
title: Events and Notification Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

<api>

This event library allows users to send and listen to custom events. These events can be sent to a specific user(s) in the channel or to all the user(s) in the channel.

`send` method listed in the API have 3 predefined persistence levels

**Level 1:**

The messages are sent and received between the user(s) in the channel. Nothing is persisted.
This is the default level when sending custom-events.

**Level 2:**

The messages are sent and received between the user(s) in the channel.
When sending a custom event, evt name as the key and message data as value is persisted in the sender's local attributes.
Any new user who joins the call receives the latest state of the existing user(s) in the channel by reading their local attributes.

When the user leaves the channel, local user attributes are removed. Hence the state is persisted until the user remain in the channel.

**Level 3:**

The messages are sent and received between the user(s) in the channel.
When sending a custom event, evt name as the key and message data as the value is persisted in the sender's local attributes.
While receiving a custom event, evt name as the key and message data as the value is persisted in the receiver's local attributes.

Any new user who joins the call receives the latest state of the existing user(s) in the channel by reading their local attributes.

The local user attributes are removed when the sender and receiver leave the channel.
Hence the state is persisted until the sender and all receiver(s) remain in the channel

---

<method>

<subtitle>

## CustomEvents

</subtitle>

CustomEvents object handles customization api events and hold the necessary methods for sending and subscribing/unsubscribing to events.

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
| evt     | string                        | Name of the event to be sent which can be subscribed on                              |
| payload | [EventPayload](#eventpayload) | Payload to be sent along with the event                                              |
| to?     | [ToOptions](#tooptions)       | Uid(s) to send the message to. Leave empty to send as a channel message to all users |

</method>
</collapsible>

<br/>

<collapsible>
<method>

### on: (evt: string, listener: [TEventCallback](#teventcallback) ) => void

Subscribes to the event with the provided details.

| Prop     | Type                              | Description                                                       |
| -------- | --------------------------------- | ----------------------------------------------------------------- |
| evt      | string                            | Name of the event to be subscribed                                |
| listener | [TEventCallback](#teventcallback) | Callback method for the event to be called when event is received |

</method>
</collapsible>

<br/>

<collapsible>
<method>

### off: (evt?: string, listenerToRemove?: [TEventCallback](#teventcallback) ) => void

Unsubscribes to the event with the provided details.

| Prop              | Type                              | Description                                                                                                                                    |
| ----------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| evt?              | string                            | Name of the event to be unsubscribed. If no event name is provided all subscribed events will be unsubscribed                                  |
| listenerToRemove? | [TEventCallback](#teventcallback) | Callback method of the event to be unsubscribed. If no callback method is provided all callbacks for the given event name will be unsubscribed |

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
| level?  | never  | Level of persistence     |
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
| level?  | 2 \| 3 | Level of persistence     |
| value   | string | Value to be presisted    |

</method>

---

<method>
<subtitle>

## ToOptions : [UidType](/first-party-extension/api-reference/globals#uidtype)[UidType\[\]](/first-party-extension/api-reference/globals#uidtype-string)

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
| level  | 1 \| 2 \| 3 | Level of persistence            |
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
