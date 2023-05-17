import { useState } from "react";
import {
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImage from "./app/screens/ViewImage";

export default function App() {
  const [isVisible, setVisible] = useState(false);

  console.log(useDeviceOrientation());
  return <WelcomeScreen />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    gap: 10,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    margin: 20,
    height: 200,
    width: 200,
  },
  txt: {
    color: "white",
    marginBottom: 20,
  },
});

// <SafeAreaView style={styles.container}>
//   <Text numberOfLines={2} style={styles.txt}>
//     hellow, kumaran wellcome to this react native app developent progress
//     here you can develop a top nitch apps like facebook, pintrist etc ...
//   </Text>
//   <StatusBar style="auto" />
//   {isVisible && (
//     <TouchableOpacity onPress={() => console.log("triggred")}>
//       <Image
//         blurRadius={0}
//         fadeDuration={2000}
//         style={styles.img}
//         src="https://picsum.photos/200/300"
//       />
//     </TouchableOpacity>
//   )}
//   <TouchableNativeFeedback>
//     <Button
//       color="green"
//       title="Click green"
//       onPress={() =>
//         Alert.alert("Do you want to logout", "My Discription", [
//           { text: "yes", onPress: () => console.log("yes") },
//           { text: "No", onPress: () => console.log("no") },
//         ])
//       }
//     />
//   </TouchableNativeFeedback>
//   <Button
//     style={{ backgroundColor: "red" }}
//     color="red"
//     title="Click Red"
//     onPress={() => setVisible(!isVisible)}
//   />
// </SafeAreaView>
