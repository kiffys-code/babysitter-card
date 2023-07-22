import Button from "components/shared/Button";
import List, { ListItem } from "components/shared/List";
import { setIsAdult } from "config/storage";
import useAccessiblePageLoad from "hooks/useAccessiblePageLoad";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-right: 1rem;
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
const NegativeButton = styled(StyledButton)`
    background-color: ${({theme}) => theme.globalColors.warn};
`

const AdultPolicy = () => {

    const navigate = useNavigate();
    const headingRef = useRef();
    useAccessiblePageLoad({title: '18+ Only', headingRef});

    const handleAccept = () => {
        setIsAdult(true);
        navigate('/');
    }

    const handleDecline = () => {
        setIsAdult(false);
        navigate('declined');
    }

    return (
        <>
            <h1 ref={headingRef} tabIndex={0}>18+ Only</h1>
            <Content>
                <p>This app is <i>only</i> intended for 18+ consenting adults in a kink context. By using this app you agree:</p> 
                <List>
                    <ListItem>...you are above 18 years of age and willing to view adult content.</ListItem>
                    <ListItem>...you agree to <Link to={'/data-policy'}>the data policy</Link> (you can revoke your data at any time)</ListItem>
                </List>
            </Content>
            <ButtonBar>
                <NegativeButton onClick={handleDecline} >
                    Get Me Out Of Here!
                </NegativeButton>
                <AcceptButton onClick={handleAccept} >
                    I agree to these terms
                </AcceptButton>
            </ButtonBar>
        </>
    )
}

export default AdultPolicy;