import { useEffect, useState } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAppFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
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
    <>
      <RegistrationScreen></RegistrationScreen>
      {/* <LoginScreen></LoginScreen> */}
    </>
  );
}
