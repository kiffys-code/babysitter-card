import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    filter: brightness(0.8);

    & * {
        color: ${({theme}) => theme.text};
    }
`

const Footer = ({className}) => {

    return (
        <Container className={className}>
            <Link to={'/attributions'} >
                Attributions
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <Link to={'/adult-policy'}>
                18+ Policy
            </Link>
            <Link to={'/data-policy'}>
                Data Policy
            </Link>
        </Container>
    )
}

export default Footer;