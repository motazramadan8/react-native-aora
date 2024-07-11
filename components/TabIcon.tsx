import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";

interface IProps {
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
  name: string;
}

const TabIcon = ({ icon, color, focused, name }: IProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${
          focused ? "font-psemibold" : "font-pregular"
        } text-xs text-gray-100`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
