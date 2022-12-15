import styled from "styled-components";
import Modal from "styled-react-modal";

const CustomModal = Modal.styled`
    background: #fff;
    padding: 2rem;
    margin: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.background};
    max-height: 80vh;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;

    & .title {
        font-size: 1.8rem;
        color: ${({theme}) => theme.text};
    }

    & .close {
        margin-left: auto;
        position: relative;
        top: -1rem;
        right: -1rem;
        padding: 0.5rem;
    }
`

const CloseIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`

const StyledModal = (props) => {

    const {children, closeModal, title} = props;

    return (
        <CustomModal {...props} 
            onBackgroundClick={closeModal}
            onEscapeKeydown={closeModal}
            id='custom-modal'
        >
            <HeaderContainer id='custom-modal-header'>
                <h1 className='title'>{title}</h1>
                <CloseIcon onClick={closeModal} className='close' src={require('./close.png')} alt='Close' />
            </HeaderContainer>
            {children}
        </CustomModal>
    )
}

export default StyledModal;