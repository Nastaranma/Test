import React from 'react';
import autobind from 'autobind-decorator';
import { inject } from 'mobx-react';
import _ from 'lodash';

import { TravelClub } from '../../../model';
import { ClubService } from '../../../service';
import ClubRegistrationModalView from './view/ClubRegistrationModalView';


interface Props {
  //
  clubService?: ClubService;

  onSuccess?: () => void;
}

interface State {
  //
  club: TravelClub;
}


@inject(ClubService.instanceName)
@autobind
class ClubRegistrationModalContainer extends React.Component<Props, State> {
  //
  static defaultProps = {
    onSuccess: () => {},
  };

  state: State = {
    club: new TravelClub('', ''),
  };


  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const { club } = this.state;

    const key = event.target.name;
    const value = event.target.value;

    const newClub = _.set(club, key, value);

    this.setState({ club: newClub });
  }

  async onRegister() {
    //
    const { clubService, onSuccess } = this.props;
    const { club } = this.state;

    if (!club) {
      throw new Error('Travel club should not be null.');
    }

    const registeredClubId = await clubService!.registerClub(club);

    if (registeredClubId) {
        onSuccess!();
        this.initClub();
    }
  }

  onCancel() {
    //
    this.initClub();
  }

  initClub() {
    //
    this.setState({
      club: new TravelClub('', ''),
    });
  }

  render() {
    //
    const { club } = this.state;

    return (
      <ClubRegistrationModalView
        club={club}
        onChange={this.onChange}
        onRegister={this.onRegister}
        onCancel={this.onCancel}
      />
    );
  }
}

export default ClubRegistrationModalContainer;
