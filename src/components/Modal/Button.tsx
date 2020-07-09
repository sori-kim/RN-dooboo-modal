import React, {useState} from 'react';
import styled, { css } from "styled-components/native";

function Button() {

  return (
      <TriggerBtn> "Open modal"</TriggerBtn>
  );
}

export default Button;

const TriggerBtn = styled.Button`
  width: 100px;
  height: 30px;
  z-index: 9;
`;
