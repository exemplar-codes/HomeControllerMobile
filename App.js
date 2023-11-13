import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");

  const onPressSubmitHandler = async () => {
    // const output = eval(text)
    const evaluatedOutput = text;

    setIsLoading(false);
    setOutput(evaluatedOutput);
    setText("");
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={{
          alignSelf: "stretch",
          borderColor: "black",
          borderWidth: 1,
          padding: 16,
        }}
        value={text}
        placeholder="Enter bash command here"
        onChangeText={setText}
        onSubmitEditing={onPressSubmitHandler}
      />
      <Button title="Run command" onPress={onPressSubmitHandler} />
      <View
        style={{
          alignSelf: "flex-start",
          width: "100%",
        }}
      >
        <Text>Output {isLoading ? "Loading..." : ""}</Text>
        <Text
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 8,
            width: "100%",
            marginTop: 4,
            alignSelf: "flex-start",
            backgroundColor: "lightgray",
          }}
        >
          {output}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    margin: 8,
  },
});
