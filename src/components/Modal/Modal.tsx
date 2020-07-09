import React, {useState} from 'react';
import {View, ViewStyle, TextStyle, Text, TouchableOpacity} from 'react-native'
import styled, { css } from "styled-components/native";
import BackDrop from './BackDrop'

interface Props {
  containerStyle?: ViewStyle;
  disabledStyle?: ViewStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  open?: boolean;
  setOpen?: () => void;
}

const StyledModal = styled.View`
  background-color: #ffff;
  border-radius: 10;
  align-self: center;
  width: 300px;
  height: 300px;
  border: 2px solid #088EDF;
  box-shadow: rgba(0,0,0,.25) 0 10px 20px;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

const StyledDisable = styled(StyledModal)`
  height: 0;
  opacity: 0;
`;     

const StyledButton = styled.TouchableOpacity`
 background-color: #119CF2;
 width: 100px;
 height: 30px;
 border-radius: 5;
 justify-content: center;
 box-shadow: rgba(0,0,0,.15) 0 10px 20px;
`;

const BtnText = styled.Text` 
 color: #ffff;
 font-weight: 800;
 text-align: center;
 `

 

function Modal ( props : Props ):React.ReactElement {

   const {
     containerStyle,
     style,
     textStyle,
     open,
     setOpen,
    } = props

  if(open === false){
    return(
      <StyledDisable style={[containerStyle]}>
      </StyledDisable>
    )
  } 

  console.log("modal props", props )

  return (
    <View style={containerStyle}>
      <StyledModal style={style}> 
        <Text style={textStyle}>안녕? 난 모달</Text>
        <StyledButton onPress={() => {setOpen(false)}}>
          <BtnText>닫기</BtnText>
        </StyledButton>
      </StyledModal>
    </View>
  )
}

  export default Modal;




Modal.defaultProps = {
    open: true
}




