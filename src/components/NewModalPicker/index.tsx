import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import ModalPicker from './ModalPicker';


function ModalPickerPage(){
    const [textInputValue, setTextInputValue] = useState('');
    let index = 0;
    const data = [
        { key: index++, section: true, label: 'Fruits' },
        { key: index++, label: 'Red Apples' },
        { key: index++, label: 'Cherries' },
        { key: index++, label: 'Cranberries', accessibilityLabel: 'Tap here for cranberries' },
        { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
    ];
 
   return(
    <View style={{flex:1, justifyContent:'space-around', padding:50}}>
        <ModalPicker style={{flex: 1}} data={data} />


        
        {/* <ModalPicker
            data={data}
            initValue="Select something yummy!"
            onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} />


        <ModalPicker
            data={data}
            initValue="Select something yummy!"
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={(option)=>{ this.setState({textInputValue:option.label})}}>

            <TextInput
                style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                editable={false}
                placeholder="Select something yummy!"
                value={textInputValue} />

        </ModalPicker> */}
    </View>
   )

}


export default ModalPickerPage;





