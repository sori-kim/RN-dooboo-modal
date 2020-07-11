import * as React from 'react';
import { useRef, useState } from 'react';
import { Animated, ViewStyle, GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';
import CloseButton from './CloseButton';

interface Props {
    visible?: boolean | undefined;
    closable?: boolean | undefined;
    backDropClosable?: boolean | undefined;
    onClose?: () => void | undefined;
    children: React.ReactElement; 
    style?: ViewStyle | undefined;
    isAnimated?: boolean | undefined;
    animationType?: string | undefined;
    animationSpeed?: number | undefined;
}

function Modal(props : Props) {
    const {
      visible,
      closable,
      backDropClosable,
      onClose,
      children,
      style,
      isAnimated,
      animationType, 
      animationSpeed 
    } = props

    const onbackDropPress = () =>  {
      if (e.target === e.currentTarget) {
        onClose(e)
      }
    }
  
    const close = () => {
      if (onClose) {
        onClose(e)
      }
    }

    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const defaultAnimation = useRef(new Animated.Value(500)).current;
    const zoomAnimation =  useRef(new Animated.Value(0.8)).current; 
    // const [type, setType] = useState("")


    if (animationType === "default"){
        Animated.timing(defaultAnimation, {
            toValue: -50,
            duration: animationSpeed,
            useNativeDriver: true
          }).start();
    }  
 
    if (animationType === "fadeIn"){
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: animationSpeed,
          useNativeDriver: true
        }).start();
      };

    if (animationType === "zoom"){
        Animated.timing(zoomAnimation, {
            toValue: 1,
            duration: animationSpeed,
            useNativeDriver: true
          }).start();
    }

    return (
      <>
        <ModalOverlay visible={visible} onPress={backDropClosable? onbackDropPress : null} />
        <ModalWrapper
          as={Animated.View} 
          visible={visible}
          style={
              [ 
                animationType === "default" ? 
                {transform : [{translateY : defaultAnimation}]} : null,
                animationType === "fadeIn" ? 
                {opacity: fadeAnimation} : null,
                animationType === "zoom" ? 
                {transform : [{scale: zoomAnimation}]} : null
         ]}
        >
          <ModalInner style={style}>
            { closable && 
             <CloseButton handlePress={close} />
                }
              {children}  
          </ModalInner>
        </ModalWrapper>
      </>
    )
  }



const ModalWrapper = styled.View`
  opacity: ${(props) => (props.visible ? 1  : 0)};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

const ModalOverlay = styled.TouchableOpacity`
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
`

const ModalInner = styled.View`
  box-shadow: rgba(0,0,0,.25) 0 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  margin: 0 auto;
  padding: 40px 20px;
  top: -30%;
`


Modal.defaultProps = {
    closeBtnVisible: true,
    closable: true,
    visible: false,
    animationType: "default",
    animationSpeed: 1000
  }

export default Modal;