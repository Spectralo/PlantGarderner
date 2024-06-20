import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ backgroundColor: theme[colorScheme].background }}>
      <Button color={theme[colorScheme].primary}>Themed button</Button>
    </View>
  );
}
