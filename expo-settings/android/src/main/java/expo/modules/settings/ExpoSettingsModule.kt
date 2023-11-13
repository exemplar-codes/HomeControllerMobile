package expo.modules.settings

import android.content.Context
import android.content.SharedPreferences
import android.util.Log
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoSettingsModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoSettings")

    Events("onChangeTheme")

    Function("setTheme") { theme: String ->
      Log.d("ExpoSettingsModule", "Setting theme: $theme")

      getPreferences().edit().putString("theme", theme).commit()
      this@ExpoSettingsModule.sendEvent("onChangeTheme", bundleOf("theme" to theme))
    }

    Function("getTheme") {
      Log.d("ExpoSettingsModule", "Log from the app"); // simple log

      val theme = getPreferences().getString("theme", "system") ?: "system"
      Log.d("ExpoSettingsModule", "Getting theme: $theme")
      return@Function getPreferences().getString("theme", "system")
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".settings", Context.MODE_PRIVATE)
  }
}
