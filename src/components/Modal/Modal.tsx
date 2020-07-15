import * as React from 'react';
import { useRef} from 'react';
import { Animated, ViewStyle, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import ModalPicker from './ModalPicker';


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
  mode?: string | undefined;
  data?: {} | undefined;
  initialValue?: string | undefined;
  value?: string | undefined;
  setValue?: () => void | undefined;
}

function Modal(props: Props): React.ReactElement {
  const {
    visible = false,
    closable = true,
    backDropClosable = true,
    onClose,
    children,
    style,
    isAnimated = true,
    setIsAnimated,
    animationType = 'default',
    animationSpeed = 700,
    mode = 'default',
    data,
    initialValue,
    value,
    setValue,
  } = props;

const close = (e:any): void => {
    if (onClose) {
      onClose(e);
    }
  };

 function CloseButton () {
    return(
        <TouchableOpacity onPress={onClose}>
            <StyledBtn source={require('../../../assets/close.png')} />
        </TouchableOpacity>
    )
 };

  const defaultAnimation = useRef(new Animated.Value(300)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const zoomAnimation = useRef(new Animated.Value(0.8)).current;

  if (isAnimated && animationType === 'default') {
    Animated.timing(defaultAnimation, {
      toValue: 10,
      duration: animationSpeed,
      useNativeDriver: true,
    }).start();
  }

  if (animationType === 'fadeIn') {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: animationSpeed,
      useNativeDriver: true,
    }).start();
  }

  if (animationType === 'zoom') {
    Animated.timing(zoomAnimation, {
      toValue: 1,
      duration: animationSpeed,
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      <ModalOverlay
        visible={visible}
        onPress={backDropClosable ? close : null}
      />
      <ModalWrapper
        as={Animated.View}
        visible={visible}
        style={[
          isAnimated && animationType === 'default'
            ? { transform: [{ translateY: defaultAnimation }] }
            : null,
          isAnimated && animationType === 'fadeIn' 
            ? { opacity: fadeAnimation } : null,
          isAnimated && animationType === 'zoom'
            ? { transform: [{ scale: zoomAnimation }] }
            : null,
        ]}>
        <ModalInner style={style}>
          {closable && <CloseButton handlePress={close} />}
          {mode === 'modalPicker' && (
            <ModalPicker
              data={data}
              visible={visible}
              setValue={setValue}
              value={value}
              initialValue={initialValue}
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          )}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default Modal;

const ModalOverlay = styled.TouchableOpacity`
  z-index: -1;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ModalWrapper = styled.View`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const ModalInner = styled.View`
  box-shadow: rgba(0, 0, 0, 0.25) 0 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  margin: 0 auto;
  padding: 40px 20px;
  top: -30%;
  
`;

const StyledBtn = styled.Image`
width: 20px;
height: 20px;
align-self: flex-end;
`;
