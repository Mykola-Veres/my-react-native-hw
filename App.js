import { useEffect, useState } from "react";
import {} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import db from "./firebase/config";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(false);

  db.auth().onAuthStateChanged((user) => {
    console.log("onAuthStateChanged", user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

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
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
