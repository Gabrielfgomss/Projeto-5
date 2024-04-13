import styled from "styled-components";

export const Button = styled.button<{ modal?: boolean; header?: boolean }>`
  background-color: ${(props) => (props.header ? "#481E14" : "#dba979")};
  padding: 1em;
  margin: ${(props) => (props.modal ? "0" : "0.5em")};
  border: none;
  border-radius: 0.5em;
  cursor: pointer;
  color: ${(props) => (props.header ? "#F0EBE3" : "black")};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;

  &:enabled {
    &:hover {
      text-decoration: underline;
    }
  }

  &:disabled {
    background-color: #dddddd;
  }
`;
