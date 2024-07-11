export interface ITabContent {
  name: string;
  title: string;
  icon: "home" | "plus" | "profile" | "bookmark";
}

export interface ISignInInputs {
  title: string;
  type: "email" | "password";
  otherStyles?: string;
  keyboardType?: "email-address" | "default";
  placeholder?: string;
}

export interface ISignUpInputs {
  title: string;
  type: "email" | "password" | "username";
  otherStyles?: string;
  keyboardType?: "email-address" | "default";
  placeholder?: string;
}
