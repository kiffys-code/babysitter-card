import Button from "components/shared/Button";
import EditableSelect from "components/shared/input/EditableSelect";
import TextInput from "components/shared/input/TextInput";
import { Input } from "components/shared/input/TextInput/styled";
import { templates } from "config/templates";
import { useState } from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`

const InputContainer = styled.div`
    display: flex;
    width: 100%;
`

const EditToggle = styled(Button)`
    padding: 0.75rem 0.75rem;
    border-radius: 0 10px 10px 0;
    background-color: ${({theme}) => theme.globalColors.primary};
    box-shadow: none;
`

const Icon = styled.img`
    width: 2rem;
    filter: saturate(0) brightness(100);
`

const StyledInput = styled(Input)`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    text-align: left;
`

const Label = styled.label`

`

const AskEditor = ({control}) => {

    const [editMode, setEditMode] = useState(false);

    const editor = editMode 
        ? <EditableSelect 
            control={control}
            name='ask'
            defaultValue='' 
            placeholder='Something special...'
            options={templates}
        />
        : <Controller 
            name='ask'
            control={control}
            defaultValue=''
            render={({field}) =>
                <StyledInput 
                    {...field}
                    placeholder='Something special...'
                />
        }/>

    const renderedIcon = editMode 
        ? <Icon src={require('./crayon.png')} />
        : <Icon src={require('./toy-blocks.png')} />

    return (
        <Container>
            <Label>{editMode ? 'Ask (search/select)' : 'Ask (free text)'}</Label>
            <InputContainer>
                {editor}
                <EditToggle onClick={() => setEditMode(!editMode)}>
                    {renderedIcon}
                </EditToggle>
            </InputContainer>
        </Container>
    )
}

export default AskEditor;