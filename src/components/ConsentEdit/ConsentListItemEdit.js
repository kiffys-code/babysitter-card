import styled from "styled-components";
import TextInput from "components/shared/input/TextInput";
import Button from "components/shared/Button";
import { useState } from "react";
import { Icon, LEVELS } from "components/Consent";
import StyledModal from "components/StyledModal";
import AnswerPicker from "./AnswerPicker";
import { Controller, useForm } from "react-hook-form";
import EditableSelect from "components/shared/input/EditableSelect";
import { templates } from "config/templates";

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
    color: ${({theme}) => theme.primary};
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 0.5rem;
`

const DeleteButton = styled(Button)`
    background-color: ${({theme}) => theme.globalColors.warn};
    border-radius: 10px;
    height: 3rem;
    padding: 0 1rem;
`

const ConfirmButton = styled(Button)`
    background-color: ${({theme}) => theme.globalColors.primary};
    border-radius: 10px;
    height: 3rem;
    padding: 0 1rem;
`

const CancelButton = styled(Button)`
    background-color: ${({theme}) => theme.globalColors.secondary};
    border-radius: 10px;
    height: 3rem;
    padding: 0 1rem;
`

const ConsentListItemEdit = ({consent, updateConsent, deleteConsent}) => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showTemplateModal, setShowTemplateModal] = useState(false);
    const {control, handleSubmit} = useForm({defaultValues: consent});

    const onSubmit = (data) => {
        updateConsent(data);
    }

    return (
        <>
            <Container onClick={() => setShowEditModal(true)}>
                <AnswerIcon level={LEVELS[consent.answer]} />
                <AskText>{consent.ask}</AskText>
            </Container>
            <StyledModal 
                isOpen={showEditModal}
                title='Edit Item'
                closeModal={() => setShowEditModal(false)}
            >
                {/* <TextInput 
                    control={control}
                    name={`ask`}
                    label='Ask'
                    defaultValue='' 
                    placeholder='Something special...'
                /> */}
                <EditableSelect 
                    control={control}
                    name='ask'
                    label='Ask'
                    defaultValue='' 
                    placeholder='Something special...'
                    options={templates}
                />
                {/* <Button onClick={() => setShowTemplateModal(true)}>Click Me</Button> */}
                <AnswerPicker 
                    control={control}
                    name={`answer`}
                />
                <ButtonsContainer>    
                    <DeleteButton onClick={() => deleteConsent()} >
                        Delete
                    </DeleteButton>
                    <ButtonGroup>
                        <CancelButton onClick={() => setShowEditModal(false)}>
                            Cancel
                        </CancelButton>
                        <ConfirmButton onClick={handleSubmit(onSubmit)}>
                            Save
                        </ConfirmButton>
                    </ButtonGroup>
                </ButtonsContainer>
                {/* <StyledModal
                    isOpen={showTemplateModal}
                    title='Pick Template'
                    closeModal={() => setShowTemplateModal(false)}
                >
                    foo
                </StyledModal> */}
            </StyledModal>
        </>
    )
}

export default ConsentListItemEdit;