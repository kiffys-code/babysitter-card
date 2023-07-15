import { Link } from "react-router-dom";
import styled from "styled-components";
import ConsentData from "./ConsentData";

const Container = styled.div`
    height: 100%;
`

const StyledConsentData = styled(ConsentData)`
    height: 100%;
`

const NoData = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;

    h1 {
        font-size: 1.5rem;
    }
`

const ConsentView = ({data}) => {

    return (
        <Container>
            {
                Object.keys(data).length > 0
                ? <StyledConsentData {...{data}} />
                : <NoData><h1>Ready to start?<br /><Link to='/change' >Click Here</Link>, or the menu icon to begin!</h1></NoData>
            }
        </Container>
    )
}

export default ConsentView;