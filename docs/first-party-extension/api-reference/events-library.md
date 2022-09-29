---
sidebar_label: Events and Notification Library
sidebar_position: 6
description: Events and Notification Library
title: Events and Notification Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

# Custom Events

This library allows users to send and consume custom events.

These events can be sent to

- A specific user in the channel.
- A set of users in the channel.
- All the users in the channel.

These events can be sent with different levels of persistance.

- **Level 1:**

  The event(s) are sent, received between the present user(s) in the channel. User(s) joining the channel later are unaware of the past events.

- **Level 2:**

  The event(s) are sent, received between the present user(s) in the channel and persisted till the user is active in the call. New user(s) joining the channel will receive the events of the active user(s) in the call.

- **Level 3:**

  The event(s) are sent, received between the present user(s) in the channel and persisted for the duration of the entire call. New user(s) joining the channel will receive the events of the active user(s) and past user(s) of the call.

<br/>

## Import

---

customEvents object handles customization api events and provides methods for sending, subscribing and unsubscribing to events.

```js
import { customEvents } from "fpe-api";
```

<br/>

## Methods

---

<collapsible>
<method>

### send

Sends the event with the provided details.

### send : (eventName: string, payload: string, persistLevel: EventPersistLevel ,receiver?: ReceiverUid ) => void

| Prop         | Type              | Description                                                                          |
| ------------ | ----------------- | ------------------------------------------------------------------------------------ |
| eventName    | string            | Name of the event to be sent                                                         |
| payload      | string            | Payload to be sent along with the event                                              |
| persistLevel | EventPersistLevel | Payload to be sent along with the event                                              |
| receiver?    | ReceiverUid       | Uid(s) to send the message to. Leave emtpy to send as a channel message to all users |

```ts
import { customEvents } from "fpe-api";

...

// 1. Sending to specific user 0001 in the channel
customEvents.send(
  "event-specific-single",
  "Paylaod is Hello!!",
  EventPersistLevel.LEVEL1,
  001
);

// 2. Sending to user(s) 001 002, 003in the channel
customEvents.send(
  "event-specific-multiple",
  "Payload is Hello!!",
  EventPersistLevel.LEVEL1,
  [001, 002, 003]
);

// 3. Sending in the channel
customEvents.send(
  "event-channel",
  "Payload is Hello!!",
  EventPersistLevel.LEVEL1
);
```

</method>
</collapsible>

<br/>

<collapsible>
<method>

### on

Subscribes to the event. Use on method to add listener for specific event.

### on: (eventName: string, listener: Function ) => void

| Prop      | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| eventName | string   | Name of the event to be subscribed                                |
| listener  | Function | Callback method for the event to be called when event is received |

```ts
import react from "React";
import { customEvents } from "fpe-api";

...

    React.useEffect(() => {
        const funcOne = (data) => {};
        const funcTwo = (data) => {};
        const funcThree = (data) => {};

        // 1. Adding single anonymous listener
        customEvents.on("event-one", (data)=> {console.log(data)});

        // 2. Adding single named listener
        customEvents.on("event-two", funcOne);

        // 3. Adding multiple listener(s) to same event. Kindly note function name should be different when using multiple listeners
        customEvents.on("event-three", funcTwo);
        customEvents.on("event-three", funcThree);

    }, []);

...

```

</method>
</collapsible>

<br/>

<collapsible>
<method>

### off

Use off method to remove listener for specific event. If no listener is provided, all listeners added on eventName will be removed.
If both eventName and listener are not provided, all events will be removed;

Additionally, method `on` returns `unbind` function. Call it and this listener
will be removed from event.

### off: (eventName?: string, listener?: Function ) => void

| Prop       | Type     | Description                                                                                                  |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| eventName? | string   | Name of the event to be unsubscribed. If no event name provided all subscribed events will be unsubscribed   |
| listener?  | Function | Method to unsubscribe. If no listener is provided, all listeners added on the eventName will be unsubscribed |

```ts
import react from "React";
import { customEvents } from "fpe-api";

...

    React.useEffect(() => {
        const funcOne = (data) => {};
        const funcTwo = (data) => {};
        const funcThree = (data) => {};

        // 1. Approach 1
        const unbind = customEvents.on("event-zero", (data)=> {console.log(data)});

        // 2. Adding single named listener
        customEvents.on("event-two", funcOne);

        // 2. Adding multiple listener(s) to same event. Kindly note function name should be different when using multiple listeners
        customEvents.on("event-three", funcTwo);
        customEvents.on("event-three", funcThree);

        return () => {
            // 1. Remove specific single listener.
            // We can call unbind or pass eventname and listener name.
            unbind();
            customEvents.off("event-two", funcOne);

            // 2. Remove all listeners for a given specific event
            customEvents.off("event-two") // Here both funcTwo and funcThree will be removed

            // 3. Remove all events and their listener(s)
            customEvents.off()

        }
    }, []);

...

```

</method>
</collapsible>

<br/>

## Example

---

```ts
import react from "React";
import { customEvents, EventPersistLevel } from "fpe-api";

React.useEffect(() => {
  // Adding Listener
  const unbind = customEvents.on("hello-event", (data) => {
    /**
     * The callback data object contains following properties
     * payload: string
     * persistLevel: EventPersistLevel
     * sender: UidType
     * ts: nnumber
     */
    console.log(
      `I have received payload ${data.payload} from user ${data.sender} at time ${data.timestamp} with persistance of ${data.persistLevel}`
    );
  });

  return () => {
    // Removing listener
    unbind();
  };
}, []);

function App() {
  // Sending event
  const sendEvent = () =>
    customEvents.send("hello-event", "Hello!!", EventPersistLevel.LEVEL1);

  return (
    <div>
      <button onClick={sendEvent}>Send event!</button>
    </div>
  );
}
```
