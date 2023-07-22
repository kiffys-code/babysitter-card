import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    filter: brightness(0.8);

    & * {
        color: ${({theme}) => theme.text};
    }
`

const ListItem = ({to, children}) => {
    return (
        <li>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}

const Footer = ({className}) => {

    return (
        <footer>
            <nav aria-label='secondary'>
                <Container className={className} >
                    <ListItem to={'/attributions'} >
                        Attributions
                    </ListItem>
                    <ListItem to={'/about'}>
                        About
                    </ListItem>
                    <ListItem to={'/adult-policy'}>
                        18+ Policy
                    </ListItem>
                    <ListItem to={'/data-policy'}>
                        Data Policy
                    </ListItem>
                </Container>
            </nav>
        </footer>
    )
}

export default Footer;