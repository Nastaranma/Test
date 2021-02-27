import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import { Button, Card, CardContent, CardHeader, FormLabel, Grid, TextField } from '@material-ui/core';

import { TravelClub } from '../../../../model';


interface Props {
  //
  club: TravelClub;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (event: React.MouseEvent) => void;
}


@autobind
@observer
class ClubDetailCardView extends React.Component<Props> {
  //
  render() {
    //
    const { club, onChange, onRemove } = this.props;

    return (
      <Card>
        <CardHeader
          title={club.name}
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
                value={club.id}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>name</FormLabel>
              <TextField
                name="name"
                fullWidth
                value={club.name}
                onChange={onChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormLabel>intro</FormLabel>
              <TextField
                name="intro"
                fullWidth
                value={club.intro}
                onChange={onChange}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default ClubDetailCardView;
