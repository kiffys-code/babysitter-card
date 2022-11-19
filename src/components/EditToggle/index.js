import styled from "styled-components";

const Button = styled.button`
    border: none;
    background: #5cb3ed;
    padding: 0.8rem;
    border-radius: 100%;
    box-shadow: 0px 2px 10px #333; 
`
const Icon = styled.img`
    width: 2rem;
    filter: saturate(0) brightness(100);
`

const EditToggle = ({edit, setEdit}) => {

    const onClick = () => {
        setEdit(!edit);
    }

    return (
        <Button>
            <Icon 
            src={edit ? require('./check.png') : require('./crayon.png')} alt='Edit' 
            onClick={onClick}
        />
        </Button>
    )
}

export default EditToggle;