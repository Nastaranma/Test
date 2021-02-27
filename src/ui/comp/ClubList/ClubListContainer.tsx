
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';

import { TravelClub } from '../../../model';
import { ClubsService } from '../../../service';
import ClubListView from './view/ClubListView';


interface Props {
  //
  clubsService?: ClubsService;

  keyword?: string;
  onClick?: (event: React.MouseEvent, club: TravelClub) => void;
}


@inject(ClubsService.instanceName)
@autobind
@observer
class ClubListContainer extends React.Component<Props> {
  //
  static defaultProps = {
    keyword: '',
    onClick: () => {},
  };

  componentDidMount() {
    //
    this.init();
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
    //
    const { keyword: prevKeyword } = prevProps;
    const { keyword } = this.props;

    if (prevKeyword !== keyword) {
      this.init();
    }
  }

  init() {
    //
    const { clubsService, keyword } = this.props;

    if (keyword) {
      clubsService!.findClubsByName(keyword);
    }
    else {
      clubsService!.findAllClubs();
    }
  }

  onClick(event: React.MouseEvent, club: TravelClub) {
    //
    const targetClub = { ...club };

    this.props.onClick!(event, targetClub);
  }

  render() {
    //
    const { clubs } = this.props.clubsService!;

    return (
      <ClubListView
        clubs={clubs}
        onClick={this.onClick}
      />
    );
  }
}

export default ClubListContainer;
