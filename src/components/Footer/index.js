import { useState } from "react";
import styled from "styled-components";
import Attributions from "components/Attributions";
import StyledModal from "components/StyledModal";
import About from "components/About";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    filter: brightness(0.8);
    padding: 0.5rem 0;

    & * {
        color: ${({theme}) => theme.text};
    }
`

const Footer = ({className}) => {

    const [showAttr, setShowAttr] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    return (
        <Container className={className}>
            
            <span 
                onClick={() => setShowAttr(true)} 
            >
                Attributions
            </span>
            <span><i>18+ Only</i></span>
            <span 
                onClick={() => setShowAbout(true)} 
            >
                About
            </span>
            <StyledModal 
                isOpen={showAttr}
                closeModal={() => setShowAttr(false)}
                title="Attributions"
            >
                <Attributions />
            </StyledModal>
            <StyledModal
                isOpen={showAbout}
                closeModal={() => setShowAbout(false)}
                title="What Is This?"
            >
                <About />
            </StyledModal>
        </Container>
    )
}

export default Footer;