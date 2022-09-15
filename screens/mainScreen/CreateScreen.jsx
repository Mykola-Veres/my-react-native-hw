import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";

const CreateScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  console.log("camera", camera);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  async function takePicture() {
    // setType((current) =>
    //   current === CameraType.back ? CameraType.front : CameraType.back
    // );
    const photo = await camera.takePictureAsync();
    console.log("photo", photo);
    setPhoto(photo.uri);
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log("location", location);
    console.log("location", location.coords.latitude);
    console.log("location", location.coords.longitude);
  }

  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };

  return (
    <View style={styles.conreiner}>
      <Camera style={styles.camera} type={type} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 200, borderRadius: 10 }}
            />
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Click Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.sendPhotoContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "#ffe4c4" }}
          onPress={sendPhoto}
        >
          <Text style={styles.text}>Send photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conreiner: { flex: 1 },
  camera: { alignItems: "center", height: 300, marginTop: 50 },
  buttonContainer: {
    marginTop: 200,
  },
  button: {
    borderWidth: 2,
    borderColor: "#d2691e",
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#d2691e" },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  sendPhotoContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateScreen;
