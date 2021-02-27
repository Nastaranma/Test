import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import moment from 'moment';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import { CommunityMember } from '../../../../model';


interface Props {
  //
  members: CommunityMember[];
  onClick: (event: React.MouseEvent, members: CommunityMember) => void;
}


@autobind
@observer
class MemberListView extends React.Component<Props> {
  //
  render() {
    //
    const { members, onClick } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Nickname</TableCell>
            <TableCell align="center">Phonenumber</TableCell>
            <TableCell align="center">Birthday</TableCell>
            <TableCell align="center">ID</TableCell>
          
          </TableRow>
        </TableHead>

        <TableBody>
          { members.length ? members.map((travelClub: CommunityMember, index: number) => (
            <TableRow
              key={travelClub.id}
              hover
              onClick={(event: React.MouseEvent) => onClick(event, travelClub)}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{travelClub.name}</TableCell>
              <TableCell>{travelClub.email}</TableCell>
              <TableCell>{travelClub.nickName}</TableCell>
              <TableCell>{travelClub.phoneNumber}</TableCell>
              <TableCell>{travelClub.birthDay}</TableCell>
              <TableCell>{travelClub.id}</TableCell>
             
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={8} align="center">데이터가 없습니다.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

export default MemberListView;
