import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

export const LoginContainer = styled.div`
 padding: 20px;
  width: 500px;
  background-color: #424242;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Label = styled.span`
  font-weight: bold;
  font-family: 12px;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  padding: 8px;
  border-radius: 2px;
  background-color: #9c9a9a;
  outline: none;
  border: none;
`;

export const Select = styled.select`
  width: 220px;
  height: 40px;
  padding: 8px;
  border-radius: 2px;
  background-color: #9c9a9a;
  outline: none;
  border: none;
`;

