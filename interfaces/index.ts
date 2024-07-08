import { ImageSourcePropType } from "react-native";

export interface ITabContent {
  name: string;
  title: string;
  icon: "home" | "plus" | "profile" | "bookmark";
}

export interface ITabIcon {
  icon: ImageSourcePropType;
  color: string;
  focused: boolean;
  name: string;
}
