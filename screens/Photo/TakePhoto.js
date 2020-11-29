import React, { useState, useEffect } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import * as Permissions from 'expo-permissions';
import styled from "styled-components";
import { Camera } from 'expo-camera';
import Loader from "../../components/Loader";
import constants from "../../constants";

const View = styled.View`
  flex: 1;
`;

const Text = styled.Text``;

export default () => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === "granted") {
        setHasPermission(true);
      }
    } catch (e) {
      console.log(e);
      hasPermission(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    askPermission();
  }, []);
  return (
    <View>
      {loading ? <Loader /> : hasPermission ? <Camera styles={{ width: constants.width, height: constants.height / 2 }} /> : null}
    </View>
  );
};
