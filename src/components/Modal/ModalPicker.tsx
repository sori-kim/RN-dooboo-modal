import React, { useState } from 'react';
import { View, TextInput, Text, Picker} from 'react-native';
import styled from 'styled-components/native';

function ModalPicker (props){
  const [options, setOptions] = useState(props.data);   

  const {
    value,
    setValue,
    setIsAnimated
  } = props


    return(
      <>
      <Picker
       selectedValue={value}
       onValueChange={(itemValue, itemIndex)=>{
         setValue(itemValue)
         alert(`Selected!`)
         setIsAnimated(false)
       }}
      >
        {
        options.map( (option, index)=>{
         return <Picker.Item value={option.label} label={option.label} key={index} />
        })
       }
      </Picker>
     </> 
    )
}

export default ModalPicker;

