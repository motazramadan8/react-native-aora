import { Tabs } from "expo-router";
import { icons } from "../../constants";
import React from "react";
import { tabsContent } from "@/data";
import TabIcon from "@/components/TabIcon";

const TabsLayout = () => {
  /* --------- RENDER --------- */
  const renderTabs = tabsContent.map((element, idx) => (
    <Tabs.Screen
      key={idx}
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
