import styled from "styled-components";
import TextInput from "components/shared/input/TextInput";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Name = styled.h1`
    font-family: AyeshaDisplay, "Comic Sans", cursive;
    font-size: 2.6rem;
`

const PlayAge = styled.h2`
    font-family: AyeshaDisplay, "Comic Sans", cursive;
    font-size: 2rem;
    background: transparent;
    padding: 0;
`

const NameTag = ({name, playAge}) => {

    return (
        <Container>
            <Name>{name}</Name>
            <PlayAge>{playAge}</PlayAge>
        </Container>
    );
}

export default NameTag;