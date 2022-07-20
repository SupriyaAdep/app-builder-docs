---
sidebar_label: Hooks and Utility Library
sidebar_position: 5
description: Components API is a very powreful way to override
title: Hooks and Utility Library
keywords: [videCallProps, ChatBubbleProps]
sidebar_custom_props: { icon: "settings" }
---

The Hooks and Utlity Library provides the user with utility hooks and functions to perform app builder specific tasks easily

You can access these hooks and utility functions under the `fpe-api` module as a named export.

---

<method>
<subtitle>

useIsVideoEnabled: (uid: [UserID](a) ) => boolean

</subtitle>

Checks the video state for a given uid and returns true/false

Use the code example given below showcasing reconstruction of the default video call ui as a guide.

```js
import React from "react";
import { View } from "react-native";
import { installFPE } from "fpe-api/install";
import {
  ParticipantsView,
const VideoCall: React.FC = () => {
  const { sidePanel } = useSidePanel();
  return (
    <View style={{ flex: 1, flexDirection: "column", overflow: "hidden" }}>
      <Navbar></Navbar>
      <View
        style={{
          flex: 12,
          flexDirection: "row",
        }}
      >
      </View>
      <Controls />
    </View>
  );
};

const data = installFPE({
  components: {
    videoCall: VideoCall,
  },
});

export default data;
```

<br/>
<collapsible>

### _Returns_:

**boolean**

| Value | Condition                                    |
| ----- | -------------------------------------------- |
| true  | When video for the given user id is enabled  |
| false | When video for the given user id is disabled |

</collapsible>

</method>

---

<method>
<subtitle>

useIsVideoEnabled: (uid: [UserID](a) ) => [VideoCallInterface](a)

</subtitle>

Checks the video state for a given uid and returns true/false

Use the code example given below showcasing reconstruction of the default video call ui as a guide.

```js
import React from "react";
import { View } from "react-native";
import { installFPE } from "fpe-api/install";
import {
  ParticipantsView,
const VideoCall: React.FC = () => {
  const { sidePanel } = useSidePanel();
  return (
    <View style={{ flex: 1, flexDirection: "column", overflow: "hidden" }}>
      <Navbar></Navbar>
      <View
        style={{
          flex: 12,
          flexDirection: "row",
        }}
      >
      </View>
      <Controls />
    </View>
  );
};

const data = installFPE({
  components: {
    videoCall: VideoCall,
  },
});

export default data;
```

<br/>

### _Returns_:

<br/>

<collapsible>

### boolean

| Value | Condition                                    |
| ----- | -------------------------------------------- |
| true  | When video for the given user id is enabled  |
| false | When video for the given user id is disabled |

</collapsible>

</method>

---

<method>
<subtitle>

useButtonTemplate: () => {startRecording, stopRecording, isRecordingActive, setRecordingActive}

</subtitle>

You can override the entire VideoCall screen by pasing in a [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78) under the `videoCall` key to the `Components Api Object`

To reuse parts of default video call ui you can import them from the [SubComponents Library](a) accessible under the `fpe-api` module.

<collapsible>
Use the code example given below showcasing reconstruction of the default video call ui as a guide.

```js
import React from "react";
import { View } from "react-native";
import { installFPE } from "fpe-api/install";
import {
  ParticipantsView,
  Chat,
  Navbar,
  SettingsView,
  Controls,
  VideoComponent,
  useSidePanel,
} from "fpe-api";
import { SidePanelType } from "../src/subComponents/SidePanelEnum";

const VideoCall: React.FC = () => {
  const { sidePanel } = useSidePanel();
  return (
    <View style={{ flex: 1, flexDirection: "column", overflow: "hidden" }}>
      <Navbar></Navbar>
      <View
        style={{
          flex: 12,
          flexDirection: "row",
        }}
      >
        <VideoComponent />
        {/* Responsible for showing the user video feeds, something about layouts{ todo(adicyta) } */}
        {sidePanel === SidePanelType.Chat ? (
          <Chat />
        ) : sidePanel === SidePanelType.Settings ? (
          <SettingsView />
        ) : sidePanel === SidePanelType.Participants ? (
          <ParticipantsView />
        ) : (
          <></>
        )}
      </View>
      <Controls />
    </View>
  );
};

const data = installFPE({
  components: {
    videoCall: VideoCall,
  },
});

export default data;
```

</collapsible>
</method>
