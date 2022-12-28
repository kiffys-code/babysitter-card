import ConsentView from "components/ConsentView";
import ConsentData from "components/ConsentView/ConsentData";
import ConsentList from "components/ConsentView/ConsentList";
import NameTag from "components/NameTag";
import Button from "components/shared/Button";
import Icon from "components/shared/Icon";
import MenuContainer from "components/shared/MenuContainer";
import RoundedButton from "components/shared/RoundedButton";
import StyledModal from "components/StyledModal";
import { setConsentPreferences } from "config/storage";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { decode } from "util/data-utils";
import TimeAgo from "util/time-utils";

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

const WarningContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;

    & > * {
        text-align: center;     
    }
`

const ShareDate = styled.h2`
`

const WarningDetail = styled.p`
    padding: 0.5rem 0;
    font-style: italic;
`

const stripe1 = 'rgba(0, 0, 0, 0.05)';
const stripe2 = 'rgba(0, 0, 0, 0.15)';

const StyledConsentData = styled(ConsentData)`
    background: repeating-linear-gradient(
        45deg,
        ${stripe1},
        ${stripe1} 10px,
        ${stripe2} 10px,
        ${stripe2} 20px
    );
    width: 90%;
    padding-top: 1rem;
    flex: 1 1 auto;
`

const ImportDataPage = () => {

    const {storedData, urlData} = useLoaderData();
    const navigate = useNavigate();

    // const handleReject = () => {
    //     navigate('/');
    // }

    // const handleAccept = () => {
    //     setConsentPreferences(decode(urlData));
    //     navigate('/');
    // }

    console.log({urlData})
    const data = decode(urlData);

    const startDate = new Date(data.shareDate);
    const endDate = new Date();
    const diff = endDate.getTime() - startDate.getTime();
    const timeAgo = new TimeAgo();
    const elapsed = timeAgo.format(Date.now() - diff, 'mini');

    return <>
        
        <WarningContainer id='warning-container'>
            <ShareDate id='share-date'>Shared {elapsed} ago</ShareDate>
            <WarningDetail id='warning-detail'>Current details must be clarified before any play session!</WarningDetail>
            <StyledConsentData {...{data}}  />
            <MenuContainer>
                <Link to='/'>
                    <RoundedButton>
                        <Icon src={require('assets/img/home.png')} alt='home'/>
                    </RoundedButton>
                </Link>
            </MenuContainer>
        </WarningContainer>

        {/* <ConsentView {...{data: storedData}} /> */}
        {/* <StyledModal
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
        </StyledModal> */}
    </>

}

export default ImportDataPage;