import React from "react";
import { TextInput, View } from "react-native";
import PropTypes from "prop-types";
import constants from "../constants";
import styles from "../styles";

const SearchBar = ({ onChange, value, onSubmit }) => (
    <View>
        <TextInput
            style={{
                width: constants.width - 40,
                height: 35,
                backgroundColor: styles.lightGreyColor,
                padding: 10,
                borderRadius: 5,
                textAlign: "center"
            }}
            returnKeyType="search"
            onChangeText={onChange}
            onSubmitEditing={onSubmit}
            value={value}
            placeholder={"Search"}
            placeholderTextColor={styles.darkGreyColor}
        />
    </View>
);

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};
export default SearchBar;