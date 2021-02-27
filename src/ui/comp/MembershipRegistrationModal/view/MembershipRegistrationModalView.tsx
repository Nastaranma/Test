import React from 'react';
import autobind from 'autobind-decorator';
import {DialogContent, DialogTitle, MenuItem, Select, TextField} from '@material-ui/core';

import {Membership, TravelClub} from '../../../../model';
import {BasicDialog} from '../../shared';


interface Props {
    //
    clubs: TravelClub[];
    membership: Membership;
    onChange: (event: any) => void;
    onRegister: () => void;
    onCancel: () => void;
}


@autobind
class MembershipRegistrationModalView extends React.Component<Props> {
    //
    render() {
        //
        const {membership, onChange, onRegister, onCancel, clubs} = this.props;

        return (
            <BasicDialog
                buttonLabel="등록"
                onConfirm={onRegister}
                onCancel={onCancel}
            >
                <DialogTitle> Membership 등록</DialogTitle>
                <DialogContent>
                    <Select
                        required
                        fullWidth
                        label="Club ID"
                        name="clubId"
                        value={membership.clubId}
                        onChange={onChange}
                    >
                        {clubs.map((e, keyIndex) =>
                            <MenuItem key={keyIndex} value={e.id}>{e.name}</MenuItem>)}
                    </Select>
                    <TextField
                        required
                        fullWidth
                        label="Member ID"
                        name="memberId"
                        value={membership.memberId}
                        onChange={onChange}
                    />
                    <Select
                        required
                        fullWidth
                        label="Role in Club"
                        name="Role in Club"
                        defaultValue={membership.role}
                        onChange={() => onChange}
                    >
                        <MenuItem value={"Member"}>Member</MenuItem>
                        <MenuItem value={"President"}>President</MenuItem>
                    </Select>

                </DialogContent>
            </BasicDialog>
        );
    }
}

export default MembershipRegistrationModalView;
