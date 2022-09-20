---
sidebar_label: Test Page
draft: false
---

# Subtitle Test Page - To be removed

<subtitle>

## ChatBubble : [React.ComponentType](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/207516039691b23e567fa585c9d1aa3970ec3404/types/react/v16/index.d.ts#L78)<[ChatBubbleProps](#chatbubbleprops)\>

</subtitle>

<!-- <subtitle>

## videoCall : VideoCallComponent : VideoCallInterface

</subtitle> -->

<subtitle>

## videoCall : VideoCallComponent : VideoCallInterface

</subtitle>

---

<image alt="Participant Panel" darkImageSrc="api/Participant Panel.png"  />

old format1

---

## useRecordingContext : [createHook](/first-party-extension/api-reference/globals#createhook-tcontext-reactcontextt)<[RecordingContextInterface](#recordingcontextinterface)\>

new format with typedoc convention (** Selector can be documented in Types **)

## useRecordingLatest (selector?: [Selector](/first-party-extension/api-reference/globals#renderinterface)) : [RecordingContextInterface](/first-party-extension/api-reference/context-library#recordingcontextinterface)

---

### Image Slider

<imageSlider alt="chatBubble"  darkImageSrc1="api/ChatBubble.png"  darkImageSrc2="api/TestChatBubble.png"  />

---

### Codeblock 1

```tsx {13-17}
import React from "react";
import { View, Text } from "react-native";
import { installApi } from "api/install";

const MyComponent: React.FC = () => {
  return (
    <View>
      <Text>My Component</Text>
    </View>
  );
};

const data = installApi({
  components: {
    Header: HeaderComponent,
  },
});

export default data;
```

### Codeblock 2

```tsx {5-7}
import React from "react";
import { View, Text } from "react-native";
import { installApi } from "api/install";

const MyComponent: React.FC = () => {
  return (
    <View>
      <Text>My Component</Text>
    </View>
  );
};

const data = installApi({
  components: {
    Header: HeaderComponent,
  },
});

export default data;
```

### Codeblock 3

```tsx {15-17}
import React from "react";
import { View, Text } from "react-native";
import { installApi } from "api/install";

const MyComponent: React.FC = () => {
  return (
    <View>
      <Text>My Component</Text>
    </View>
  );
};

const data = installApi({
  components: {
    Header: HeaderComponent,
  },
});

export default data;
```

### Codeblock 4

```tsx {10-11}
import React from "react";
import { View, Text } from "react-native";
import { installApi } from "api/install";

const MyComponent: React.FC = () => {
  return (
    <View>
      <Text>My Component</Text>
    </View>
  );
};

const data = installApi({
  components: {
    Header: HeaderComponent,
  },
});

export default data;
```

### Codeblock 5

```tsx {8-10}
import React from "react";
import { View, Text } from "react-native";
import { installApi } from "api/install";

const MyComponent: React.FC = () => {
  return (
    <View>
      <Text>My Component</Text>
    </View>
  );
};

const data = installApi({
  components: {
    Header: HeaderComponent,
  },
});

export default data;
```

check if all codeblock get auto scrolled to highlighted section

### Codeblock 6

```tsx {15-17}
import React from "react";
import { View, Text } from "react-native";
import { installApi } from "api/install";

const MyComponent: React.FC = () => {
  return (
    <View>
      <Text>My Component</Text>
    </View>
  );
};

const data = installApi({
  components: {
    Header: HeaderComponent,
  },
});

export default data;
```

<!-- <subtitle>

## i18n : [i18nInterface](#i18ninterface)\[\]

</subtitle>  -->
