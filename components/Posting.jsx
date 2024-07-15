import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { postData } from "../api/data";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Post = ({ item }) => {
  const [heart, setHeart] = useState(false);
  const [count, setCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showmore, setShowmore] = useState(false);
  useEffect(() => {
    const checkTextLength = () => {
      const numberOfLines = item.caption.split("\n").length;
      setShowmore(numberOfLines >= 1);
    };
    checkTextLength();
  }, [item.caption]);
  const handlePressHeart = () => {
    setHeart(!heart);
    setCount(!heart ? count + 1 : count - 1);
  };
  return (
    <View className="w-full rounded-xl mb-2 bg-white shadow-lg">
      <View className="flex-row p-2 gap-x-2">
        <Image
          source={{ uri: item.profile }}
          style={{ width: wp(14), height: wp(14) }}
          className="rounded-md mt-1"
          contentFit="cover"
        />
        <View>
          <Text style={{ fontSize: hp(2) }} className="font-psemibold">
            {item.name}
          </Text>
          <Text style={{ fontSize: hp(1.3) }} className=" text-gray-500">
            {item.calendar}
          </Text>
          <View className="flex-row items-center space-x-1">
            <Ionicons name="location" size={hp(1.3)} color="gray" />
            <Text style={{ fontSize: hp(1.3) }} className=" text-gray-500">
              {item.location}
            </Text>
          </View>
        </View>
      </View>
      <Pressable onPress={() => setIsExpanded(!isExpanded)}>
        <Text
          className="px-2 text-ellipsis"
          numberOfLines={isExpanded ? null : 2}
        >
          {item.caption}
        </Text>
        {showmore && !isExpanded && (
          <Text className="font-pregular px-2 text-sm text-gray-600">
            see more
          </Text>
        )}
      </Pressable>

      <View className="w-full my-1" style={{ height: hp(27) }}>
        <Image
          className="h-full w-full"
          contentFit="cover"
          source={{ uri: item.url }}
        />
        <View className="w-full h-full bg-black/10 absolute top-0 left-0"></View>
      </View>
      <Text className="mx-4 text-gray-500 font-semibold text-md">
        {count}
        {count <= 1 ? " like" : " likes"}
      </Text>
      <Pressable
        className="flex-row space-x-2 items-center mx-3 my-2"
        onPress={handlePressHeart}
      >
        <Ionicons
          name={heart ? "heart" : "heart-outline"}
          size={hp(4)}
          color="gray"
        />
        <Ionicons name="chatbubble-outline" size={hp(3.6)} color="gray" />
      </Pressable>
    </View>
  );
};
const Posting = () => {
  return (
    <View className="my-2">
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post item={item} />}
      />
    </View>
  );
};

export default Posting;
