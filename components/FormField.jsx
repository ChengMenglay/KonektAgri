import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
const FormField = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyle,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={` space-y-2 ${otherStyle}`}>
      <Text
        className={`text-white font-semibold ${otherStyle}`}
        style={{ fontSize: hp(2.2) }}
      >
        {title}
      </Text>
      <View className="bg-white w-full h-14 border-2 border-white px-4 rounded-lg flex-row items-center">
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          className="flex-1 text-base"
          secureTextEntry={title == "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={hp(2.2)}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
