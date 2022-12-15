import styled from "styled-components";

const Container = styled.div`
    color: ${({theme}) => theme.text};
    & p {
        margin: 0.5rem 0;
        text-align: justify;
    }
    & .centered {
        text-align: center;
    }
`

const About = () => {
    return (
        <Container>
            <p>Babysitter Card is an 18+ communication tool that can convey preferences between consenting adults in an ABDL scene.</p>
            <p>However this app should <i>never</i> imply consent where it hasn't been already communicated. Like any tool, use at your own discretion.</p>
            <p className="centered">❤️ Play safe! ❤️</p>
        </Container>
    )
}

export default About;