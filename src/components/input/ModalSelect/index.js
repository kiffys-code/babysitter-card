import { useState } from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import StyledModal from "../../StyledModal";
import {LEVELS, Icon} from "../../Consent";
import Button from '../../common/Button';

const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const AnswerButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    width: 3em;
    padding: 0.5rem;
    border-radius: 100%;
    border: 1px solid white;
    box-shadow: 1px 1px 2px black;

    & img {
        height: 2em;
        width: 2em;
    }
`

const ModalAnswerButton = styled(Button)`
    background-color: #555;
    border-radius: 5px;
    border: none;
    box-shadow: none;
`

const ModalSelect = ({control, name, label, defaultValue, options, className, edit}) => {
    
    const [showAnswerModal, setShowAnswerModal] = useState(false);

    const {field} = useController({name, control, defaultValue});

    const onOptionClick = (val) => {
        field.onChange(val);
        setShowAnswerModal(false);
    }

    return (
        <div>
            <AnswerButton onClick={() => setShowAnswerModal(true)}>
                <Icon level={LEVELS[field.value]}>{field.value}</Icon>
            </AnswerButton>
            <StyledModal
                isOpen={showAnswerModal}
                title={label}
                closeModal={() => setShowAnswerModal(false)}
            >
                <ModalContentContainer className={className}>
                    {options.map(it => 
                        <ModalAnswerButton 
                            id='modal-answer-button'
                            key={it.value}
                            onClick={() => onOptionClick(it.value)}
                        >
                            {it.label}
                        </ModalAnswerButton>
                    )}
                </ModalContentContainer>
            </StyledModal>
        </div>
    );

}

export default ModalSelect;