import styled from "styled-components";

const Input = styled.input`
    
    border: none;
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    background-color: transparent;
    color: ${({theme}) => theme.text} !important;
    ${({edit}) => edit ? `
        border: solid 1px #777;
        border-radius: 10px;
        color: black;
        text-shadow: none;
    ` : `
        padding: 0.5rem 0rem;
    `}

    &:disabled {
        background-color: inherit;
        color: inherit;
    }

`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export {Container, Input};