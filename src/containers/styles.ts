import styled from "styled-components";

export const Main = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
`;

export const Header = styled.header<{ modal?: boolean }>`
  background-color: ${(props) => (props.modal ? "transparent" : "#ffc470")};
  width: ${(props) => (props.modal ? "auto" : "100%")};
  padding: ${(props) => (props.modal ? "0" : "3em")};
  text-align: center;
  border-radius: 1em 1em 0em 0em;
  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 32px;
  }
`;

export const Content = styled.section<{ modal?: boolean }>`
  background-color: ${(props) => (props.modal ? "transparent" : "#dd5746")};
  width: ${(props) => (props.modal ? "auto" : "100vw")};
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
