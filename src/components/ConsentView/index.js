import HamburgerMenu from "components/HamburgerMenu";
import MenuContainer from "components/shared/MenuContainer";
import styled from "styled-components";
import ConsentData from "./ConsentData";

const Container = styled.div`
    height: 100%;
`

const StyledConsentData = styled(ConsentData)`
    height: 100%;
`

const ConsentView = ({data}) => {

    return (
        <Container>
            <StyledConsentData {...{data}} />
            <MenuContainer>
                <HamburgerMenu {...{data}} />
            </MenuContainer>
        </Container>
    )
}

export default ConsentView;