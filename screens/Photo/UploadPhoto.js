import React, { useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ route }) => {
  const [loading, setIsLoading] = useState(false);
  const photo = route.params?.photo;
  return (
    <View>
      <Image
        source={{ uri: photo.uri }}
        style={{ height: 80, width: 80, marginRight: 30 }}
      />
    </View>
  )
};
