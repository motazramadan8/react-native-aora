import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import { signInInputs } from "@/data";
import AuthPrompt from "@/components/AuthPrompt";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  /* --------- RENDER --------- */
  const renderInputs = signInInputs.map((input, idx) => (
    <FormInput
      key={idx}
      title={input.title}
      type={input.type}
      value={form[input.type]}
      handleChangeText={(text) => handleChangeInput(input.type, text)}
      otherStyles={input.otherStyles}
      keyboardType={input.keyboardType}
      placeholder={input.placeholder}
    />
  ));

  /* --------- HANDLER --------- */
  const handleChangeInput = (name: string, value: string) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitHandler = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-gray-300 text-xl mt-4 font-medium">
            Sign in to Aora
          </Text>

          {renderInputs}

          <Button
            title="Sign in"
            containerStyles="mt-7"
            handlePress={submitHandler}
            isLoading={isSubmitting}
          />

          <AuthPrompt
            text="Don't have an account?"
            linkPage="sign-up"
            linkTitle="Sign Up"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
