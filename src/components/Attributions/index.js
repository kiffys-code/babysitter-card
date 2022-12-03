import styled from "styled-components";
import Link from "../common/Link";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & div, & a {
        color: ${({theme}) => theme.text};
    }
`

const Attributions = () => {
    return (
        <Container>
            <div>
                Copyright {new Date().getFullYear()}, Kiffy
            </div>
            <Link href="https://github.com/kiffys-code/babysitter-card" title='source code'>
                github.com/kiffys-code
            </Link>
            <Link href="https://www.fontspace.com/ayesha-display-font-f85785" title="AyeshaDisplay Font">
                AyeshaDisplay font by Createivetacos - Fontspace
            </Link>
            <Link href="https://opendyslexic.org/" title="OpenDyslexic Font">
                OpenDyslexic font - OpenDyslexic
            </Link>
            <Link href="https://www.flaticon.com/free-icons/crayon" title="crayon icons">
                Crayon icons created by fjstudio - Flaticon
            </Link>
            <Link href="https://www.flaticon.com/free-icons/correct" title="correct icons">
                Correct icons created by Pixel perfect - Flaticon
            </Link>
            <Link href="https://www.flaticon.com/free-icons/forbidden" title="forbidden icons">
                Forbidden icons created by Freepik - Flaticon
            </Link>
            <Link href="https://www.flaticon.com/free-icons/heart" title="heart icons">
                Heart icons created by Kiranshastry - Flaticon
            </Link>
            <Link href="https://www.flaticon.com/free-icons/question" title="question icons">
                Question icons created by Roundicons - Flaticon
            </Link>
            <Link href="https://www.flaticon.com/free-icons/trash-can" title="trash can icons">
                Trash can icons created by IYAHICON - Flaticon
            </Link>
        </Container>
    )
}

export default Attributions;