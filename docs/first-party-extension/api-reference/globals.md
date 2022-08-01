---
sidebar_label: Globals
sidebar_position: 7
description: Globals
title: Globals
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

This page is an index of types, interfaces, enums used across various Customization APIs

<api>
<method>

<subtitle>

## RenderInterface

</subtitle>

<collapsible>

| Key         | Type             | Description                 |
| ----------- | ---------------- | --------------------------- |
| uid         | number \| string | Content of the chat message |
| audio       | [ToggleState](a) | Content of the chat message |
| video       | [ToggleState](a) | Content of the chat message |
| streamType  | 'high' \| 'low'  | Content of the chat message |
| contentType | 'rtc'            | Content of the chat message |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## ToggleState

</subtitle>

<collapsible>

| Name      | Value |
| --------- | ----- |
| disabled  | 0     |
| enabled   | 1     |
| disabling | 2     |
| enabling  | 3     |
    
| Key            | Type                       | Description                                                           |
| -------------- | -------------------------- | --------------------------------------------------------------------- |
| renderList     | [RenderObjectInterface](a) | Object containing all the render objects stored in the render context |
| renderPosition | Array<[UidType](a)\>       | Array indicating order of all uids in the render context              |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## RenderObjectInterface

</subtitle>

<collapsible>

| Key            | Type                 | Description                                                                      |
| -------------- | -------------------- | -------------------------------------------------------------------------------- |
| [key: UidType] | [RenderInterface](a) | Object containing information necessary to render view for the corresponding uid |

</collapsible>
</method>

<!-- ***************************************************************************************************************** -->

<method>

<subtitle>

## UidType: string

</subtitle>

</method>

<!-- ***************************************************************************************************************** -->

</api>
