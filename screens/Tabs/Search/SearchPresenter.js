import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { ScrollView, RefreshControl } from "react-native";
import Loader from "../../../components/Loader";
import SquarePhoto from "../../../components/SquarePhoto";

export const SEARCH = gql`
    query search($term: String!) {
        searchPost(term: $term) {
            id
            files {
                id
                url
            }
            likeCount
            commentCount
        }
    }
`;

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: white;
`;

const Text = styled.Text``;

const SearchPresenter = ({ term }) => {
    const [refreshing, setRefreshing] = useState(false);
    const { data, loading, refetch } = useQuery(SEARCH, {
        variables: {
            term,
        },
        fetchPolicy: "network-only",
    });
    const onRefresh = async () => {
        try {
            setRefreshing(true);
            await refetch({ variables: term });
        } catch (e) {
        } finally {
            setRefreshing(false);
        }
    };
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    onRefresh={onRefresh}
                    refreshing={refreshing}
                />
            }
        >
            {loading ? <Loader /> : data && data.searchPost && data.searchPost.map((post) => <SquarePhoto key={post.id} {...post} />)}
        </ScrollView>
    );
};

SearchPresenter.propTypes = {
    term: PropTypes.string.isRequired,
};

export default SearchPresenter;