import * as React from 'react';
import { useState } from 'react';
import { Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';
import Modal from './Modal';

interface Props {
  style?: ViewStyle | undefined;
  textStyle?: TextStyle | undefined;
}

function ModalPage(props: Props) {
  const { style, textStyle } = props;

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const [value, setValue] = useState('DoobooLab');

  const openModal = (): void => {
    setModalVisible(true);
  };
  const closeModal = (): void => {
    setModalVisible(false);
  };

  const data = [
    { section: true, label: 'DoobooLab' },
    { label: 'Hyo' },
    { label: 'Daniel' },
    { label: 'Sarah' },
    { label: 'Clark' },
    { label: 'Dean' },
    { label: 'Rosie' },
    { label: 'Song' },
  ];

  return (
    <>
      <TouchableOpacity
        style={[
          {
            width: 250,
            height: 70,
            backgroundColor: '#088EDF',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -9,
          },
        ]}
        onPress={() => {
          setIsAnimated(true);
          openModal();
        }}>
        <Text
          style={[
            textStyle,
            { color: '#ffff', fontWeight: '600', fontSize: '17px' },
          ]}>
          {value}
        </Text>
      </TouchableOpacity>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          backDropClosable={true}
          onClose={closeModal}
          style={style}
          isAnimated={isAnimated}
          animationType={'default'}
          animationSpeed={700}
          mode={'default'}
          data={data}
          initialValue={value}
          value={value}
          setValue={setValue}>
          <Text
            style={[
              textStyle,
              { color: '#088EDF', fontWeight: '600', textAlign: 'center' },
            ]}>
            Hello, I am Modal 🤘🏻
          </Text>
        </Modal>
      )}
    </>
  );
}

  export default ModalPage;


