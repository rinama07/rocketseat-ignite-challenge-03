import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.color.background};
    color: ${(props) => props.theme.color.text};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  span,
  p {
    font-family: 'Nunito', sans-serif;
    font-size: ${(props) => props.theme.text._16};
    font-weight: 400;
  }

  :focus,
  button:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.color.blue};
    outline: transparent;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
