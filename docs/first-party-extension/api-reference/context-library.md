---
sidebar_label: App state and Context Library
sidebar_position: 4
description: Context Library
title: Context Library
keywords: [MeetingInfoContextInterface, LayoutContextInterface]
sidebar_custom_props: { icon: "code" }
---

The context library exposes various contexts used in app builder. All contexts are wrapped around a selector hook that allows for selective subscribing of data.

Usage:

```jsx
import { useAppBuidlerContextName } from "fpe-api";

const MyReactComponent = () => {
  const AppBuidlerContextDataElement = useAppBuidlerContextName((allData) => {
    return allData.relevantData;
  });

  return <>{AppBuidlerContextDataElement}</>;
};
```

<method>

<subtitle>

## RecordingContext: RecordingContextInterface

</subtitle>

Some literature.

<collapsible>

### RecordingContextInterface

| Key                        | Type                                            | Description                                                                                                         |
| -------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| isRecordingActve<br/><br/> | boolean                                         | Flag to indicate if cloud recording is active in the application                                                    |
| startRecording<br/>        | () => void                                      | Starts cloud recording                                                                                              |
| stopRecording              | () => void                                      | Stops cloud recording                                                                                               |
| setRecordingActive         | React.Dispatch<React.SetStateAction<boolean\>\> | Start/Stop cloud recording.<br/>Example<br/>\`setRecordingActive(false)\`<br/>\`setRecordingActive(curr => !curr)\` |

</collapsible>

</method>
