import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import PostScreen from "./screens/mainScreen/PostScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { getHeaderTitle } from "@react-navigation/elements";

const StackAuth = createNativeStackNavigator();
const MainScreen = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <StackAuth.Navigator>
        <StackAuth.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <StackAuth.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
      </StackAuth.Navigator>
    );
  }
  return (
    <MainScreen.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options);
          return (
            <>
              <Text>Posts</Text>
              <MaterialIcons
                title={title}
                name="logout"
                size={36}
                color="black"
                navigation="Create"
              />
            </>
          );
        },
      }}
    >
      <MainScreen.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <SimpleLineIcons name="grid" size={24} color={color} />
          ),
        }}
        name="Posts"
        component={PostScreen}
      />
      <MainScreen.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo name="plus" size={36} color={color} />
          ),
          // tabBarActiveBackgroundColor: "#ea570e",
          tabBarItemStyle: {
            borderRadius: 20,
            height: 40,
            width: 70,
            backgroundColor: "#FF6C00",
          },
        }}
        name="Create"
        component={CreateScreen}
      />
      <MainScreen.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainScreen.Navigator>
  );
};
