import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.View`
    margin-bottom: 10px;
`;

const TextInput = styled.TextInput`

`;

const AuthInput = ({ placeholder, value, keyboardType = "default", autoCapitalize }) => (
    <Container>
        <TextInput
            keyboardType={keyboardType}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            value={value}
        />
    </Container>
);

AuthInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    keyboardType: PropTypes.oneOf(["default", "number-pad", "decimal-pad", "numeric", "email-address"]),
    autoCapitalize: PropTypes.oneOf([""])
}

export default AuthInput;