import React, { useState } from 'react';
import { View, TextInput, Text, Picker} from 'react-native';
import styled from 'styled-components/native';




function ModalPicker (props){
  const [options, setOptions] = useState(props.data);   
  const [value, setValue] = useState('Select Your Choice!')



    return(
      <Container>
      <Picker
       selectedValue={value}
       onValueChange={(itemVale, itemIndex)=>{
         setValue(itemVale)
       }}
      >
        {
        options.map( (option, index)=>{
         return <Picker.Item value={option.label} label={option.label} key={index} />
        })
       }
      </Picker>
      <Selected>
        <Text style={{fontSize: 20, fontWeight: '400' }} >{value}🧡</Text>
      </Selected>
     </Container> 
    )
}

export default ModalPicker;

const Container = styled.View``;

const Selected = styled.View`
 justify-content: center;
 align-items: center;
`;