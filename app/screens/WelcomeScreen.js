import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import ViewImage from "./ViewImage";
import color from "../config/color";

function WelcomeScreen(props) {
  const [isVisible, setVisible] = React.useState(true);
  return (
    <>
      {isVisible && (
        <ImageBackground
          style={styles.background}
          source={require("../assets/background.jpg")}
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/logo-red.png")}
            />
            <Text style={{ color: "red" }}>Sell What You Don't Need</Text>
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => setVisible(!isVisible)}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
              Clik to view
            </Text>
          </TouchableOpacity>
          {/* <Button style={styles.loginBtn} color="#fc5c65" title="View Image" /> */}
          <View style={styles.registerBtn}></View>
        </ImageBackground>
      )}
      {!isVisible && <ViewImage setVisible={setVisible} />}
    </>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 3,
  },
  loginBtn: {
    backgroundColor: color.primary,
    width: "90%",
    height: 80,
    borderRadius: 8,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  registerBtn: {
    backgroundColor: color.secondary,
    width: "100%",
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,

    alignItems: "center",
  },
});
export default WelcomeScreen;
