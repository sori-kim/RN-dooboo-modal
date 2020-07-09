import React, { useState } from "react";
import Modal from "./Modal";
import { Text, View, Button} from "react-native";
import styled from "styled-components/native";


const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledModalOpenButton = styled.TouchableOpacity`
height: 50px;
width: 300px;
justify-content: center;
align-items: center;
border-radius: 10px;
background-color:  #119CF2;
`;


const Screen = (Props: any): React.ReactElement => {

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [buttonVisible, setButtonVisible] = useState<boolean>(true);
  const [modalOutput, setModalOutput] = useState<string>("Hey Modal");

  
  console.log("modalVisible, btnVisible", modalVisible, buttonVisible)

  return (
    
    <StyledSafeAreaView >
      <StyledModalOpenButton 
        onPress={() => {setModalVisible(true), setButtonVisible(false)}}
        style={ buttonVisible ? {opacity: 1} : {opacity: 0}}
        >
          <Text style={{color: 'white', fontWeight: '700'}}>hello</Text>
        </StyledModalOpenButton>
      <Modal
        optionalModal={false}
        isVisible={modalVisible}
        useNativeDriver={true}
        //아이폰에서 모달창 동작시 깜박이지 않게 하기 위해
        hideModalContentWhenAnimated={true}
        modalOutput={modalOutput}
        setModaloupt={setModalOutput}
        // style={{ backgroundColor: '#088EDF' }}
        // 모달 스타일링 변경하고 싶을때 
        isAnimated={true}
      >
        <Text style={{textAlign: 'center'}}>Hello!</Text>
        <Button title="Hide modal" onPress={()=>setModalVisible(false)} />
      </Modal>
    </StyledSafeAreaView>
  );
};

export default Screen;
