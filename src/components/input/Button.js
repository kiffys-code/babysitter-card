import styled from "styled-components"

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid white;
    box-shadow: 1px 1px 2px black;
`

const Button = ({children, ...props}) => {
    return <StyledButton {...props}>
        {children}
    </StyledButton>
}

export default Button;