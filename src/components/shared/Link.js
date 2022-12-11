import styled from "styled-components"

const StyledLink = styled.a`
    color: ${({theme}) => theme.text};
`

const Link = ({children, ...props}) => {
    return (
        <StyledLink {...props} target="_blank" rel="noopener noreferrer" >
            {children}
        </StyledLink>
    )
}

export default Link;