import * as React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Modal from './Modal';

function ModalPage() {
    const [modalVisible, setModalVisible] = useState(false)
    const [isAnimated, setIsAnimated] = useState(false)

    const openModal = () => {
      setModalVisible(true)
    }
    const closeModal = () => {
      setModalVisible(false)
    }

 

    return (
      <>
        <TouchableOpacity 
             style={ {width: 200, height: 80, backgroundColor: '#088EDF', borderRadius: 5, justifyContent: 'center', alignItems: 'center', zIndex: -9  }}
             onPress={() => { setIsAnimated(true); openModal();  } }>
            <Text style={{color: '#ffff', fontWeight: '600', fontSize: '17px'}}>Open Modal</Text>
        </TouchableOpacity>
        {
          modalVisible &&
           <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
            // style={{backgroundColor: '#ffff'}}
            isAnimated={isAnimated} 
            animationType={"default"}
            animationSpeed={700}
            >
             <Text 
                style={{color: "#088EDF", fontWeight: '600', textAlign: 'center'}}>
                Hello, I am Modal 🤘🏻
             </Text>  
          </Modal>
        }
      </>
    )
  }

  export default ModalPage;

//추가할 프롭스 목록 
//animation turn on/off
//animation 선택지 (아래에서 위로/위에서 아래로/페이드인/줌)
