import React from 'react';
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import moment from 'moment';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import { TravelClub } from '../../../../model';


interface Props {
  //
  clubs: TravelClub[];
  onClick: (event: React.MouseEvent, club: TravelClub) => void;
}


@autobind
@observer
class ClubListView extends React.Component<Props> {
  //
  render() {
    //
    const { clubs, onClick } = this.props;

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">no</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">intro</TableCell>
            <TableCell align="center">foundationTime</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          { clubs.length ? clubs.map((travelClub: TravelClub, index: number) => (
            <TableRow
              key={travelClub.id}
              hover
              onClick={(event: React.MouseEvent) => onClick(event, travelClub)}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell align="center">{travelClub.name}</TableCell>
              <TableCell>{travelClub.intro}</TableCell>
              <TableCell align="center">{moment(travelClub.foundationTime).format('YYYY-MM-DD')}</TableCell>
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

export default ClubListView;
