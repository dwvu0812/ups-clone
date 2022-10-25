import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Icon } from "@rneui/themed";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigator/RootNavigator";

export type ModalScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  StackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProps>();
  const {params: {name, userId}} = useRoute<ModalScreenRouteProp>();

  return (
    <SafeAreaView style={tw("mt-5")}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw("absolute right-5 top-5 z-10")}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>
      <View>
        <View>
          <Text>{name}</Text>
          <Text>{userId}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;
