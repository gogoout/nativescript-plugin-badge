import {Notification} from './badge.common';
import {device} from 'tns-core-modules/platform';

const sdkVersion = parseFloat(device.sdkVersion);

export function requestPremissions(): Promise<boolean> {
    return new Promise((resolve, reject) => {
        if (sdkVersion >= 10) {
            UNUserNotificationCenter
                .currentNotificationCenter()
                .requestAuthorizationWithOptionsCompletionHandler(
                    UNAuthorizationOptions.Alert | UNAuthorizationOptions.Badge | UNAuthorizationOptions.Sound,
                    (granted: boolean, error: NSError) => resolve(granted)
                );
        }
        else {
            const types = UIApplication.sharedApplication.currentUserNotificationSettings.types | UIUserNotificationType.Alert | UIUserNotificationType.Badge | UIUserNotificationType.Sound;
            if (sdkVersion >= 8) {
                const userSettings = UIUserNotificationSettings.settingsForTypesCategories(types, null);
                UIApplication.sharedApplication.registerUserNotificationSettings(userSettings);
                resolve(true);
            }
            else {
                UIApplication.sharedApplication.registerForRemoteNotificationTypes(types);
                resolve(true);
            }
        }
    });
}

export function setBadge(badge: number) {
    UIApplication.sharedApplication.applicationIconBadgeNumber = badge;
}

export function removeBadge() {
    UIApplication.sharedApplication.applicationIconBadgeNumber = 0;
}

export function applyNotification(notification: Notification, badge: number, channelId?: string) {
    // do nothing
}