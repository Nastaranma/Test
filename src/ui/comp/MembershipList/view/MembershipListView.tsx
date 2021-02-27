import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import moment from 'moment';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import { Membership, TravelClub } from '../../../../model';



interface Props {
  //
  memberships: Membership[];
  onClick: (event: React.MouseEvent, membership: Membership) => void;
}


@autobind
@observer
class MembershipListView extends React.Component<Props> {
  //
  render() {
    //
    const { memberships, onClick } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">no</TableCell>
            <TableCell align="center">Club ID</TableCell>
            <TableCell align="center">Member ID</TableCell>
            <TableCell align="center">Role in Club</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          { memberships.length ? memberships.map((membership: Membership, index: number) => (
            <TableRow
              key={membership.id}
              hover
              onClick={(event: React.MouseEvent) => onClick(event, membership)}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{membership.clubId}</TableCell>
              <TableCell align="center">{membership.memberId}</TableCell>
              <TableCell align="center">{membership.role}</TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={4} align="center">데이터가 없습니다.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default MembershipListView;
