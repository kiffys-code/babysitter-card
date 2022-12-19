import { useController } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import styled from 'styled-components';

const Container = styled.div`

    width: 100%;

    & .react-select-container .react-select-custom__control {
        padding: 0.8rem 0;
        font-size: 1.2rem;
        height: 100%;
        width: 100%;
        border: solid 1px #777;
        border-radius: 10px 0 0 10px;
        border-right: none;
        background-color: rgba(0, 0, 0, 0.10);
    }
    & .react-select-container .react-select-custom__menu { 
        background-color: ${({theme}) => theme.background};
    }
    & .react-select-container .react-select-custom__input-container, 
    & .react-select-container .react-select-custom__placeholder, 
    & .react-select-container .react-select-custom__single-value {
        color: ${({theme}) => theme.primary};
        padding: 0;
    }
    & .react-select-container .react-select-custom__option {
        font-size: 1.2rem;
        color: ${({theme}) => theme.primary};
        background-color: ${({theme}) => theme.background};
    }
    & .react-select-container .react-select-custom__option--is-selected {
        color: ${({theme}) => theme.primary};
        background-color: rgba(0, 0, 0, 0.10);
    }
    
`

const EditableSelect = ({control, name, defaultValue='', className, options}) => {

    const {field} = useController({control, name, defaultValue})

    const createOption = (val) => {
        return {
            label: val,
            value: val.toLowerCase()
        }
    }

    const handleChange = (sel) => {
        console.log(sel)
        field.onChange(sel.label)
    }

    const initialValue = field.value ? createOption(field.value) : defaultValue;

    return (
        <Container className={className} >
            <CreatableSelect 
                isClearable={false}
                options={options.map(it => createOption(it))}
                onChange={handleChange}
                value={initialValue}
                className='react-select-container'
                classNamePrefix='react-select-custom'
            />
        </Container>
    )
}

export default EditableSelect;