import { useState } from "react";
import styled from "styled-components";
import TextInput from "./input/TextInput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NameTag = ({form}) => {

    const {control} = form;

    return (
        <Container>
            <TextInput 
                control={control}
                name='name'
                defaultValue='This Little'
            />
            <TextInput 
                control={control}
                name='playAge'
                defaultValue='Toddler'
            />

        
        </Container>
    );
}

export default NameTag;