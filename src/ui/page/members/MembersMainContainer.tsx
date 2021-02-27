import React from 'react';
import autobind from 'autobind-decorator';
import { RouteComponentProps, withRouter } from 'react-router';
import { Box, Grid } from '@material-ui/core';

import { CommunityMember } from '../../../model';
import { MemberDetail, MemberList, MemberRegistrationModal, SearchBox } from '../../comp';


interface Props extends RouteComponentProps {
}

interface State {
  //
  memberId: string;
  keyword: string;
}


@autobind
class MembersMainContainer extends React.Component<Props, State> {
  //
  state: State = {
    memberId: '',
    keyword: '',
  };

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const keyword = event.target.value;

    this.setState({ keyword });
  }

  onClick(event: React.MouseEvent, member: CommunityMember) {
    //
    this.setState({ memberId: member.id });
  }

  onSuccess() {
    //
    this.props.history.go(0);
  }

  onCancel() {
    //
    this.setState({ memberId: '' });
  }

  render() {
    //
    const {memberId, keyword } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <SearchBox
            keyword={keyword}
            onChange={this.onChange}
          />
          <MemberList
            keyword={keyword}
            onClick={this.onClick}
          />
        </Grid>
        <Grid item xs={6}>
          <Box pb={3} textAlign="right">
            <MemberRegistrationModal onSuccess={this.onSuccess} />
          </Box>
          {memberId && (
            <MemberDetail
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

export default withRouter(MembersMainContainer);
