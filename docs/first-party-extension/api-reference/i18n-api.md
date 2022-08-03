---
sidebar_label: Internationalization API
sidebar_position: 2
description: Customize the text content of your application using this API
title: i18n API
keywords: [i18nInterface, i18nDataInterface]
sidebar_custom_props: { icon: "i18" }
---

Customize the text content of your application using this API. The App Builder by default provides default values for customize the text content of your application using this API. The App Builder by default provides default values for

## i18n : [i18nInterface](#i18ninterface)

Customize the text content of your application using this API. The App Builder by default provides default values for

### _API_:

#### i18nInterface

| Key    | Type                                | Description                                                              |
| ------ | ----------------------------------- | ------------------------------------------------------------------------ |
| locale | string                              | Unique string identifier to specify a language.                          |
| label? | string                              | Language name to display in the UI dropdown                              |
| data   | [i18nDataInterface](#i18ninterface) | This object should contain the necessary translations for a given locale |

#### i18nDataInterface

| Key                         | Type                                                                                        | Description                                      | Defaults                            |
| --------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------- |
| meetingNameInputPlaceholder | [BaseI18nType](#basei18ntype)                                                               | Placeholder text for the name input field        | Name your meeting                   |
| pstnToggle                  | [ConditionalStringI18nType](a)                                                              | Label for the PSTN controls toggle               | Use PSTN (Join by dialing a number) |
| joinRoomButton              | [BaseI18nType](#basei18ntype)<[JoinRoomButtonTextInterface](#joinroombuttontextinterface)/> | Label for the join room button on precall screen | Join room                           |

<br/>

> App Builder ships with `en-us` out of the Box. Providing an object with en-us as it's locale will replace the default strings

> When there are two or more translations in the App(including the default `en-us`), A dropdown language selector will be display in both the precall screen as well as the settings panel.

<br/>

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

## BaseI18nType : string

</method>

<method>

## DynamicI18nType : (label: string) => string

</method>

<method>

## JoinRoomButtonTextInterface

| Key   | Type            | Description                                                 |
| ----- | --------------- | ----------------------------------------------------------- |
| ready | boolean         | Boolean that indicates whether a room is ready to be joined |
| role  | [ClientRole](a) | Role of the user trying to join                             |

</method>
</api>
