---
sidebar_label: Globals
sidebar_position: 7
description: Globals
title: Globals
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

## UidType : string

</method>

<!-- ***************************************************************************************************************** -->

<method>

## createHook : <T\>(context: [React.Context](#https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L373)<T\>) => { Partial<T\> }

</method>

<!-- ***************************************************************************************************************** -->

</api>
