import Button from "components/shared/Button";
import StyledModal from "components/StyledModal";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getIsAdult, setIsAdult } from "config/storage";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.primary};
    font-style: italic;
    font-size: 0.8rem;
`

const CustomModal = styled(StyledModal)`
    height: 95%;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Content = styled.div`

`

const ButtonBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
`

const StyledButton = styled(Button)`
    padding: 0.5rem 1rem;
    border-radius: 10px;
`

const AcceptButton = styled(StyledButton)`
    background-color: ${({theme}) => theme.globalColors.primary};
`
const DeclineButton = styled(StyledButton)`
    background-color: ${({theme}) => theme.globalColors.warn};
`

const AdultConsent = () => {

    const isAdult = getIsAdult();
    const [show, setShow] = useState(!isAdult)
    const navigate = useNavigate();
    const location = useLocation();

    const handleDecline = () => {
        setIsAdult(false);
        setShow(false);
        navigate('adult-only');
    }

    const handleAccept = () => {
        setIsAdult(true);
        setShow(false);
        if(location.pathname === '/adult-only') {
            navigate('/');
        }
    }

    return (
        <>
            <Container onClick={() => setShow(true)}>
                18+ Only
            </Container>
            <CustomModal 
                    isOpen={show}
                    closeModal={() => setShow(false)}
                    title="18+ Only!"
            >
                <Content>
                    <p>This app is <i>only</i> intended for 18+ consenting adults in a kink context. By using this app you affirm that you are above 18 years of age and willing to view adult content.</p>
                </Content>
                <ButtonBar>
                    <DeclineButton onClick={handleDecline} >
                        Get Me Out Of Here!
                    </DeclineButton>
                    <AcceptButton onClick={handleAccept} >
                        I am over 18 years old
                    </AcceptButton>
                </ButtonBar>
            </CustomModal>
        </>
    )
}

export default AdultConsent;