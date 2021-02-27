import React from 'react';
import autobind from 'autobind-decorator';
import { DialogContent, DialogTitle, TextField } from '@material-ui/core';

import { TravelClub } from '../../../../model';
import { BasicDialog } from '../../shared';


interface Props {
  //
  club: TravelClub;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegister: () => void;
  onCancel: () => void;
}


@autobind
class ClubRegistrationModalView extends React.Component<Props> {
  //
  render() {
    //
    const { club, onChange, onRegister, onCancel } = this.props;

    return (
      <BasicDialog
        buttonLabel="등록"
        onConfirm={onRegister}
        onCancel={onCancel}
      >
        <DialogTitle>Club 등록</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            label="name"
            name="name"
            value={club.name}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            label="intro"
            name="intro"
            value={club.intro}
            onChange={onChange}
          />
        </DialogContent>
      </BasicDialog>
    );
  }
}

export default ClubRegistrationModalView;
