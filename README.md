# VERSION CHECKER

This code is part of a project for the MAS-RAD

This code is the mobile part of a combo mobile device - webservice

You can find the webservice here: https://github.com/olivierfrancey/version-checker-server

## Versions
* v 0.0.1 : initial version

## Technologie

The app is developped on the framework ionic-cordova

## Build the App
Build the app and push it on your device for developpment with the followed
line:
```bash
$ ionic cordova run android --device
```
or for iOS
```bash
$ ionic cordova run ios --device
```
However it's better to build iOS app via X-Code.

Build the app and create an .apk file
```bash
$ ionic cordova build --release android
```

A built version of the app can be found in
```bash
/android-built/android-debug.apk
```


## TODO

* Authorisation server side
* Make secure device data storage