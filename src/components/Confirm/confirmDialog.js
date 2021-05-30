/**
 * Created by Soumya (soumya@smarttersstudio.com) on 29/05/21 at 9:22 PM.
 */

import React from 'react';
import { confirmable } from 'react-confirm';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '../DialogTitle';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import Typography from '@material-ui/core/Typography';

const ConfirmDialog = ({
    okLabel,
    cancelLabel = 'Cancel',
    title,
    confirmation,
    show,
    proceed,
    dismiss,
    cancel,
    content,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <Dialog fullWidth maxWidth="xs" onClose={dismiss} open={show}>
                <DialogTitle onClose={dismiss}>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{confirmation}</DialogContentText>
                    <Typography>{content && <DialogContentText>{content}</DialogContentText>}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={cancel} style={{fontWeight: '600'}}>
                        {cancelLabel}
                    </Button>
                    <Button color="primary" onClick={proceed} variant={'contained'} style={{fontWeight: '600'}}>
                        {okLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
};

ConfirmDialog.propTypes = {
    okLabel: PropTypes.any.isRequired,
    cancelLabel: PropTypes.any,
    title: PropTypes.any.isRequired,
    confirmation: PropTypes.any.isRequired,
    show: PropTypes.bool.isRequired,
    proceed: PropTypes.func.isRequired,
    dismiss: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    content: PropTypes.any,
};

export default confirmable(ConfirmDialog);
