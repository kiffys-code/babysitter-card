import styled from "styled-components";

const AdultMessage = styled.h1`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
`

const AdultOnlyPage = () => {
    return  (
        <AdultMessage>
            You need to be over 18 years old to use this app.
        </AdultMessage>
    )
}

export default AdultOnlyPage;