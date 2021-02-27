import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Button, Card, CardContent, CardHeader, FormLabel, Grid, TextField } from '@material-ui/core';

import { CommunityMember, TravelClub } from '../../../../model';


interface Props {
  //
  member: CommunityMember;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (event: React.MouseEvent) => void;
}


@autobind
@observer
class MemberDetailCardView extends React.Component<Props> {
  //
  render() {
    //
    const { member, onChange, onRemove } = this.props;

    return (
      <Card>
        <CardHeader
          title={member.name}
          action={
            <Button color="secondary" onClick={onRemove}>삭제</Button>
                    }
        />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormLabel>ID</FormLabel>
              <TextField
                disabled
                fullWidth
                value={member.id}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>name</FormLabel>
              <TextField
                name="name"
                fullWidth
                value={member.name}
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>nickName</FormLabel>
              <TextField
                name="nickname"
                fullWidth
                value={member.nickName}
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>email</FormLabel>
              <TextField
                name="email"
                fullWidth
                value={member.email}
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>phoneNumber</FormLabel>
              <TextField
                name="phoneNumber"
                fullWidth
                value={member.phoneNumber}
                onChange={onChange}
              />
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default MemberDetailCardView;
