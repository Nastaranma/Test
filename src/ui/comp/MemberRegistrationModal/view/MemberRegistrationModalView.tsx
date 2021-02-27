import React from 'react';
import autobind from 'autobind-decorator';
import { DialogContent, DialogTitle, TextField } from '@material-ui/core';

import { CommunityMember } from '../../../../model';
import { BasicDialog } from '../../shared';


interface Props {
  //
  CommunityMember: CommunityMember;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegister: () => void;
  onCancel: () => void;
}


@autobind
class MemberRegistrationModalView extends React.Component<Props> {
  //
  render() {
    //
    const { CommunityMember, onChange, onRegister, onCancel } = this.props;

    return (
      <BasicDialog
        buttonLabel="등록"
        onConfirm={onRegister}
        onCancel={onCancel}
      >
        <DialogTitle>Member 등록</DialogTitle>
        <DialogContent>
          <TextField
            required
            fullWidth
            label="Name"
            name="name"
            value={CommunityMember.name}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            label="NickName"
            name="nickName"
            value={CommunityMember.nickName}
            onChange={onChange}
          />
           <TextField
            required
            fullWidth
            label="PhoneNumber"
            name="phoneNumber"
            value={CommunityMember.phoneNumber}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            label="BirthDay"
            name="birthDay"
            type="date"
            defaultValue="1990-07-09"
            value={CommunityMember.birthDay}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            label="Email"
            name="email"
            value={CommunityMember.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Address"
            name="address"
            value={CommunityMember.address}
            onChange={onChange}
          />
         
        </DialogContent>
      </BasicDialog>
    );
  }
}

export default MemberRegistrationModalView;
