import React from "react";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../fragments";
import Loader from "../components/Loader";
import { ScrollView, Text } from "react-native";
import UserProfile from "../components/UserProfile";

const GET_USER = gql`
    query seeUser($name: String!) {
        seeUser(name: $name) {
            ...UserParts
        }
    }
    ${USER_FRAGMENT}
`;

export default ({ navigation, route }) => {
    const { loading, data, } = useQuery(GET_USER, {
        variables: {
            name: route.params?.username
        }
    });
    return (
        <ScrollView>
            {loading ? <Loader /> : data && data.seeUser && <UserProfile {...data.seeUser} />}
        </ScrollView>
    )
}