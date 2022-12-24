import styled from "styled-components";
import Button from "./Button";

const RoundedButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${({theme}) => theme.globalColors.primary};
    padding: 0.8rem;
    height: 4rem;
    width: 4rem;
    border-radius: 100%;
    box-shadow: 0px 2px 10px #333; 
`

export default RoundedButton;