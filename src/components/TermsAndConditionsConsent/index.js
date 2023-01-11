import Button from "components/shared/Button";
import StyledModal from "components/StyledModal";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getIsAdult, revokeAllData, setIsAdult, ADULT_KEY, STORAGE_KEY, GYR_SORT_KEY } from "config/storage";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    & * {
        color: ${({theme}) => theme.primary};
        font-style: italic;
        font-size: 0.8rem;
    }
`

const CustomModal = styled(StyledModal)`
    height: 95%;
    width: 90%;
    display: flex;
    flex-direction: column;
`

const ModalBody = styled.div`
    // flex: 1 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: auto; 
`

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

const StyledLink = styled.span`
    color: ${({theme}) => theme.globalColors.primary};
`

const List = styled.ul`
    list-style-type: circle;
    list-style-position: inside;
`

const ListItem = styled.li`
    padding-left: 1rem;
`

const ContentHeader = styled.h2`
    padding-top: 0.5rem;
`

const GdprItem = styled.h3`
    padding-top: 0.5rem;
`

const Table = styled.table`
    border-collapse: collapse;
    border: 1px solid black;
    & * {
        text-align: left;
        vertical-align: middle;
        border: 1px solid black;
        padding: 0.25rem;
    }
    & thead {
        font-weight: bold;
    }
    & tbody {
        font-style: italic;
    }
`

const TermsAndConditionsConsent = () => {

    const isAdult = getIsAdult();
    const [show, setShow] = useState(!isAdult)
    const [showDataPolicy, setShowDataPolicy] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleDecline = () => {
        setIsAdult(false);
        setShow(false);
        navigate('adult-only');
    }

    const handleClose = () => {
        handleAccept();
    }

    const handleAccept = () => {
        setIsAdult(true);
        setShow(false);
        if(location.pathname === '/adult-only') {
            navigate('/');
        }
    }

    const handleGdprRevokeAllData = () => {
        revokeAllData();
        navigate('/');
        navigate(0); // forces a refresh of the page so delete is visible in the UI
    }

    return (
        <>
            <Container>
                <span onClick={() => setShow(true)}>18+ and Terms</span>
                <span onClick={() => setShowDataPolicy(true)}>Data Policy</span>
            </Container>
            <CustomModal 
                    isOpen={show}
                    closeModal={handleClose}
                    title="18+ Only!"
            >
                <ModalBody>
                    <Content>
                        <p>This app is <i>only</i> intended for 18+ consenting adults in a kink context. By using this app you agree:</p> 
                        <List>
                            <ListItem>...you are above 18 years of age and willing to view adult content.</ListItem>
                            <ListItem>...you agree to the <StyledLink onClick={() => setShowDataPolicy(true)}>data policy</StyledLink> (you can revoke your data at any time)</ListItem>
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
                </ModalBody>
            </CustomModal>
            <CustomModal
                isOpen={showDataPolicy}
                closeModal={() => setShowDataPolicy(false)}
                title="Data Policy"
            >
                <ModalBody>
                    <Content>
                        <ContentHeader>Summary</ContentHeader>
                        <p>
                            This application takes privacy very seriously; only necessary data is stored, it is stored on your device, and it is never shared with 3rd-parties. This is accomplished a few ways: 
                        </p>
                        <List>
                            <ListItem>
                                data is stored via your device's LocalStorage (never leaves the device) rather than Cookies (which are sent to the server on each request)
                            </ListItem>
                            <ListItem>
                                Url Fragments (everything after the '#' in your browser) is used for navigation and url params; browsers never send url fragments to the server so it won't e.g. show up in traffic logs.
                            </ListItem>
                        </List>
                        <p>
                            You can find more information on the data stored on your device and how to revoke it at any time below.
                        </p>
                        <ContentHeader>Storage Items</ContentHeader>
                        <GdprItem>Necessary Items</GdprItem>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Storage Item</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ADULT_KEY}</td>
                                    <td>True/False value describing your consent to view adult content.</td>
                                </tr>
                                <tr>
                                    <td>{STORAGE_KEY}</td>
                                    <td>All your kink information for this app (name, pronouns, consent items, etc).</td>
                                </tr>
                                <tr>
                                    <td>{GYR_SORT_KEY}</td>
                                    <td>Sort direction when viewing green-yellow-red kink information</td>
                                </tr>
                            </tbody>
                        </Table>
                        <GdprItem>Preferences Items</GdprItem>
                        <p>(none)</p>
                        <GdprItem>Marketing Items</GdprItem>
                        <p>(none)</p>
                        <GdprItem>Statistics Items</GdprItem>
                        <p>(none)</p>
                        <ContentHeader>Revoking Your Data</ContentHeader>
                        <p>
                            If you wish to clear all stored data, simply click the button below at any time (warning: this is permanent):
                        </p>
                        <br />
                        <NegativeButton onClick={handleGdprRevokeAllData}>
                            Delete My Data (Permanent!)
                        </NegativeButton>
                        <br />
                    </Content>
                </ModalBody>
            </CustomModal>
        </>
    )
}

export default TermsAndConditionsConsent;