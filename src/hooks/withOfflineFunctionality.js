import React, { useState } from "react";
import env from "config/env";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

// Modified from https://tomwilderspin.medium.com/updating-progressive-web-applications-with-service-workers-ffca192ec16b
const withOfflineFunctionality = (Wrapper) => {
    return () => {
  
        // State for flagging if an app update is available
        const [appUpdatePending, setAppUpdatePending] = useState(false);
    
        // Updates the state when a new update is pending.
        const onUpdate = (args) => {
            console.log("update detected, will mark as update pending")
            setAppUpdatePending(true);
        }

        // action for updating the service worker.
        const doAppUpdate = () => {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then((registration) => {
                    if (registration.waiting) {

                        // send the skip message to kick off the service worker install.
                        registration.waiting.postMessage({type: 'SKIP_WAITING'});
                        
                        // add an listener to reload page when the new service worker is ready.
                        registration.waiting.addEventListener('statechange', (event) => {
                            const { state = '' } =  event.target || {};
                            if (state === 'activated') {
                                window.location.reload();
                            }
                        });
                    }
                });
            }
        };
    
        // Registers the service worker based on config setting,
        // updated to include a onUpdate callback.
        if (env.USE_OFFLINE) {
            serviceWorkerRegistration.register({ onUpdate });
            console.info("✔️app will be available offline");
        } else {
            serviceWorkerRegistration.unregister();
            console.warn("⚠️app requires an internet connection!");
        }
    
        // Returns the wrapped function, in this case it will be <App />
        return (
            <Wrapper appUpdatePending={appUpdatePending} doAppUpdate={doAppUpdate} message="From the hook!" />
        )
    }
  };

  export default withOfflineFunctionality;