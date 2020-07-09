import React, {useState} from 'react';
import styled, { css } from "styled-components";
import Button from './Button';
import Modal from './Modal';
import BackDrop from './BackDrop';


function ModalApp() {

  const [open , setOpen] = useState<boolean>(true);


  return (
    <> 
      <Button open={open} setOpen={setOpen}  />
      <BackDrop open={open} setOpen={setOpen}  />
      <Modal open={open} setOpen={setOpen} />
    </>
  );
}

export default ModalApp;