import ConsentData from "components/ConsentView/ConsentData";
import Icon from "components/shared/Icon";
import MenuContainer from "components/shared/MenuContainer";
import RoundedButton from "components/shared/RoundedButton";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { decode } from "util/data-utils";
import TimeAgo from "util/time-utils";
import {useState, useEffect} from 'react';

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
    border-radius: 10px;
`

const ViewSharePage = () => {

    const {urlData} = useLoaderData();

    const [data, setData] = useState();

    useEffect(() => {
        (async () => {
            setData(await decode(urlData));
        })().catch(e => console.log("couldn't decompress data", e))
    }, []);
    
    const startDate = new Date(data?.shareDate);
    const endDate = new Date();
    const diff = endDate.getTime() - startDate.getTime();
    const timeAgo = new TimeAgo();
    const elapsed = timeAgo.format(Date.now() - diff, 'mini');

    return <>
        
        <WarningContainer id='warning-container'>
            <ShareDate id='share-date'>Shared {elapsed} ago</ShareDate>
            <WarningDetail id='warning-detail'>Current details must be clarified before any play session!</WarningDetail>
            {data ? <StyledConsentData {...{data}}  /> : null }
            <MenuContainer>
                <Link to='/'>
                    <RoundedButton>
                        <Icon src={require('assets/img/home.png')} alt='home'/>
                    </RoundedButton>
                </Link>
            </MenuContainer>
        </WarningContainer>
    </>

}

export default ViewSharePage;