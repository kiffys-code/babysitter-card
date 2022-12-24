import HamburgerMenu from "components/HamburgerMenu";
import NameTag from "components/NameTag";
import MenuContainer from "components/shared/MenuContainer";
import styled from "styled-components";
import ConsentList from "./ConsentList";

const Container = styled.div`

`

const ConsentView = ({data}) => {

    const {name, playAge, consents, pronouns, audience} = data;

    return (
        <Container>
            <NameTag {...{name, playAge, pronouns, audience}} />
            <ConsentList {...{consents}} />
            <MenuContainer>
                <HamburgerMenu {...{data}} />
            </MenuContainer>
        </Container>
    )
}

export default ConsentView;