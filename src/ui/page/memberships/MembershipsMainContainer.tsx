import React from 'react';
import autobind from 'autobind-decorator';
import { RouteComponentProps, withRouter } from 'react-router';
import { Box, Grid } from '@material-ui/core';

import { Membership } from '../../../model';
import { MembershipDetail, MembershipList, MembershipRegistrationModal, SearchBox } from '../../comp';


interface Props extends RouteComponentProps {
}

interface State {
  //
  clubId: string;
  memberId:string;
  keyword: string;
}


@autobind
class MembershipsMainContainer extends React.Component<Props, State> {
  //
  state: State = {
    clubId: '',
    memberId:'',
    keyword: '',
  };

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const keyword = event.target.value;

    this.setState({ keyword });
  }

  onClick(event: React.MouseEvent, membership: Membership) {
    //
    this.setState({ clubId: membership.id });
    this.setState({ memberId: membership.id });
  }

  onSuccess() {
    //
    this.props.history.go(0);
  }

  onCancel() {
    //
    this.setState({ clubId: '' });
    this.setState({ memberId: '' });
  }

  render() {
    //
    const { clubId, memberId, keyword } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SearchBox
            keyword={keyword}
            onChange={this.onChange}
          />
          <MembershipList
            keyword={keyword}
            onClick={this.onClick}
          />
        </Grid>
        <Grid item xs={6}>
          <Box pb={3} textAlign="right">
            <MembershipRegistrationModal onSuccess={this.onSuccess} />
          </Box>
          {clubId && (
            <MembershipDetail
              clubId={clubId}
              memberId={memberId}
              onSuccess={this.onSuccess}
              onCancel={this.onCancel}
            />
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(MembershipsMainContainer);
