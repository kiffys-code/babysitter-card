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
            <p>The best way you can use this app is to review boundaries together before enacting a scene; it should <i>never</i> imply consent automatically, and of course parties are welcome to renegotiate a scene at any point.</p> 
            <p>Like any tool, use at your own discretion and of course...</p>
            <p className="centered">❤️ Play safe! ❤️</p>
        </Container>
    )
}

export default About;