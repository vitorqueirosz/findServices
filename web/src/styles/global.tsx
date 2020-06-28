import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
   * {
       padding: 0;
       margin: 0;
       box-sizing: border-box;

   }

   body {
       background: #f0f0f0;
       -webkit-font-smoothing: antialiased;
   }

   body, button, input {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
   }

   h1, h2, h3, h4, h5, strong {
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   }

   label, span {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
   }

`;
