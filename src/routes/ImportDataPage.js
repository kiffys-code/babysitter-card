import ConsentView from "components/ConsentView";
import Button from "components/shared/Button";
import StyledModal from "components/StyledModal";
import { setConsentPreferences } from "config/storage";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { decode } from "util/data-utils";

const Message = styled.p``

const ImportDataPage = () => {

    const {storedData, urlData} = useLoaderData();
    const navigate = useNavigate();

    const handleReject = () => {
        navigate('/');
    }

    const handleAccept = () => {
        setConsentPreferences(decode(urlData));
        navigate('/')
    }

    return <>
        <ConsentView {...{data: storedData}} />
        <StyledModal
            title='Import Consents' 
            isOpen={true} 
            closeModal={handleReject}
        >
            <Message>
                Import consent data? This action will override your own data!
            </Message>
            <Button onClick={handleAccept}>Accept Data</Button>
            <Button onClick={handleReject}>Cancel Import</Button>
        </StyledModal>
    </>

}

export default ImportDataPage;