import HamburgerMenu from "components/HamburgerMenu";
import MenuContainer from "components/shared/MenuContainer";
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
`

const StyledMenuContainer = styled(MenuContainer)`
    @media print {
        display: none;
    }
`

const ConsentView = ({data}) => {

    console.log({data})
    return (
        <Container>
            {
                Object.keys(data).length > 0
                ? <StyledConsentData {...{data}} />
                : <NoData><div>Ready to start? <Link to='/change' >Click Here</Link>, or the menu icon to begin!</div></NoData>
            }
            <StyledMenuContainer>
                <HamburgerMenu {...{data}} />
            </StyledMenuContainer>
        </Container>
    )
}

export default ConsentView;