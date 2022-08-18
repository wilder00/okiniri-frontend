
import styled, { keyframes } from "styled-components";



export const Field = ({label, ...props})=>{
  return (
    <div>
      <Input></Input>
    </div>
  )
}

export const Input = styled.input`
  background-color: red;

`;

//const Field = 