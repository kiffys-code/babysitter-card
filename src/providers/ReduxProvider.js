import store from "features/store";
import React from "react";
import { Provider } from "react-redux";

export const ReduxProvider = ({children, ...props}) => {
    return (
        <Provider store={store} {...props}>{children}</Provider>
    )
}