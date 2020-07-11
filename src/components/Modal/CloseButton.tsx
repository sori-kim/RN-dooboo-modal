import React from 'react';
import { TouchableOpacity, Image } from "react-native";
import styled from 'styled-components/native';

function CloseButton (props) {
    return(
        <TouchableOpacity onPress={props.handlePress}>
            <StyledBtn source={require('../../../assets/close.png')} />
        </TouchableOpacity>
    )
 }

 export default CloseButton;

 const StyledBtn = styled.Image`
  width: 20px;
  height: 20px;
  align-self: flex-end
 `;
