import { useState } from "react";
import styled from "styled-components";
import TextInput from "./input/TextInput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Name = styled(TextInput)`
    font-size: 2.2rem !important;
`

const PlayAge = styled(TextInput)`
    position: relative;
    top: -1.5rem;
    background: transparent;
`

const NameTag = ({form}) => {

    const {control} = form;

    return (
        <Container>
            <Name 
                control={control}
                name='name'
                defaultValue='This Little'
            />
            <PlayAge 
                control={control}
                name='playAge'
                defaultValue='Toddler'
            />

        
        </Container>
    );
}

export default NameTag;