import { View, Image, Text } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import React from "react";
import { ITabIcon } from "@/interfaces";
import { tabsContent } from "@/data";

const TabIcon = ({ icon, color, focused, name }: ITabIcon) => {
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

const TabsLayout = () => {
  /* --------- RENDER --------- */
  const renderTabs = tabsContent.map((element, index) => (
    <Tabs.Screen
      key={index}
      name={element.name}
      options={{
        title: element.title,
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon
            icon={icons[element.icon]}
            color={color}
            focused={focused}
            name={element.title}
          />
        ),
      }}
    />
  ));

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {renderTabs}
      </Tabs>
    </>
  );
};

export default TabsLayout;
