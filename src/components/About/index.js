import { Stack } from "@mui/material";
import { CheckForUpdatesButton, useServiceWorkerInitialized } from "features/serviceworkers/useServiceWorkers";
import useAccessiblePageLoad from "hooks/useAccessiblePageLoad";
import { useRef } from "react";
import styled from "styled-components";
import app from "../../../package.json";

const TextContainer = styled.div`
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

    const headingRef = useRef();
    useAccessiblePageLoad({title: 'About Babysitter Card', headingRef});
    const initialized = useServiceWorkerInitialized();

    return (
        <Stack height="100%" justifyContent="space-between">
            <TextContainer>
                <h1 ref={headingRef} tabIndex={0}>About Babysitter Card</h1>
                <p>Babysitter Card is an 18+ communication tool that can convey preferences between consenting adults in an ABDL scene.</p>
                <p>The best way you can use this app is to review boundaries together before enacting a scene; it should <i>never</i> imply consent automatically, and of course parties are welcome to renegotiate a scene at any point.</p> 
                <p>Like any tool, use at your own discretion and of course...</p>
                <p className="centered">❤️ Play safe! ❤️</p>
            </TextContainer>
            <Stack alignItems="center">
                <p>Version {app.version}</p>
                { initialized ? 
                    <Stack alignItems="center">
                        <p>Now Running Offline!</p>
                        <CheckForUpdatesButton variant="contained" />
                    </Stack> : null
                }
            </Stack>
        </Stack>
    )
}

export default About;