import styled from "styled-components";

export const Card = styled.li`
  padding: 2em;
  width: 40%;
  background-color: #9b3922;
  margin: 1em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const EditableText = styled.textarea`
  background-color: transparent;
  border: none;
  resize: none;
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0.5em;
  font-weight: 500;
  padding-bottom: 4px;
  color: black;

  &:enabled {
    border-bottom: 2px solid #fff2e1;
  }
`;
