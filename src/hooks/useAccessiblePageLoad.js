import { useEffect } from "react";

const titleRoot = 'BabySitter Card';

/**
 * Loads a page accessibly, e.g. sets the page title, and attempts to focus the heading element.
 * NOTE: The heading element needs to have a tabIndex set to be focusable.
 * 
 * @param {string} title The page title. Always prepended with the app's name 'BabySitter Card'.
 * @param {object} headerRef The ref pointing to the heading element. 
 */
const useAccessiblePageLoad = ({title, headingRef}) => {

    useEffect(() => {

        document.title = title ? `${title} | ${title}` : titleRoot;

        if(headingRef?.current?.focus) {
            headingRef.current.focus();
        }

    }, [title, headingRef])
}

export default useAccessiblePageLoad;