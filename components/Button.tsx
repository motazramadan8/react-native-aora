import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface IProps {
  title: string;
  handlePress: () => void;
  width?: "w-full" | "w-fit";
  isLoading?: boolean;
  containerStyles?: string;
  textStyles?: string;
}

const Button = ({
  title,
  handlePress,
  width = "w-full",
  isLoading,
  containerStyles,
  textStyles,
}: IProps) => {
  return (
    <TouchableOpacity
      className={`${width} bg-secondary rounded-xl min-h-[62px] inline justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : null
      }`}
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
