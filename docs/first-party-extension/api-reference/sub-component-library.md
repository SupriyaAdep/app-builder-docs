---
sidebar_label: Sub Components Library
sidebar_position: 3
description: Sub Components Library
title: Sub Components Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

<api>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The Sub Components library is a set of components to be composed as needed by the user. They can be imported under the `fpe-api` module name

---

<method>

<subtitle>

MaxVideoView : [React.ComponentType<MaxVideoRendererInterface\>](a)

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render user video feed. Also includes the following overlays components [NetworkQualityPill](a), [NameLabel](a) etc.

```jsx
import { MaxVideoView } from "fpe-api";
```

<method>
<collapsible>

### MaxVideoRendererInterface

| Prop   | Type              | Description                                            |
| ------ | ----------------- | ------------------------------------------------------ |
| user : | [UidInterface](a) | The user object you need to display the video feed off |

</collapsible>
</method>

</method>

<method>

<subtitle>

ControlsComponentArray: [React.ComponentType](a)[]

</subtitle>

<br/>

<image alt="Video Call" lightImageSrc="api/videocall-light.png" darkImageSrc="api/videocall-dark.png" />

The subcomponent used to render user video feed. Also includes the following overlays components [NetworkQualityPill](a), [NameLabel](a) etc.

<method>
<collapsible>

### ControlsComponentArray

| Index | Type              | Description                                            |
| ----- | ----------------- | ------------------------------------------------------ |
| 0     | [UidInterface](a) | The user object you need to display the video feed off |

</collapsible>
</method>

</method>

</api>
