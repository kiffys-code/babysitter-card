import styled from "styled-components";
import TextInput from "components/shared/input/TextInput";
import Button from "components/shared/Button";
import { useState } from "react";
import { Icon, LEVELS } from "components/Consent";
import StyledModal from "components/StyledModal";
import AnswerPicker from "./AnswerPicker";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    width: 100%;
    border: 1px solid #777;
    border-radius: 10px;
    padding: 1rem 0.5rem;
    background-color: rgb(255, 255, 255, 0.10);
`

const AnswerIcon = styled(Icon)`
    height: 2rem;
`

const AskText = styled.div`
    text-align: left;
`

const DeleteButton = styled(Button)`
    background-color: red;
    border-radius: 10px;
    height: 3rem;
`

const ConsentListItemEdit = ({control, name, consent, deleteConsent}) => {

    const [showEditModal, setShowEditModal] = useState(false);

    return (
        <>
            <Container onClick={() => setShowEditModal(true)}>
                <AnswerIcon level={LEVELS[consent.answer]} />
                <AskText>{consent.ask}</AskText>
            </Container>
            <StyledModal 
                isOpen={showEditModal}
                title='Edit Consent Item'
                closeModal={() => setShowEditModal(false)}

            >
                <TextInput 
                    control={control}
                    name={`${name}.ask`}
                    label='Ask'
                    defaultValue='' 
                    placeholder='Something special...'
                />
                <AnswerPicker 
                    control={control}
                    name={`${name}.answer`}
                />
                <DeleteButton onClick={() => deleteConsent()} >
                    Delete
                 </DeleteButton>
            </StyledModal>
        </>
        // <>
        //     <Container>
        //         <ModalSelect 
        //             control={control}
        //             name={`${name}.answer`}
        //             label={consent.ask}
        //             defaultValue={Consent.LEVELS.yellow}
        //             options={Object.keys(Consent.LEVELS).map(key => ({
        //                 label: <ConsentInfo 
        //                             level={Consent.LEVELS[key]}
        //                         />,
        //                 value: key
        //             }))}
        //         />
        //         <Ask 
        //             control={control}
        //             name={`${name}.ask`}
        //             defaultValue='' 
        //             placeholder='Something special...'
        //         />
        //         <DeleteButton onClick={() => deleteConsent()} >
        //             <DeleteIcon 
        //                 src={require('./trash-bin.png')}
        //                 alt='Delete'
        //             />
        //         </DeleteButton>
        //     </Container>
        // </>
    )
}

export default ConsentListItemEdit;