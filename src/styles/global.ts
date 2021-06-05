import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Open Sans', sans-serif;        
        -webkit-font-smoothing: antialiased !important;
        background: #F4F4F4;
    }
    
    a {
        cursor: pointer;
        text-decoration: none;
    }


`;