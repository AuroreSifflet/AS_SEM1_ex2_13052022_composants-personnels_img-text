import { StyleSheet, View, Text, Image } from "react-native";

const CustomImageText = (props) => {
  const { textImg, urlImg } = props;

  return (
    <View style={styles.viewPrincipal}>
      <View style={styles.view1}>
        <Image style={styles.view1Image} source={urlImg} />
      </View>
      <View style={styles.view2}>
        <Text style={styles.view2Text}>{textImg}</Text>
      </View>
    </View>
  );
};
// mes styles container
const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    flexDirection: "row",
  },
  view1: {
    flex: 3,
  },
  view2: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  view2Text: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
  },
  view1Image: {
    width: "100%",
    height: 650,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 5,
  },
});

export default CustomImageText;
