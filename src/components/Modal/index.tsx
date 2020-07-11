import * as React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';
import Modal from './Modal';

interface Props {
    style? : ViewStyle | object | undefined;
    textStyle? : TextStyle | object | undefined;
}

function ModalPage(props: Props) {
    const {
        style,
        textStyle
    } = props
    
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [isAnimated, setIsAnimated] = useState<boolean>(false)

    const openModal = () => {
      setModalVisible(true)
    }
    const closeModal = () => {
      setModalVisible(false)
    }

    return (
      <>
        <TouchableOpacity 
             style={[style,{width: 200, height: 80, backgroundColor: '#088EDF', borderRadius: 5, justifyContent: 'center', alignItems: 'center', zIndex: -9 }]}
             onPress={() => { setIsAnimated(true); openModal();  } }>
            <Text style={[ textStyle, {color: '#ffff', fontWeight: '600', fontSize: '17px'}]}>Open Modal</Text>
        </TouchableOpacity>
        {
          modalVisible &&
           <Modal
            visible={modalVisible}
            closable={true}
            backDropClosable={true}
            onClose={closeModal}
            // style={{backgroundColor: '#ffff'}}
            isAnimated={isAnimated} 
            animationType={"default"}
            animationSpeed={700}
            >
             <Text 
                style={[ textStyle, {color: "#088EDF", fontWeight: '600', textAlign: 'center'}]}>
                Hello, I am Modal 🤘🏻
             </Text>  
          </Modal>
        }
      </>
    )
  }

  export default ModalPage;


