import { useRef } from "react";
import styled from "styled-components";

const { default: Button } = require("components/shared/Button")

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

const Text = styled.input`

`

const StyledButton = styled(Button)`

`

const CopyToClipboard = ({text}) => {

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
    }

    return (
        <Container>
            <Text 
                ref={textRef} 
                value={text} 
                onClick={handleTextClick} 
                readonly
            />
            <StyledButton onClick={handleButtonClick}>Copy</StyledButton>
        </Container>
    )
}

export default CopyToClipboard;