import styled from "styled-components"

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid white;
    box-shadow: 1px 1px 2px black;

    &:active {
        filter: brightness(0.8);
    }
`

const Button = ({children, className, ...props}) => {
    return <StyledButton {...{className, ...props}}>
        {children}
    </StyledButton>
}

export default Button;