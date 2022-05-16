import { StyleSheet, View } from "react-native";
import CustomImageText from "./components/CustomImageText";

export default function App() {
  let imgVar = require("./assets/rover.jpg");
  return (
    <View style={styles.container}>
      <CustomImageText urlImg={imgVar} textImg="le rover Opportunity" />
    </View>
  );
}

// mes styles container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
