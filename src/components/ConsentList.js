import { useFieldArray } from "react-hook-form";
import ConsentListItem from "./ConsentListItem";

const ConsentList = ({form}) => {

    const {control} = form;
    const {fields} = useFieldArray({
        name: 'consents',
        control: control,
        keyName: '_id'
    });

    console.log({fields})

    const renderedConsents = fields.map((item, index) => 
        <ConsentListItem control={control} consent={item} index={index} prefix='consents' key={item._id} />
    );

    return (
        <div>{renderedConsents}</div>
    );
}

export default ConsentList;