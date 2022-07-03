---
sidebar_position: 1
---

# Notification issues

## What is it about?

For some OEMs (eg: Xiaomi, Oppo etc.), implements a _little too aggresive_ battery optimization feature. Crucial features like **Autostart** (some OEMs called it **Auto-launch**) for some apps are disabled by default. In that case, prayer notification can only be shown for a while, or worse, cannot be shown to you altogether.

:::note

Only applicable for **Android**

:::

## Well, so how to fix it?

Fortunately, there is an easy workaround that you can do to overcome this issue. Just follow the instruction below (Tested on Redmi Note 11, should be similar on other models as well).

### Method 1: Onboarding screen

This method is applicable for **new installation** only, as the onboarding screen only shows once on the first app open. If the app is already installed, please try [method 2](#method-2-notification-troubleshooting-page) or [3](#method-3-app-settings) below.

#### Steps

1. Open app
1. On the **Select notification preferences** screen, you should notice the yellow admonitions at the bottom.
1. Tap on **Open Settings** button.
1. On the Autostart setting page, search for **Malaysia Prayer Time MPT** app (or **Waktu Solat Malaysia MPT** if your device's language is set to Malay). Then, enable the switch.
1. Done, you can exit the setting page and continue where you left off in the app.

#### GIF Demo

![Method 1 GIF demo](/img/troubleshoot/notif/gif-notification-onboarding.gif)

### Method 2: Notification Troubleshooting page

#### Steps

1. Open the **Malaysia Prayer Time** app.
1. Go to **menu**, and the **Settings**.
1. Tap on **Notification Settings**.
1. Under troubleshooting, click the **Fix notification not working on some devices**.
1. Tap **Open App Setting**.
1. In the Permissions section, you'll find the **Autostart** switch. Toggle the switch to on.
1. Finish. That's it.

### Method 3: App settings

This is similar to [method 2](#method-2-notification-troubleshooting-page) above, the difference is the way we navigate to the App Settings page to toggle the Autostart switch.

#### Steps

1. Open your phone **Settings** app.
1. Click on **Apps** > **Manage apps**.
1. Find for Malaysia Prayer Time app.
1. Tap on it, and find the **Autostart** setting to turn it on.

:::tip

Tap and hold on the app icon to quickly open the **App Setting**

![Open app setting from launcher icon](/img/troubleshoot/notif/gif-notification-alternative-2.gif)

:::

## Remarks

For **older MIUI** versions, please refer to this [article](https://nine-faq.9folders.com/articles/8772-how-to-manage-autostart-service-on-the-xiaomi-devices).

For instructions for **other phones model**, kindly refer to this [article](https://support.qiscus.com/hc/en-us/articles/360016430973-Why-Aren-t-Push-Notifications-Sometimes-Working-on-My-Android-App-) by qiscus.

There are a few open issues on GitHub related to the notification issues. There are cases like delayed azan time etc. I tried my best to deliver a bug-free experience to the users but sometimes there are a few things that my knowledge is limited to. Therefore, I would like to seek help from **developers** out there to give some input or help mitigate those issues.

- https://github.com/iqfareez/app_waktu_solat_malaysia/issues/89
- https://github.com/iqfareez/app_waktu_solat_malaysia/issues/115
- and more

_Originally posted at https://bit.ly/mpt-fix-notif_
