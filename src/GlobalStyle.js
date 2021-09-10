import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
    box-sizing:border-box;
    color:white;
    font-size:1.2rem;

}

:root {
  --purple-primary: #554dde;
  --accent-pink: #f44e77;
  --neutral-light: #f2f6ff;
  --lavender-secondary: #6a6d9e; /*Primary Font Color*/
  --dark-primary: #16194f;
  --border-colour: #cad6f1;
  text-decoration:none;
  font-family: 'Nunito', sans-serif;
}

body{
    background-color:var(--neutral-light);
    font-family: 'Nunito', sans-serif;
    text-decoration:none;
  
}
p{
  color:var(--lavender-secondary);
   line-height:1.8rem;
}

.secondary-heading{
  font-size:2.6rem;
  color:var(--purple-primary); 
}
.small-heading{
  font-size:2.5rem;
  color:var(--purple-primary);
  text-align:center;
}
span{
  font-size:2.5rem;
  color:var(--accent-pink);
}


//Utilities
.c-para{
  text-align:center
}
`;

export default GlobalStyle;
