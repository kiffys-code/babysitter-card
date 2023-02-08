import Button from "components/shared/Button"
import List, { ListItem } from "components/shared/List"
import { ADULT_KEY, GYR_SORT_KEY, revokeAllData, STORAGE_KEY } from "config/storage"
import useAccessiblePageLoad from "hooks/useAccessiblePageLoad"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-right: 1rem;
`

const ContentHeader = styled.h2`
    padding-top: 0.5rem;
`

const GdprItem = styled.h3`
    padding-top: 0.5rem;
`

const Table = styled.table`
    border-collapse: collapse;
    border: 1px solid black;
    & * {
        text-align: left;
        vertical-align: middle;
        border: 1px solid black;
        padding: 0.25rem;
    }
    & thead {
        font-weight: bold;
    }
    & tbody {
        font-style: italic;
    }
`

const StyledButton = styled(Button)`
    padding: 0.5rem 1rem;
    border-radius: 10px;
`

const NegativeButton = styled(StyledButton)`
    background-color: ${({theme}) => theme.globalColors.warn};
`

const DataPolicy = () => {

    const navigate = useNavigate();
    const headingRef = useRef();

    useAccessiblePageLoad({title: 'Data Policy', headingRef});

    const handleGdprRevokeAllData = () => {
        revokeAllData();
        navigate('/data-policy/revoked');
    }

    return (
        <Content>
            <h1 ref={headingRef} tabIndex={0} >Data Policy</h1>
            <ContentHeader>Summary</ContentHeader>
            <p>
                This application takes privacy very seriously; only necessary data is stored, it is stored on your device, and it is never shared with 3rd-parties. This is accomplished a few ways: 
            </p>
            <List>
                <ListItem>
                    data is stored via your device's LocalStorage (never leaves the device) rather than Cookies (which are sent to the server on each request)
                </ListItem>
                <ListItem>
                    Url Fragments (everything after the '#' in your browser) is used for navigation and url params; browsers never send url fragments to the server so it won't e.g. show up in traffic logs.
                </ListItem>
            </List>
            <p>
                You can find more information on the data stored on your device and how to revoke it at any time below.
            </p>
            <ContentHeader>Storage Items</ContentHeader>
            <GdprItem>Necessary Items</GdprItem>
            <Table>
                <thead>
                    <tr>
                        <th>Storage Item</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ADULT_KEY}</td>
                        <td>True/False value describing your consent to view adult content.</td>
                    </tr>
                    <tr>
                        <td>{STORAGE_KEY}</td>
                        <td>All your kink information for this app (name, pronouns, consent items, etc).</td>
                    </tr>
                    <tr>
                        <td>{GYR_SORT_KEY}</td>
                        <td>Sort direction when viewing green-yellow-red kink information</td>
                    </tr>
                </tbody>
            </Table>
            <GdprItem>Preferences Items</GdprItem>
            <p>(none)</p>
            <GdprItem>Marketing Items</GdprItem>
            <p>(none)</p>
            <GdprItem>Statistics Items</GdprItem>
            <p>(none)</p>
            <ContentHeader>Revoking Your Data</ContentHeader>
            <p>
                If you wish to clear all stored data, simply click the button below at any time (warning: this is permanent):
            </p>
            <br />
            <NegativeButton onClick={handleGdprRevokeAllData}>
                Delete My Data (Permanent!)
            </NegativeButton>
            <br />
        </Content>
    )
}

export default DataPolicy;