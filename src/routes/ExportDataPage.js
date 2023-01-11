import { useLoaderData } from "react-router-dom";
import ExportDataView from "components/ExportDataView";

const ExportDataPage = () => {

    const {data} = useLoaderData();

    return (
        <ExportDataView {...{data}} />
    )

}

export default ExportDataPage;