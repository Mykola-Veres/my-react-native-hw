import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
} from "react-native";

export default function App() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  console.log("platforma:", Platform.OS);

  const keyBoardHide = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };
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
              style={{ ...styles.form, marginBottom: showKeyboard ? 40 : 200 }}
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
                  // value={number}
                  placeholder="useless placeholder"
                  keyboardType="numeric"
                  onFocus={() => {
                    setShowKeyboard(true);
                  }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  textAlign="center"
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="useless placeholder"
                  keyboardType="numeric"
                  secureTextEntry={true}
                  onFocus={() => {
                    setShowKeyboard(true);
                  }}
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
    // alignItems: "center",
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
  },
});
