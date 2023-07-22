import ConsentView from "components/ConsentView";
import useMustBeAdult from "hooks/useMustBeAdult";
import { useLoaderData } from "react-router-dom";

const ConsentViewPage = () => {

    useMustBeAdult();
    const {data} = useLoaderData();
    
    return (
        <ConsentView {...{data}} /> 
    )
}

export default ConsentViewPage;