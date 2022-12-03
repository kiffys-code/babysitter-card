import styled from "styled-components";
import TextInput from "./input/TextInput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({edit}) => edit ? `
        justify-content: space-around;
        padding: 1rem 0rem;
        gap: 1rem;
    ` : ``}
`

const Name = styled(TextInput)`
    font-family: AyeshaDisplay, "Comic Sans", cursive;
    font-size: 2.6rem;
    ${({edit}) => edit ? `
        width: 75vw;
    ` : ``}
    
`

const PlayAge = styled(TextInput)`
    font-family: AyeshaDisplay, "Comic Sans", cursive;
    font-size: 2rem;
    ${({edit}) => edit ? `
        width: 75vw;
    ` : `
        background: transparent;
        padding: 0;
    `}
`

const NameTag = ({form, edit}) => {

    const {control, register} = form;

    return (
        <Container edit={edit}>
            <Name
                control={control}
                register={register}
                name='name'
                label='Name'
                defaultValue='This Little'
                edit={edit}
            />
            <PlayAge 
                control={control}
                register={register}
                name='playAge'
                label='Play Age'
                defaultValue='Toddler'
                edit={edit}
            />
        </Container>
    );
}

export default NameTag;