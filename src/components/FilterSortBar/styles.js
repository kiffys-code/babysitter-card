import Button from "components/shared/Button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    background-color: ${({theme}) => theme.globalColors.primary};
`