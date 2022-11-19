import styled from "styled-components";
import TextInput from "./input/TextInput";
import * as Consent from "./Consent"
import { useState } from "react";
import StyledModal from "./StyledModal";
import ConsentInfo from "./ConsentInfo";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Ask = styled(TextInput)`
    font-size: 1.4rem;
    text-align: left;
`
const AnswerIcon = styled(Consent.Icon)`
    height: 2rem;
`

const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ConsentListItem = ({consent, prefix, control, edit, updateAnswer}) => {

    const [showAnswerModal, setShowAnswerModal] = useState(false);

    const onClickAnswer = (level) => {
        if(edit) {
            updateAnswer({...consent, answer: level});
        }
    }

    const renderedAnswerModalContent = (() => {
        if(edit) {
            return Object.keys(Consent.Levels).map(key => {
                const level = Consent.Levels[key];
                return (
                    <ConsentInfo 
                        level={level}
                        onClick={() => onClickAnswer(level)}
                        edit={edit}
                    />
                );
            })
        } else {
            return <ConsentInfo 
                level={consent.answer}
                edit={edit}
            />
        }
    })();

    return (
        <Container>
            <AnswerIcon 
                onClick={() => setShowAnswerModal(true)} 
                level={consent.answer} 
            />
            <Ask 
                control={control}
                name={`${prefix}.ask`}
                defaultValue='' 
                edit={edit}
            />
            <StyledModal
                isOpen={showAnswerModal}
                title={consent.ask}
                closeModal={() => setShowAnswerModal(false)}
            >
                <ModalContentContainer>
                    {renderedAnswerModalContent}
                </ModalContentContainer>
            </StyledModal>
        </Container>
    )
}

export default ConsentListItem;