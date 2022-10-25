import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ModalScreen from "../screens/ModalScreen";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: any };
};

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Main"
          component={TabNavigator}
        ></RootStack.Screen>
      </RootStack.Group>
      <RootStack.Group
        screenOptions={{
          presentation: "modal"
        }}
      >
        <RootStack.Screen
          name="MyModal"
          component={ModalScreen}
          options={{headerShown: false}}
        ></RootStack.Screen>
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
