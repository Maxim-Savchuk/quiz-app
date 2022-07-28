import styled, { createGlobalStyle } from 'styled-components';
import bgImage from './images/winter.jpg';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}

html {
    height: 100%;
}

body {
    background-image: url(${bgImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #000;
  }

  .score {
    color: #000;
    margin: 0;
    font-size: 2rem;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: #878787;
    filter: drop-shadow(2px 2px #fff);
  }

  .start,
  .next {
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
    background-color: #878787;
    border: 1px solid #878787;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 0 20px;
  }
`;
