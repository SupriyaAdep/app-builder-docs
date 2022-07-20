---
sidebar_label: Internationalization API
sidebar_position: 2
description: Customize the text content of your application using this API
title: i18n API
keywords: [i18nInterface, i18nDataInterface]
sidebar_custom_props: { icon: "i18" }
---

Customize the text content of your application using this API. The App Builder by default provides default values for customize the text content of your application using this API. The App Builder by default provides default values for

<subtitle>

## i18n : i18nInterface[]

</subtitle>

Customize the text content of your application using this API. The App Builder by default provides default values for

### _API_:

<collapsible>

### i18nInterface

| Key    | Type                   | Description                                                              |
| ------ | ---------------------- | ------------------------------------------------------------------------ |
| locale | string                 | Unique string identifier to specify a language.                          |
| label? | string                 | Language name to display in the UI dropdown                              |
| data   | [i18nDataInterface](a) | This object should contain the necessary translations for a given locale |

</collapsible>

<br/>

> App Builder ships with `en-us` out of the Box. Providing an object with en-us as it's locale will replace the default strings

> When there are two or more translations in the App(including the default `en-us`), A dropdown language selector will be display in both the precall screen as well as the settings panel.

### _Usage_:

Customize the text content of your application using this API. The App Builder by default provides default values for

```js
import React from "react";
import { installFPE } from "fpe-api/install";

// todo(adicyta)
const BottomBar = () => {
  return <></>;
};

const userCustomization = installFPE({
  components: {
    videoCall: {
      bottomBar: BottomBar,
    },
  },
});

export default userCustomization;
```

---


<br/>

# TYPES

<api>
<method>

<subtitle>

## i18nDataInterface

</subtitle>

Data format for enterring translations

<collapsible>

some text

| Key                         | Type                      | Description                                     | Defaults                                                                                               |
| --------------------------- | ------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| meetingNameInputPlaceholder | BaseI18nType              | Placeholder text for the name input field       | Name your meeting                                                                                      |
| hostControlsToggle          | ConditionalStringI18nType | Label for the host controls toggle              |                                                                                                        |
| \-                          | \-                        |                                                 | Restrict Host Controls Everyone is a Host                                                              |
| \-                          | \-                        |                                                 | Restrict Host Controls Separate host link                                                              |
| pstnToggle                  | ConditionalStringI18nType | Label for the PSTN controls toggle              | Use PSTN (Join by dialing a number)                                                                    |
|                             |                           |                                                 | Need to check with vineeth - we are showing above string based on config json value not with any state |
| createMeetingButton         | BaseI18nType              | Button text for the Create Meeting Button       | Create Meeting                                                                                         |
| ?                           |                           |                                                 | Have a Meeting ID?                                                                                     |
| meetingIdInputPlaceholder   | BaseI18nType              | Placeholder text for the Meeting Id input field | Enter Meeting ID                                                                                       |
| enterMeetingButton          | BaseI18nType              | Button text for the Enter Meeting Button        | Enter Meeting                                                                                          |
| attendeeUrlLabel            | BaseI18nType              | Label for the attendee URL in share screen      | Attendee URL                                                                                           |
| hostUrlLabel                | BaseI18nType              | Label for the host URL in share screen          | Host URL                                                                                               |

</collapsible>
</method>

<method>

<subtitle>

## BaseI18nType: string

</subtitle>

</method>

<method>

<subtitle>

## DynamicI18nType: (label: string) => string

</subtitle>

</method>
</api>
