import styled from "styled-components";
import TextInput from "./input/TextInput";
import * as Consent from "./Consent"
import { useState } from "react";
import StyledModal from "./StyledModal";
import ConsentInfo from "./ConsentInfo";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: ${({edit}) => edit ? '0' : '1rem'};
    width: 100%;
`

const Ask = styled(TextInput)`
    font-size: 1.4rem;
    text-align: left;
    width: ${({edit}) => edit ? '90%' : '100%'};
    
`
const AnswerIcon = styled(Consent.Icon)`
    height: 2rem;
`

const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const DeleteIcon = styled.img`
    height: 2rem;
`

const ConsentListItem = ({consent, prefix, control, edit, updateAnswer, deleteConsent}) => {

    const [showAnswerModal, setShowAnswerModal] = useState(false);

    const onClickAnswer = (level) => {
        if(edit) {
            console.log({consent})
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
        <>
            <Container edit={edit}>
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
                {edit &&
                    <DeleteIcon 
                        src={require('./trash-bin.png')}
                        alt='Delete'
                        onClick={() => deleteConsent()}
                    />
                }
            </Container>
            <StyledModal
                isOpen={showAnswerModal}
                title={consent.ask}
                closeModal={() => setShowAnswerModal(false)}
            >
                <ModalContentContainer>
                    {renderedAnswerModalContent}
                </ModalContentContainer>
            </StyledModal>
        </>
    )
}

export default ConsentListItem;