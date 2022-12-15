import { useState } from "react";
import styled from "styled-components";
import Attributions from "components/Attributions";
import StyledModal from "components/StyledModal";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    filter: brightness(0.8);

    & span {
        color: ${({theme}) => theme.text};
    }
`

const Footer = () => {

    const [showAttr, setShowAttr] = useState(false);

    const closeModal = () => setShowAttr(false);

    return (
        <Container>
            
            <span 
                onClick={() => setShowAttr(true)} 
            >
                Attributions
            </span>
            <span>
                18+ Only
            </span>
            <StyledModal 
                isOpen={showAttr}
                closeModal={closeModal}
                title="Attributions"
            >
                <Attributions />
            </StyledModal>
        </Container>
    )
}

export default Footer;