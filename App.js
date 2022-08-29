import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const initialState = {
    email: "",
    password: "",
  };

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );
  console.log("platforma:", Platform.OS);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log("width", width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyBoardHide = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
    console.log("state:", state);
    setState(initialState);
  };

  const loadAppFonts = async () => {
    await Font.loadAsync({
      "Dancing-Regular": require("./assets/fonts/DancingScript-Medium.ttf"),
      "Inter-Black": require("./assets/fonts/DancingScript-SemiBold.ttf"),
    });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAppFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./screens/photo-BG.jpg")}
          style={styles.image}
        >
          <StatusBar style="auto" />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: showKeyboard ? 40 : 150,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Welcom!</Text>
                <Text style={styles.headerTitle}>Sing In</Text>
              </View>
              <View>
                <Text style={styles.inputTitle}>EMAIL</Text>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  // onChangeText={onChangeNumber}
                  value={state.email}
                  placeholder="useless placeholder"
                  keyboardType="numeric"
                  onFocus={() => {
                    setShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  // onChangeText={onChangeNumber}
                  value={state.password}
                  placeholder="useless placeholder"
                  keyboardType="numeric"
                  secureTextEntry={true}
                  onFocus={() => {
                    setShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={keyBoardHide}
              >
                <Text style={styles.btnTitle}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    // resizeMode: "cover",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fffafa",
    borderRadius: 6,
    height: 40,
    color: "#fff",
  },
  form: {
    marginHorizontal: 40,
    // justifyContent: "space-around",
    // justifyContent: "flex-end",
  },
  inputTitle: {
    color: "#fffafa",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "Inter-Black",
  },
  btn: {
    backgroundColor: "#7fff00",
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "#1e90ff",
        borderColor: "transparent",
      },
      android: {
        backgroundColor: "#7fff00",
        borderColor: "#1e90ff",
      },
    }),
  },
  btnTitle: {
    color: "#fffafa",
    fontSize: 18,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
    color: "#fffafa",
    fontFamily: "Inter-Black",
  },
});
