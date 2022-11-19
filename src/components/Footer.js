import { useState } from "react";
import styled from "styled-components";
import Attributions from "./Attributions";
import StyledModal from "./StyledModal";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: #888;
`

const Footer = () => {

    const [showAttr, setShowAttr] = useState(false);

    const closeModal = () => setShowAttr(false);

    return (
        <Container>
            <div>
                Copyright {new Date().getFullYear()}, Kiffy
            </div>
            <a href="https://github.com/kiffys-code/babysitter-card">
                github.com/kiffys-code
            </a>
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