import React from "react";
import { useState } from "react";
import { useSwInstallUpdate } from "features/serviceworkers/useServiceWorkers";
import { Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from "react";

export const UpdateAvailableToast = () => {
    
    const [updated, installUpdate] = useSwInstallUpdate();
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        if(updated) {
            setOpen(true);
        }
    }, [updated, setOpen]);

    return (
        <Snackbar
            open={open}
            onClose={onClose}
            message="Update Available"
            action={<>
                <Button onClick={() => installUpdate()}>
                    Update
                </Button>
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </>}
        />
    )

}