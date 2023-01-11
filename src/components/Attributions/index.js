import styled from "styled-components";
import Link from "components/shared/Link";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;

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
            <Link href="https://www.flaticon.com/free-icons/close" title="close icons">
                Close icons created by ariefstudio - Flaticon
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
            <Link href="https://www.flaticon.com/free-icons/trash-can" title="trash can icons">
                Trash can icons created by IYAHICON - Flaticon
            </Link>
            <Link href="https://www.flaticon.com/free-icons/childhood" title="childhood icons">Childhood icons created by Freepik - Flaticon</Link>
            <Link href="https://www.flaticon.com/free-icons/share" title="share icons">Share icons created by Freepik - Flaticon</Link>
            <Link href="https://www.flaticon.com/free-icons/copy" title="copy icons">Copy icons created by Anggara - Flaticon</Link>
            <Link href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Febrian Hidayat - Flaticon</Link>
            <Link href="https://www.flaticon.com/free-icons/home" title="home icons">Home icons created by Dave Gandy - Flaticon</Link>
            <Link href="https://www.flaticon.com/free-icons/filter" title="filter icons">Filter icons created by Kiranshastry - Flaticon</Link>
            <Link href="https://www.flaticon.com/free-icons/sort" title="sort icons">Sort icons created by Dave Gandy - Flaticon</Link>
            <Link href="https://www.flaticon.com/free-icons/down-arrow" title="down-arrow icons">Down-arrow icons created by Dave Gandy - Flaticon</Link>
            <Link href="https://www.flaticon.com/free-icons/stop" title="stop icons">Stop icons created by Freepik - Flaticon</Link>
            <a href="https://www.flaticon.com/free-icons/print" title="print icons">Print icons created by Freepik - Flaticon</a>
            <a href="https://www.flaticon.com/free-icons/image-comics" title="Image Comics icons">Image Comics icons created by Freepik - Flaticon</a>
        </Container>
    )
}

export default Attributions;