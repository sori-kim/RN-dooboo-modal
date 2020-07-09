
import * as React from 'react';
import { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import styled, { css } from "styled-components/native";

//optional modal styling
const StyledModalContainer = styled.View`
 flex: 1; 
 align-items: center; 
 width: 320px; 
 height: 220px; 
 background-color: rgba(255, 255, 255, 1); 
 border-radius: 10px; 
 `

const StyledModalOpenButton = styled.TouchableOpacity` 
height: 50px; 
width: 300px; 
justify-content: center; 
align-items: center; 
border-radius: 10px; 
border-width: 2px; 
border-color: #119CF2; 
`

const StyledModalOutputText = styled.Text`
 color: black; font-size: 30px; 
 `

const StyledModalButton = styled.TouchableOpacity`

width: 320px;
justify-content: center;
`;

const StyledModalGradeWrapper = styled.View`

width: 320px;
justify-content: center;
`;

const StyledModalGradeText = styled.Text`
align-self: center; font-size: 15px;
`

const StyledModalText = styled.Text` 
align-self: center; 
color: #119CF2; 
font-size: 15px; 
font-weight: 600;
`

const HorizentalLine = styled.View`
background-color: black; 
height: 1px; 
align-self: stretch;
`;

function OptionalModal (){
const [modalOutput, setModalOutput] = useState <string> ("Hey Modal");
const [modalVisible, setModalVisible] = useState <boolean> (false);

return (
<>
<StyledModalContainer> 
<StyledModalGradeWrapper> 
<StyledModalGradeText> 선택지 </StyledModalGradeText> 
</StyledModalGradeWrapper> 

       <HorizentalLine />

      <StyledModalButton
          onPress={() => {
          setModalOutput("선택 1");
          setModalVisible(false);
          }}
      >
          <StyledModalText>선택 1</StyledModalText>
      </StyledModalButton>

      <HorizentalLine />

      <StyledModalButton
          onPress={() => {
          setModalOutput("선택 2");
          setModalVisible(false);
          }}
      >
          <StyledModalText>선택 2</StyledModalText>
      </StyledModalButton>

      <HorizentalLine />

      <StyledModalButton
          onPress={() => {
          setModalOutput("선택 3");
          setModalVisible(false);
          }}
      >
          <StyledModalText>선택 3</StyledModalText>
      </StyledModalButton>

      <HorizentalLine />


      <StyledModalButton
          onPress={() => {
          setModalVisible(false);
          }}
      >
          <Text style={{ alignSelf: "center" }}>취소</Text>
      </StyledModalButton>
  </StyledModalContainer>
  <StyledModalOpenButton
      onPress={() => {
      setModalVisible(true);
      }}
  >
  <StyledModalOutputText>{modalOutput}</StyledModalOutputText>
</StyledModalOpenButton>


</>
)
}

export default OptionalModal;


