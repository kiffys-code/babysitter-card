import { useState } from "react";
import styled from "styled-components";
import Attributions from "./Attributions";
import StyledModal from "./StyledModal";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

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