import React from "react";
import { TouchableOpacity, Image, View } from "react-native"
import { withNavigation } from "@react-navigation/compat";
import PropTypes from "prop-types";
import constants from "../constants";

const style = {
    width: constants.width / 3.05, 
    height: constants.height / 6,    
    margin: 1,    
}
const SquarePhoto = ({ navigation, files = [], id }) => (    
    <TouchableOpacity onPress={() => navigation.navigate("Detail", { id })}>
        <Image
            source={{ uri: files[0] && files[0].url }}
            style={style}
        />
    </TouchableOpacity>
);
SquarePhoto.propTypes = {
    files: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    id: PropTypes.string.isRequired
};

export default withNavigation(SquarePhoto);