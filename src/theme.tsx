import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`        
        
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
 }

`;

export const colorArr = [
  { projectId: 'bgYhx', color: '#A259FF' },
  { projectId: 'ERdPQ', color: '#F24E1E' },
];
