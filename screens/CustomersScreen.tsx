import { useQuery } from "@apollo/client";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "@rneui/base";
import { Input } from "@rneui/themed";
import React, { useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import { GET_CUSTOMERS } from "../graphql/queries";
import { RootStackParamList } from "../navigator/RootNavigator";
import { TabStackParamList } from "../navigator/TabNavigator";

export type CustomersNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

function CustomersScreen() {
  const tw = useTailwind();
  const navigation = useNavigation<CustomersNavigationProps>();
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  console.log(data);
  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        style={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by customer"
        containerStyle={tw("bg-white pt-5 pb-0 px-10")}
        value={input}
        onChangeText={setInput}
      />
    </ScrollView>
  );
}

export default CustomersScreen;
