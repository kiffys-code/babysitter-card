import ConsentView from "components/ConsentView";
import { useLoaderData } from "react-router-dom";

const ConsentViewPage = () => {

    const {data} = useLoaderData();
    
    return (
        <ConsentView {...{data}} /> 
    )
}

export default ConsentViewPage;