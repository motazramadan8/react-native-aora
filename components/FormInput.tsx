import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface IProps {
  title: string;
  type: "email" | "password" | "username";
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: "email-address" | "default";
  placeholder?: string;
}

const FormInput = ({
  title,
  type,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}: IProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={type === "password" && !showPassword}
        />

        {type === "password" && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setShowPassword((prev) => !prev)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
};

export default FormInput;
