import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Attributions = () => {
    return (
        <Container>
            <div>
                Copyright {new Date().getFullYear()}, Kiffy
            </div>
            <a href="https://github.com/kiffys-code/babysitter-card">
                github.com/kiffys-code
            </a>
            <a href="https://www.flaticon.com/free-icons/crayon" title="crayon icons">Crayon icons created by fjstudio - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/correct" title="correct icons">Correct icons created by Pixel perfect - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/forbidden" title="forbidden icons">Forbidden icons created by Freepik - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Kiranshastry - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/question" title="question icons">Question icons created by Roundicons - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/trash-can" title="trash can icons">Trash can icons created by IYAHICON - Flaticon</a>
        </Container>
    )
}

export default Attributions;