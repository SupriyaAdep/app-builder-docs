---
sidebar_label: Types
sidebar_position: 9
description: Types
title: Types
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

This page is an index of types, interfaces, enums used across the Customization API

<api>
<method>

## RenderInterface

<collapsible>

| Key         | Type                        | Description                 |
| ----------- | --------------------------- | --------------------------- |
| uid         | number \| string            | Content of the chat message |
| audio       | [ToggleState](#togglestate) | Content of the chat message |
| video       | [ToggleState](#togglestate) | Content of the chat message |
| streamType  | 'high' \| 'low'             | Content of the chat message |
| contentType | 'rtc'                       | Content of the chat message |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

## ToggleState

<collapsible>

| Name      | Value |
| --------- | ----- |
| disabled  | 0     |
| enabled   | 1     |
| disabling | 2     |
| enabling  | 3     |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

## RenderObjectInterface

<collapsible>

| Key            | Type                                | Description                                                                      |
| -------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| [key: UidType] | [RenderInterface](#renderinterface) | Object containing information necessary to render view for the corresponding uid |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

## UidType : string | number

</method>

<!-- ***************************************************************************************************************** -->

<method>

## Selector( e: T ): Partial<T\>

Method to subscribe to portions of the app-state. When passed to an app-state accessor method it reicieves the contents of the associated app-state as argument, it must selectively return the contents which are intended to be subscribed and eventually returned by the accessor method.

```jsx
import { useRecording } from "customization-api";

const { isRecordingActive, startRecording } = useRecording(
  ({isRecordingActve ,startRecording, stopRecording}) => {
    return({{isRecordingActve, startRecording}})
  }
);

/*
#### RecordingContextInterface

isRecordingActve : boolean
startRecording   : () => void
stopRecording    : () => void
*/
```

</method>

<!-- ***************************************************************************************************************** -->

</api>
