import * as React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import NavIcon from "./NavIcon";
import { withNavigation } from "@react-navigation/compat";
import styles from "../styles";

const Conatiner = styled.TouchableOpacity`
  padding-right: 20px;
`;

export default withNavigation(({ navigation }) => (
  <Conatiner onPress={() => navigation.navigate("Message")}>
    <NavIcon
      name={Platform.OS === "ios" ? "ios-paper-plane" : "md-paper-plane"}
    />
  </Conatiner>
));
