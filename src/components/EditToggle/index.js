import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: ${({theme}) => theme.globalColors.primary};
    padding: 0.8rem;
    height: 4rem;
    width: 4rem;
    border-radius: 100%;
    box-shadow: 0px 2px 10px #333; 
`
const Icon = styled.img`
    width: 2rem;
    filter: saturate(0) brightness(100);
`

const EditToggle = ({to, edit}) => {

    return (
        <Link to={to} >
            <Button>
                <Icon 
                src={edit ? require('./check.png') : require('./crayon.png')} alt='Edit' 
                />
            </Button>
        </Link>
    )
}

export default EditToggle;