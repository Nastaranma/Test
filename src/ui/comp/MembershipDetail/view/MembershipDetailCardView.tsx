import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Button, Card, CardContent, CardHeader, FormLabel, Grid, TextField } from '@material-ui/core';

import { Membership } from '../../../../model';

interface Props {
  //
  membership: Membership;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (event: React.MouseEvent) => void;
}


@autobind
@observer
class MembershipDetailCardView extends React.Component<Props> {
  //
  render() {
    //
    const { membership, onChange, onRemove } = this.props;

    return (
      <Card>
        <CardHeader
          title={membership.clubId}
          action={
            <Button color="secondary" onClick={onRemove}>삭제</Button>
                    }
        />

        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormLabel>Club ID</FormLabel>
              <TextField
                disabled
                fullWidth
                value={membership.clubId}
              />
            </Grid>


            <Grid item xs={12}>
              <FormLabel>Member ID</FormLabel>
              <TextField
                disabled
                fullWidth
                value={membership.memberId}
              />
            </Grid>


            <Grid item xs={12}>
              <FormLabel>Role</FormLabel>
              <TextField
                name="Role"
                fullWidth
                value={membership.role}
                onChange={onChange}
              />
            </Grid>
            
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default MembershipDetailCardView;
