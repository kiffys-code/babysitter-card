import { useController } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

const EditableSelect = ({control, name, label, placeholder, defaultValue='', className, options}) => {

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
        <CreatableSelect 
            isClearable={false}
            options={options.map(it => createOption(it))}
            onChange={handleChange}
            value={initialValue}
        />
    )
}

export default EditableSelect;