import ConsentView from "components/ConsentView";
import Button from "components/shared/Button";
import StyledModal from "components/StyledModal";
import { setConsentPreferences } from "config/storage";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { decode } from "util/data-utils";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    padding-top: 0;
    gap: 1rem;
`

const Message = styled.p`
`

const ButtonBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledButton = styled(Button)`
    padding: 0.5rem 1rem;
    border-radius: 10px;
`

const AcceptButton = styled(StyledButton)`
    background-color: ${({theme}) => theme.globalColors.warn};
`
const CancelButton = styled(StyledButton)`
    background-color: ${({theme}) => theme.globalColors.secondary};
`

const ImportDataPage = () => {

    const {storedData, urlData} = useLoaderData();
    const navigate = useNavigate();

    const handleReject = () => {
        navigate('/');
    }

    const handleAccept = () => {
        setConsentPreferences(decode(urlData));
        navigate('/');
    }

    return <>

        <ConsentView {...{data: storedData}} />
        <StyledModal
            title='Import Consents' 
            isOpen={true} 
            closeModal={handleReject}
        >
            <Content>
                <Message>
                    Import consent data? This action will override your own data!
                </Message>
                <ButtonBar>
                    <CancelButton onClick={handleReject}>
                        Cancel Import
                    </CancelButton>
                    <AcceptButton onClick={handleAccept}>
                        Accept Data
                    </AcceptButton>
                </ButtonBar>
            </Content>
        </StyledModal>
    </>

}

export default ImportDataPage;