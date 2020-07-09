import React, { useEffect } from 'react';
import styled, { css } from "styled-components/native";

interface Props {
    open?: boolean;
    setOpen?: () => void;
  }


const ModalOverlay = styled.TouchableOpacity`
    z-index: -1;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    flex: 1;
    /* background-color: rgba(0,0,0,0.7); */
    background-color : ${(props)=>(props.open ? "rgba(0,0,0,0.7)"  : "transparent")};
`;


function BackDrop(props : Props):React.ReactElement {
    const {open, setOpen } = props

    // useEffect(()=>{ setOpen(true) }, [])
    console.log("backdrop props", props)

   
    return(
        <ModalOverlay onPress={()=> setOpen(false)}></ModalOverlay>
    )
}

export default BackDrop;