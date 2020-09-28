import * as React from "react";
import styled from "styled-components";
import { withNavigation } from "@react-navigation/compat";

const Conatiner = styled.TouchableOpacity``;
const Text = styled.Text``;

export default withNavigation(({ navigation }) => (
  <Conatiner onPress={() => navigation.navigate("Message")}>
    <Text>Messages</Text>
  </Conatiner>
));
