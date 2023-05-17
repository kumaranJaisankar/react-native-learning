import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

function ViewImage(props) {
  const { setVisible } = props;
  //   const onPressing = () => {
  //     console.log("clicked");
  //     setVisible(false);
  //   };
  return (
    <View style={styles.imgContainer}>
      <View style={styles.splContainer}>
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => setVisible(true)}
        >
          <Text style={{ color: "white" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => alert("name")}
        >
          <Text style={{ color: "white" }}>Back</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.deleteBtn}></View> */}
      {/* <Button
        color="green"
        style={{ color: "red" }}
        title="Back"
        // onPress={() => console.log("cki")}
      /> */}
      {/* <TouchableOpacity style={styles.createBtn} onPress={() => alert("name")}>
        <Text style={{ color: "white" }}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:}} onPress={() => alert("name")}>
        <Text style={{ color: "white" }}>Back</Text>
      </TouchableOpacity> */}

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    backgroundColor: "#000",
  },
  deleteBtn: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  createBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  splContainer: {
    zIndex: 2,
    position: "relative",
    top: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ViewImage;
