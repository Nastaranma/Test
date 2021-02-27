import React from 'react';
import autobind from 'autobind-decorator';
import { RouteComponentProps, withRouter } from 'react-router';
import { Box, Grid } from '@material-ui/core';

import { TravelClub } from '../../../model';
import { ClubDetail, ClubList, ClubRegistrationModal, SearchBox } from '../../comp';


interface Props extends RouteComponentProps {
}

interface State {
  //
  clubId: string;
  keyword: string;
}


@autobind
class ClubsMainContainer extends React.Component<Props, State> {
  //
  state: State = {
    clubId: '',
    keyword: '',
  };

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const keyword = event.target.value;

    this.setState({ keyword });
  }

  onClick(event: React.MouseEvent, club: TravelClub) {
    //
    this.setState({ clubId: club.id });
  }

  onSuccess() {
    //
    this.props.history.go(0);
  }

  onCancel() {
    //
    this.setState({ clubId: '' });
  }

  render() {
    //
    const { clubId, keyword } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SearchBox
            keyword={keyword}
            onChange={this.onChange}
          />
          <ClubList
            keyword={keyword}
            onClick={this.onClick}
          />
        </Grid>
        <Grid item xs={6}>
          <Box pb={3} textAlign="right">
            <ClubRegistrationModal onSuccess={this.onSuccess} />
          </Box>
          {clubId && (
            <ClubDetail
              clubId={clubId}
              onSuccess={this.onSuccess}
              onCancel={this.onCancel}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(ClubsMainContainer);
