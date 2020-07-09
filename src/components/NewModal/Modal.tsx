import * as React from 'react';
import { useEffect, useState } from 'react';
import {View, ViewStyle, TextStyle, Text, Animated } from 'react-native'
import styled, { css } from "styled-components/native";


interface Props {
  containerStyle?: ViewStyle | undefined;
  disabledStyle?: ViewStyle | undefined ;
  style?: ViewStyle | undefined;
  textStyle?: TextStyle | undefined;
  isVisible?: boolean | undefined;
  hideModalContentWhenAnimated?: boolean | undefined;
  modalOutput?: string | undefined;
  optionalModal?: boolean | undefined;
  children: React.ReactChildren;
  isAnimated?: boolean | undefined; 
}


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


const ModalOverlay = styled.TouchableOpacity`
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
`;

const StyledModal = styled.View`
  background-color: #ffff;
  border-radius: 10;
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



function Modal ( props : Props ) {

  const animation =  new Animated.Value(0);
  const position = new Animated.ValueXY({x:0, y:0});



useEffect((): void => {
    Animated.timing(
        position,
        {
          toValue : {x: 0, y: -500},
          duration: 2000,
          useNativeDriver: true
        }
      ).start();
  }, [props.isAnimated]);


  const animationStyles = () => {
    return {
      width: 100, height: 100,
      backgroundColor: 'red',
      opacity: position
    }
  }

   const {
     containerStyle,
     style,
     textStyle,
     isVisible,
     hideModalContentWhenAnimated,
     modalOutput,
     optionalModal,
     children,
     isAnimated
    } = props

  if(isVisible === false ){
    return(
     <>   
     <ModalOverlay style={{ backgroundColor : "transparent"}} />  
      <StyledDisable style={[containerStyle]}>
      </StyledDisable>
     </> 
    )
  }

  
  return (
     <Container>
      <ModalOverlay />
        <StyledModal style={[style,  isAnimated ? {animationStyles} : undefined]} as={Animated.View} >
          {children}
       </StyledModal>
    </Container>

  )
}

  export default Modal;


