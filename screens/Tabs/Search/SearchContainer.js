import React, { useState } from "react";
import SearchBar from "../../../components/SearchBar";
import useInput from "../../../hooks/useInput";
import SearchPresenter from "./SearchPresenter";

export default ({ route, navigation }) => {
  const searchInput = useInput(route.params);
  let term = "";
  if (searchInput.value !== undefined) term = searchInput.value;
  navigation.setOptions({
    headerTitle: () => <SearchBar {...searchInput} onSubmit={onSubmit} value={term} />,
  });
  const onSubmit = (e) => {
    console.log("submit");
    searchInput.value = "";
  };
  return <SearchPresenter term={term} />;
};