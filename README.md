# Nativescript-plugin-badge

[![npm](https://img.shields.io/npm/v/nativescript-plugin-badge.svg)](https://www.npmjs.com/package/nativescript-plugin-badge)
[![npm](https://img.shields.io/npm/dt/nativescript-plugin-badge.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-plugin-badge)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This plugin will allow you to set badge notification.

## Installation

```javascript
tns plugin add nativescript-plugin-badge
```

## Screenshots
![IOS](https://raw.githubusercontent.com/gogoout/nativescript-plugin-badge/master/screenshots/ios.png)

![Android](https://raw.githubusercontent.com/gogoout/nativescript-plugin-badge/master/screenshots/android.png)

## Usage 

	```typescript
    import {requestPremissions, setBadge, removeBadge} from 'nativescript-plugin-badge';
    
    setBadge(5);
    
    removeBadge();
    ```

## Platform controls used:
Android |   iOS
---------- | -------
[ShortcutBadger](https://github.com/leolin310148/ShortcutBadger) | Native


## API

| Function | Description |
| --- |  --- |
| requestPremissions():Promise<boolean> | Will return if user granted the premission or not. See description below | 
| setBadge(badge:number) | set badge |
| removeBadge() | clear badge |
| applyNotification(notification: Notification, badge: number, channelId?: string) | See description below |
    
## Supported Devices (Android)
Please check the [library](https://github.com/leolin310148/ShortcutBadger) used.

## Premission
Premission is only required in IOS, in android, the promise will always resolved as true.
Please note that if you have already used plugin handled premissions, like [Firebase](https://github.com/EddyVerbruggen/nativescript-plugin-firebase), [Local Notification](https://github.com/EddyVerbruggen/nativescript-local-notifications), then there is no need to call this function again.

## Miui(Xiaomi device) support
Since from Xiaomi changed the way to show badge by notification from Miui 6.

`setBadge` will not support Xiaomi devices.

If you want to support badges for Xiaomi, you have to send notifications. And use

```typescript
applyNotification({title:'title',body:'body'}, 5, 'channel id');
```

channelId is an optional param and only available on API Level 26. And also will **need you to setup the channel**. See this [example](https://stackoverflow.com/a/53706086) here.

## Drawback
The ShortcutBadger used for android use the MainActivity name to identify the app. Which will make all the Nativescript apps with the default activity('com.tns.NativeScriptActivity') get setted.
That's the reason for the android screenshot --  all the nativescript apps have the same badge 5.
The solution is to use a custom main activity as [described here](https://docs.nativescript.org/core-concepts/android-runtime/advanced-topics/extend-application-activity)
    
## License

[MIT](http://gogoout.mit-license.org/)
