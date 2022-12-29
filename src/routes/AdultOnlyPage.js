import styled from "styled-components";

const AdultMessage = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 1rem;
text-align: center;
`

const AdultOnlyPage = () => {
    return  <AdultMessage>
                You need to be over 18 years old to view this content.
            </AdultMessage>
}

export default AdultOnlyPage;