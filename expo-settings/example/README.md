[Expo - Tutorial: Creating a native module](https://docs.expo.dev/modules/native-module-tutorial/)

## Logging from native module

We can print logs in native code (Kotlin for example) too.

Unfortunately, these "native" logs can be logged in a separate terminal only,
so they can't be shown in JS terminal logs (i.e. metro).

Steps:

1. Add the native code (Kotlin):

   ```kt
   import android.util.Log // import

   Log.d("ExpoSettingsModule", "Setting theme: $theme") // usage, added inside some function
   // the first param is generally the same as the class this code is being written in
   ```

2. Build the app and start it on the emulator/physical device
3. Run `adb logcat -s ExpoSettingsModule:D` in the terminal. The part before colon might change, or there could be multiple places that are logging something.
4. Run the app and trigger the event. You can see the logs

Note:

- Run the app in only one device (either the emulator or the physical device), since `adb` throws an error if multiple device log simultaneously. Fix is to close the emulator or close the app on the physical device.
