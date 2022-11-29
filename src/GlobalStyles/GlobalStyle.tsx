import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
:root{
    --clr-primary:#877cf6;
    --clr-secondary: #151328;
    --clr-heading:#413e4e;
    --clr-body-font:#818393;
    --clr-body-bg:#EEF2F5;
    --clr-sectioon-bg:#f5f9fc;
    --clr-orange:#e98e3a;
    --clr-pink:#e39699;
    -clr-brown:#aaaeb4;
    --clr-white:#ffffff;
    // global font size variables 
    --fs-100:1rem;
    --fs-200:1.125rem;
    --fs-300:1.25rem;
    --fs-400:1.5rem;
    --fs-500:1.75rem;
    --fs-600:2rem;
    --fs-700:2.5rem;
    --fs-800:4.3rem;
    // Box shadow 
    --box-shadow:0 0 10px #0001;
    --border-radius:12px ;
    //transition 
    --transition:all .5s ease-out;

}
.container{
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;

}
ul{
    list-style: none;

}
a{
    color: inherit;
    font-weight: 600;
    font-size: var(--fs-200);
    letter-spacing: .7px;
    text-decoration: none;
    transition: var(--transition);
    &:hover{
    color: var(--clr-primary);
    transition: var(--transition);

    }
}
body{
    background-color: var(--clr-body-bg);
    color:var(--clr-body-font);
    font-size: var(--fs-100);
    font-weight: 400;
    font-family:'Poppins', sans-serif;
    line-height: 1.76em;
}
h1,h2,h3,h4,h5{
    font-weight: 700;
    line-height: 1.33em;
    color: var(--clr-heading);
}
h1{
    font-size: var(--fs-800);
}
h2{
    font-size: var(--fs-700);
}
h3{
    font-size: var(--fs-500);
}
h4{
    font-size:  var(--fs-300);
}
.btn{
    outline:none;
    font-size:  var(--fs-300);
    font-weight: 500;
    letter-spacing: .7px;
    background-color:#ffffff;
    border:2px solid var(--clr-primary);
    padding:20px 42px;
    color: var(--clr-primary);
    border-radius: var(--border-radius);
     &:hover{
    background-color: var(--clr-primary);
    transition: var(--transition);
    color: #ffffff;
    }
}
.btn.btn-primary{
    background-color:var(--clr-primary);
    color:#ffffff;
    cursor: pointer;
    transition: var(--transition);
    &:hover{
    background-color: var(--clr-body-bg);
    transition: var(--transition);
    color: var(--clr-primary);
    }
}
video{
    max-width: 100%;
}

`;
