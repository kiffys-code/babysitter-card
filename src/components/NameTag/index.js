import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Name = styled.h1`
    font-family: AyeshaDisplay, "Comic Sans", cursive;
    font-size: 2.6rem;
    color: ${({theme}) => theme.text};
`

const PlayAge = styled.h2`
    font-family: AyeshaDisplay, "Comic Sans", cursive;
    font-size: 2rem;
    background: transparent;
    padding: 0;
    color: ${({theme}) => theme.text};
`

const Pronouns = styled.h3`
    font-size: 1.2rem;
    font-style: italic;
    background: transparent;
    padding: 0;
    color: ${({theme}) => theme.text};
`

const Audience = styled.h4`
    font-size: 1.5rem;
    font-style: italic;
    background: transparent;
    padding: 0;
    color: ${({theme}) => theme.text};
`

const NameTag = ({name, playAge, pronouns, audience}) => {

    return (
        <Container>
            <Name>{name}</Name>
            <PlayAge>{playAge}</PlayAge>
            <Pronouns>{pronouns}</Pronouns>
            <Audience>Intended for: {audience}</Audience>
        </Container>
    );
}

export default NameTag;