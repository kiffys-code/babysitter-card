import { useState } from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import StyledModal from "../../StyledModal";
import {LEVELS, Icon} from "../../Consent";

const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const AnswerButton = styled(Icon)`
    height: 2em;
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

            <AnswerButton 
                onClick={() => setShowAnswerModal(true)}
                level={LEVELS[field.value]}
                >
                    {field.value}
            </AnswerButton>
            <StyledModal
                isOpen={showAnswerModal}
                title={label}
                closeModal={() => setShowAnswerModal(false)}
            >
                <ModalContentContainer className={className}>
                    {options.map(it => 
                        <button 
                            key={it.value}
                            onClick={() => onOptionClick(it.value)}
                        >
                            {it.label}
                        </button>
                    )}
                </ModalContentContainer>
            </StyledModal>
        </div>
    );

}

export default ModalSelect;