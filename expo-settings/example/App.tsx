import * as Settings from "expo-settings";
import * as React from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [theme, setTheme] = React.useState<string>(Settings.getTheme());
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    console.log("Ran from useEffect");
    return () => subscription.remove();
  }, [setTheme]);

  // Toggle between dark and light theme
  const nextTheme = theme === "dark" ? "light" : "dark";

  const onPress = () => {
    console.log("Button ran");
    Settings.getTheme(); // deliberately doing this to trigger native log code
    Settings.setTheme(nextTheme);
    setCount((curr) => curr + 1);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Theme: {Settings.getTheme()}</Text>
      <Button title={`Set theme to ${nextTheme}`} onPress={onPress} />
      <Text>Count: {count}</Text>
    </View>
  );
}
