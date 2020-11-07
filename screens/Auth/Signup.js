import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import { CREATE_ACCOUNT, LOG_IN } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const FBContainer = styled.View`
  margin-top:25px;
  padding-top:25px;
  border-top-width:1px;
  border-color:${props => props.theme.lightGreyColor};
  border-style:solid;
`;

export default ({ navigation, route }) => {
  const fNameInput = useInput("");
  const lNameInput = useInput("");
  const emailInput = useInput(route.params ? route.params.email : "");
  const usernameInput = useInput("");
  const [loading, setLoading] = useState(false);
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      name: usernameInput.value
      , email: emailInput.value
      , firstName: fNameInput.value
      , lastName: lNameInput.value
    }
  });
  const handleSignup = async () => {
    const { value: email } = emailInput;
    const { value: fName } = fNameInput;
    const { value: lName } = lNameInput;
    const { value: username } = usernameInput;
    //Email 유효성 검사(regex)
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return Alert.alert("That email is invalid");
    }
    if (fName === "") {
      return Alert.alert("I need your name");
    }
    if (username === "") {
      return Alert.alert("Invalid username");
    }

    try {
      setLoading(true);
      const {
        data: { createAccount }
      } = await createAccountMutation();
      if (createAccount) {
        Alert.alert("Account crated", "Log in now!");
        navigation.navigate("Login", { email });
      }
    } catch (e) {
      Alert.alert("사용자 이름 혹은 이메일이 이미 생성된 계정입니다.");
      navigation.navigate("Login", { email })
    } finally {
      setLoading(false);
    }
  };
  const fbLogin = async () => {
    try {
      setLoading(true);
      await Facebook.initializeAsync({
        appId: '938062933546410',
      });
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,last_name,first_name,email,name`);
        const { email, first_name, last_name, name } = await response.json();
        updateFormData(email, first_name, last_name);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    const GOOGLE_ID = "977232114387-8e3h8k1ps3ec10t6g9gm9e0urem055db.apps.googleusercontent.com";
    try {
      setLoading(true);
      const result = await Google.logInAsync({
        iosClientId: GOOGLE_ID,
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        const user = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${result.accessToken}` },
        });
        const { email, family_name, given_name, id, locale, name, picture, verified_email } = await user.json();
        updateFormData(email, given_name, family_name);
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const updateFormData = (email, firstName, lastName) => {
    emailInput.setValue(email);
    fNameInput.setValue(firstName);
    lNameInput.setValue(lastName);
    const [username] = email.split("@");
    usernameInput.setValue(username);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...fNameInput}
          placeholder="First name"
          autoCapitalize="words"
        />
        <AuthInput
          {...lNameInput}
          placeholder="Last name"
          autoCapitalize="words"
        />
        <AuthInput
          {...emailInput}
          placeholder="Email"
          keyboardType="email-address"
          returnKeyType="send"
          autoCorrect={false}
        />
        <AuthInput
          {...usernameInput}
          placeholder="Username"
          returnKeyType="send"
          autoCorrect={false}
        />
        <AuthButton loading={loading} onPress={handleSignup} text={"Sign up"} />
        <FBContainer>
          <AuthButton
            bgColor={"#2D4DA7"}
            loading={false}
            onPress={fbLogin}
            text="Connect Facebook"
          />
          <AuthButton
            bgColor={"#EE1922"}
            loading={false}
            onPress={googleLogin}
            text="Connect Google"
          />
        </FBContainer>
      </View>
    </TouchableWithoutFeedback>

  );
};
