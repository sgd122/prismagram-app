import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../../fragments";
import { ScrollView } from "react-native";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import UserProfile from "../../components/UserProfile";

export const ME = gql`
  {
    me {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;
export default ({ navigation, route }) => {
  const { loading, data } = useQuery(ME);
  useEffect(() => {
    if (data.me) {
      navigation.setOptions({
        headerTitle: data.me.name
      });
    }
  }, [data]);
  console.log(loading, data);
  return (
    <ScrollView>
      {loading ? <Loader /> : data && data.me && <UserProfile {...data.me} />}
    </ScrollView>
  )
};
