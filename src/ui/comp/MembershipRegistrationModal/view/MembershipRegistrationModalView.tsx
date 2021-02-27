import React from 'react';
import autobind from 'autobind-decorator';
import { DialogContent, DialogTitle, TextField } from '@material-ui/core';

import { Membership } from '../../../../model';
import { BasicDialog } from '../../shared';


interface Props {
  //
  Membership: Membership;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegister: () => void;
  onCancel: () => void;
}


@autobind
class MembershipRegistrationModalView extends React.Component<Props> {
  //
  render() {
    //
    const { Membership, onChange, onRegister, onCancel } = this.props;

    return (
      <BasicDialog
        buttonLabel="등록"
        onConfirm={onRegister}
        onCancel={onCancel}
      >
        <DialogTitle> Membership 등록</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            label="Club ID"
            name="Club ID"
            value={Membership.clubId}
            onChange={onChange}
          />
          <TextField
           required
           fullWidth
           label="Member ID"
           name="Member ID"
           value={Membership.memberId}
           onChange={onChange}
          />
           <TextField
            required
            fullWidth
            label="Role in Club"
            name="Role in Club"
            value={Membership.role}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            label="Joint Date"
            name="Joint Date"
            type="date"
            defaultValue="2021-01-01"
            value={Membership.joinDate}
            onChange={onChange}
          />
         
        </DialogContent>
      </BasicDialog>
    );
  }
}

export default MembershipRegistrationModalView;
