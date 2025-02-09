import {
  SafeAreaView,
  Text,
  View,
  StatusBar,
  Platform,
  Image,
} from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./src/screens/Home";
import Splash from "./src/screens/Splash";
import Balance from "./src/screens/Balance";
import Login from "./src/screens/Login";
import RedeemECOpoints from "./src/screens/RedeemECOpoints";
import SustainableActions from "./src/screens/SustainableActions";
import SignUp from "./src/screens/SignUp";
import Index from "./src/screens/Index";
import CustomDrawer from "./src/components/CustomDrawer";
import EcoAffilliateRedeem from "./src/screens/EcoAffilliateRedeem";
import Notifications from "./src/screens/Notifications";
import { initializeApp } from "firebase/app";

const Tab = createBottomTabNavigator();
const barIos = Platform.OS === "ios" ? 61 : 50;
const Drawer = createDrawerNavigator();

function NavigationMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: RFValue(barIos),
          backgroundColor: "#2e882b",
          borderTopColor: "#2e882b",
          elevation: 0,
        },

        tabBarIcon: ({ focused }) => {
          let imagenes;
          if (route.name === "Balance") {
            imagenes = focused
              ? require("./assets/img/balanceActive.png")
              : require("./assets/img/balance.png");
          } else if (route.name === "SustainableActions") {
            imagenes = focused
              ? require("./assets/img/sustainableActionsActive.png")
              : require("./assets/img/sustainableActions.png");
          } else if (route.name === "RedeemECOpoints") {
            imagenes = focused
              ? require("./assets/img/redeemECOpointsActive.png")
              : require("./assets/img/redeemECOpoints.png");
          } else if (route.name === "Index") {
            imagenes = focused
              ? require("./assets/img/indexActive.png")
              : require("./assets/img/index.png");
          }
          return (
            <Image
              source={imagenes}
              style={{
                height: RFValue(34.4),
                width: RFValue(33.3),
                resizeMode: "contain",
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Balance" component={Balance} />
      <Tab.Screen name="SustainableActions" component={SustainableActions} />
      <Tab.Screen name="RedeemECOpoints" component={RedeemECOpoints} />
      <Tab.Screen name="Index" component={Index} />
    </Tab.Navigator>
  );
}

function DrawerApp() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "rgba(30, 82, 37, 0.95)",
          width: 300,
        },
      }}
    >
      <Drawer.Screen
        name="NavigationMenu"
        component={NavigationMenu}
        options={{
          swipeEnabled: false,
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "white",
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  // Credential firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBOy0Kxcon-6Rm3lqD-uthNjP2VPxE6ha8",
    authDomain: "economy-13078.firebaseapp.com",
    databaseURL: "https://economy-13078-default-rtdb.firebaseio.com",
    projectId: "economy-13078",
    storageBucket: "economy-13078.appspot.com",
    messagingSenderId: "774508910305",
    appId: "1:774508910305:web:08a86780b91e28f24a89a0",
    measurementId: "G-2905NCPSS8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Balance"
          component={Balance}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerApp"
          component={DrawerApp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavigationMenu"
          component={NavigationMenu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SustainableActions"
          component={SustainableActions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RedeemECOpoints"
          component={RedeemECOpoints}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EcoAffilliateRedeem"
          component={EcoAffilliateRedeem}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
