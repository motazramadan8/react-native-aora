import { ISignInInputs, ISignUpInputs, ITabContent } from "@/interfaces";

export const tabsContent: ITabContent[] = [
  {
    name: "home",
    title: "Home",
    icon: "home",
  },
  {
    name: "create",
    title: "Create",
    icon: "plus",
  },
  {
    name: "profile",
    title: "Profile",
    icon: "profile",
  },
  {
    name: "bookmark",
    title: "Bookmark",
    icon: "bookmark",
  },
];

export const signInInputs: ISignInInputs[] = [
  {
    title: "Email",
    type: "email",
    otherStyles: "mt-7",
    keyboardType: "email-address",
    placeholder: "Enter your email address",
  },
  {
    title: "Password",
    type: "password",
    otherStyles: "mt-7",
    keyboardType: "default",
    placeholder: "Enter your email address",
  },
];

export const signUpInputs: ISignUpInputs[] = [
  {
    title: "Username",
    type: "username",
    otherStyles: "mt-7",
    keyboardType: "default",
    placeholder: "Enter your username",
  },
  {
    title: "Email",
    type: "email",
    otherStyles: "mt-7",
    keyboardType: "email-address",
    placeholder: "Enter your email address",
  },
  {
    title: "Password",
    type: "password",
    otherStyles: "mt-7",
    keyboardType: "default",
    placeholder: "Enter your email address",
  },
];
