import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html , body {
    margin: 0;
    font-family: system-ui;
    height: 100%;
    padding: 0
  }
`;
