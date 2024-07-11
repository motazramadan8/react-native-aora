import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface IProps {
  text: string;
  linkPage: string;
  linkTitle: string;
}

const AuthPrompt = ({ text, linkPage, linkTitle }: IProps) => {
  return (
    <View className="justify-center items-center pt-5 flex-row gap-1">
      <Text className="text-white">{text}</Text>

      <Link
        href={`/${linkPage}`}
        className="text-secondary font-semibold text-base"
      >
        {linkTitle}
      </Link>
    </View>
  );
};

export default AuthPrompt;
