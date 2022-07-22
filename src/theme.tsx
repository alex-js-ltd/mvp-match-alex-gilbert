import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`        
        
    body {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            margin: 0;
            padding: 0;
            background: #FFFFFF;
            font-family: 'Roboto', sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
         
    }

`;

export const colorArr = [
  { projectId: 'bgYhx', color: '#A259FF' },
  { projectId: 'ERdPQ', color: '#F24E1E' },
];
