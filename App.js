import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./screens/photo-BG.jpg")}
        style={styles.image}
      >
        <StatusBar style="auto" />
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>EMAIL</Text>
            <TextInput
              style={styles.input}
              textAlign="center"
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="useless placeholder"
              keyboardType="numeric"
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
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
            <Text style={styles.btnTitle}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
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
    resizeMode: "cover",
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
  },
  inputTitle: {
    color: "#fffafa",
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#7fff00",
    color: "#7fff00",
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },
  btnTitle: {
    color: "#fffafa",
    fontSize: 18,
  },
});
