import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
const Item = ({ item }) => {
  return (
    <View
      style={{ width: wp(19), height: wp(23) }}
      className="mx-2 space-y-1 rounded-xl"
    >
      {item.type === "Icon" ? (
        <TouchableOpacity className="w-full h-[60%] bg-[#e5e5e5] rounded-xl justify-center items-center pr-1">
          <Ionicons name={item.icon} size={hp(3.5)} color="#fb8500" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity className="w-full h-[60%] py-2 bg-[#e5e5e5] rounded-xl justify-center items-center pr-1">
          <Image
            source={{ uri: item.icon }}
            className="w-full h-full"
            contentFit="contain"
          />
        </TouchableOpacity>
      )}

      <Text className="font-psemibold text-center" style={{ fontSize: hp(1.5) }}>
        {item.name}
      </Text>
    </View>
  );
};
const Category = ({ data }) => {
  return (
    <View className="px-4 my-3">
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

export default Category;
