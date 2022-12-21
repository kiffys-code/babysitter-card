import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    border: none;
    padding: 1rem 0.5rem;
    font-size: 1.2rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.10);
    color: ${({theme}) => theme.text} !important;
    border: solid 1px #777;
    border-radius: 10px;
    color: black;
    text-shadow: none;

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
    width: 100%;
`

export {Container, Input};