import { Button, Text, View } from "react-native";

export function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>

      <Button title="Go to Settings" onPress={() => { }} />
    </View>
  )
}
