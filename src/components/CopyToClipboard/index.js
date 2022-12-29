import Icon from "components/shared/Icon";
import { Input } from "components/shared/input/TextInput/styled";
import { useState } from "react";
import { useRef } from "react";
import styled from "styled-components";

const { default: Button } = require("components/shared/Button")

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const Text = styled(Input)`
    border-radius: 10px 0 0 10px;
`

const StyledButton = styled(Button)`
    padding: 0.75rem 0.75rem;
    border-radius: 0 10px 10px 0;
    display: flex;
    gap: 0.5rem;
    background-color: ${({theme}) => theme.globalColors.primary};
`

const CopyToClipboard = ({text}) => {

    const [copied, setCopied] = useState(false);
    const textRef = useRef();

    const doCopy = async (str) => {
        if(navigator.clipboard) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, str)
        }
    }

    const handleTextClick = () => {
        textRef.current.select();
    }

    const handleButtonClick = () => {
        doCopy(text);
        setCopied(true);
    }

    const icon = copied 
        ? <Icon src={require('assets/img/check.png')} /> 
        : <Icon src={require('assets/img/copy.png')} />

    return (
        <Container>
            <Text 
                ref={textRef} 
                value={text} 
                onClick={handleTextClick} 
                readOnly
            />
            <StyledButton onClick={handleButtonClick}>{icon}</StyledButton>
        </Container>
    )
}

export default CopyToClipboard;