 import { View, Text, StyleSheet } from "react-native";
import UserProfile from "./screens/UserProfile";
// import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
  <View style={styles.container}>
    {/* <HomeScreen /> */}
    <UserProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
});