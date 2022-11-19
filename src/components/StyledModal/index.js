import styled from "styled-components";
import Modal from "styled-react-modal";

const CustomModal = Modal.styled`
    background: #fff;
    padding: 2rem;
    margin: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    
    & .close {
        margin-left: auto;
        position: relative;
        top: -1rem;
        right: -1rem;
        padding: 0.5rem;
    }
`

const Container = styled.article`
    display: flex;
    padding-bottom: 1rem;

    & .title {
        font-size: 1.8rem;
    }
`

const StyledModal = (props) => {

    const {children, closeModal, title} = props;

    return (
        <CustomModal {...props} 
            onBackgroundClick={closeModal}
            onEscapeKeydown={closeModal}
        >
            <Container>
                <h1 className='title'>{title}</h1>
                <span onClick={closeModal} className='close'>🗙</span>
            </Container>
            {children}
        </CustomModal>
    )
}

export default StyledModal;