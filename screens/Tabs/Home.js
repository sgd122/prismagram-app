import React, { useState } from "react";
import { ScrollView, FlatList, RefreshControl } from "react-native";
import styled from "styled-components";
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import Post from "../../components/Post";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        name
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          name
        }
      }
      createdAt
    }
  }
`;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(FEED_QUERY);
  const refresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  }
  console.log(data, loading);
  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} />}
    >
      {loading ? (
        <Loader />
      ) : (
          data &&
          data.seeFeed &&
          data.seeFeed.map(post => <Post key={post.id} {...post} />)
        )}
    </ScrollView>
  )
};
