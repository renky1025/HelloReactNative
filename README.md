# HelloReactNative

#Set Up
OS X - This guide assumes OS X which is needed for iOS development.
Homebrew is the recommended way to install Watchman and Flow.
Install Node.js 4.0 or newer.
Install nvm with its setup instructions here. Then run nvm install node && nvm alias default node, which installs the latest version of Node.js and sets up your terminal so you can run it by typing node. With nvm you can install multiple versions of Node.js and easily switch between them.
New to npm?
brew install watchman. We recommend installing watchman, otherwise you might hit a node file watching bug.
brew install flow, if you want to use flow.
We recommend periodically running brew update && brew upgrade to keep your programs up-to-date.
#Quick start 
Install the React Native command line tools:

$ npm install -g react-native-cli
NOTE: If you see the error, EACCES: permission denied, please run the command: sudo npm install -g react-native-cli.

Create a React Native project:

$ react-native init AwesomeProject
To run the iOS app:

$ cd AwesomeProject
Open ios/AwesomeProject.xcodeproj and hit run in Xcode.
Open index.ios.js in your text editor of choice and edit some lines.
Hit ⌘-R in your iOS simulator to reload the app and see your change!
Note: If you are using an iOS device, see the Running on iOS Device page.

To run the Android app:

$ cd AwesomeProject
$ react-native run-android
Open index.android.js in your text editor of choice and edit some lines.
Press the menu button (F2 by default, or ⌘-M in Genymotion) and select Reload JS to see your change!
Run adb logcat *:S ReactNative:V ReactNativeJS:V in a terminal to see your app's logs
