import styled from 'styled-components';

export const JokeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 2.5rem;
    width: 35%;
    border: .2rem solid ;
    border-radius: 2rem ;
    color: blue;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    &:hover{
        border: .2rem solid green;
        border-radius: 2rem;
        color: black;
    }

   img{
       border-radius: 5rem;
   }

    h2{
        color: black;
        font-family: 'Dancing Script', cursive;
        font-size: 3rem;

        &:hover{
            color: green;
            font-size: 1.6rem;
        }
    }
`