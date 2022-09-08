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

export default function LoginScreen({ navigation }) {
  const initialState = {
    email: "",
    password: "",
  };

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );
  const [activeStyle, setActiveStyle] = useState(false);

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

  return (
    <TouchableWithoutFeedback onPress={keyBoardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/photo-BG.jpg")}
          style={styles.image}
        >
          <StatusBar style="auto" />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                ...styles.formContainer,
              }}
            >
              <View
                style={{
                  ...styles.form,
                  marginBottom: showKeyboard ? 32 : 110,
                  width: dimensions,
                }}
              >
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Войти</Text>
                </View>
                <View style={{ marginTop: 33 }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: activeStyle ? "#FF6C00" : "transparent",
                      backgroundColor: activeStyle ? "#FFFFFF" : "#E8E8E8",
                    }}
                    textAlign="center"
                    value={state.email}
                    placeholder="Адрес электронной почты"
                    placeholderTextColor="#BDBDBD"
                    keyboardType="numeric"
                    onFocus={() => {
                      setShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: activeStyle ? "#FF6C00" : "transparent",
                      backgroundColor: activeStyle ? "#FFFFFF" : "#E8E8E8",
                    }}
                    textAlign="center"
                    value={state.password}
                    placeholder="Пароль"
                    placeholderTextColor="#BDBDBD"
                    keyboardType="numeric"
                    secureTextEntry={true}
                    onFocus={() => {
                      setShowKeyboard(true);
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btn}
                  onPress={keyBoardHide}
                >
                  <Text style={styles.btnTitle}>Войти</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginTop: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate("Registration");
                  }}
                >
                  <Text style={styles.btnOnLogin}>
                    Нет аккаунта? Зарегистрироваться
                  </Text>
                </TouchableOpacity>
              </View>
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
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    color: "#212121",
  },

  formContainer: {
    backgroundColor: "#fff",
    borderTopStartRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    marginHorizontal: 40,
    marginTop: 40,
  },
  btn: {
    height: 52,
    borderRadius: 100,
    marginTop: 43,
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
        backgroundColor: "#FF6C00",
        borderColor: "#1e90ff",
      },
    }),
  },
  btnTitle: {
    color: "#fffafa",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  btnOnLogin: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-Medium",
    letterSpacing: 0.01,
    lineHeight: 35,
  },
});
