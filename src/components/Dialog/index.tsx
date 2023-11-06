import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import React, { memo, useState } from 'react'

type Props = {
    open: boolean
    title?: string
    content: string
    buttonContent?: string
    buttonAction: () => void
}

function MyDialog({
    open,
    title,
    content,
    buttonContent,
    buttonAction,
}: Props) {
    return (
        <Dialog
            open={open}
            onClose={buttonAction}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={buttonAction} autoFocus>
                    {buttonContent}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default memo(MyDialog)
