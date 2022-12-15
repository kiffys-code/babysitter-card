import styled from "styled-components";
import {LEVELS, Icon as ConsentIcon} from "components/Consent"
import { useState } from "react";
import StyledModal from "components/StyledModal";
import ConsentInfo from "components/ConsentInfo";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
`

const Ask = styled.div`
    font-size: 1.4rem;
    text-align: left !important;
    width: 100%;
    color: ${({theme}) => theme.text};
`
const AnswerIcon = styled(ConsentIcon)`
    height: 2rem;
`

const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ConsentListItem = ({consent}) => {

    const [showAnswerModal, setShowAnswerModal] = useState(false);

    return (
        <>
            <Container>
                <AnswerIcon 
                    onClick={() => setShowAnswerModal(true)} 
                    level={LEVELS[consent.answer]} 
                />
                <Ask>
                    {consent.ask}
                </Ask>
            </Container>
            <StyledModal
                isOpen={showAnswerModal}
                title={consent.ask}
                closeModal={() => setShowAnswerModal(false)}
            >
                <ModalContentContainer>
                    <ConsentInfo 
                        level={LEVELS[consent.answer]}
                    />
                </ModalContentContainer>
            </StyledModal>
        </>
    )
}

export default ConsentListItem;