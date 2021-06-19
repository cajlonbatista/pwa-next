import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * { 
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    outline: none;
  }

  ::-webkit-scrollbar-thumb{
    background: #5268F4;
    border-radius: 2px;
  }

  ::-webkit-scrollbar{
    width: 7px;
    height: 0px;
  }
`;

export default GlobalStyle;
