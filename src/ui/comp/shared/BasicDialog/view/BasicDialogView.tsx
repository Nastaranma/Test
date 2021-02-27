
import React from 'react';
import autobind from 'autobind-decorator';
import { Button, Dialog, DialogActions } from '@material-ui/core';


interface Props {
  //
  buttonLabel: string;
  children: React.ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}


@autobind
class BasicDialogView extends React.Component<Props> {
  //
  render() {
    //
    const { buttonLabel, open, onOpen, onClose, onConfirm, onCancel, children } = this.props;

    return (
      <React.Fragment>
        <Button color="primary" variant="contained" onClick={onOpen}>{buttonLabel}</Button>
        <Dialog open={open} onClose={onClose}>

          {children}

          <DialogActions>
            <Button variant="text" onClick={onCancel}>취소</Button>
            <Button color="primary" onClick={onConfirm}>확인</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default BasicDialogView;
