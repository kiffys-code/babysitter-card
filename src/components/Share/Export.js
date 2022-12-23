import CopyToClipboard from "components/CopyToClipboard";
import StyledModal from "components/StyledModal";
import { useState } from "react";
import styled from "styled-components";
import { encode } from "util/data-utils";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Link = styled.a`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
`

const Icon = styled.img`
    height: 1.2rem;
`

const Export = ({data}) => {

    const [showDesktopShare, setshowDesktopShare] = useState(false);

    const encoded = encode(data);
    const shareUrl = `${window.location.origin}/import?data=${encoded}`

    const handleClick = () => {
        // if(navigator.share) {
        //     console.log('todo nav apis for mobile')
        // } else {
        //     setshowDesktopShare(true);
        // }
        setshowDesktopShare(true);
    }

    return (
        <Container>
            <Link onClick={handleClick}>
                <span>Share</span>
                <Icon src={require('./share.png')} alt='share icon' />
            </Link>
            <StyledModal 
                title='Share Consents' 
                isOpen={showDesktopShare} 
                closeModal={() => setshowDesktopShare(false)}
            >
                <CopyToClipboard text={shareUrl} />
            </StyledModal>
        </Container>
    )
}

export default Export;