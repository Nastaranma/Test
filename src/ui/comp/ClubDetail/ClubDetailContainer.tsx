
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';

import { ClubService } from '../../../service';
import { ActionButton } from '../shared';
import ClubDetailCardView from './view/ClubDetailCardView';


interface Props {
  //
  clubService?: ClubService;

  clubId: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}


@inject(ClubService.instanceName)
@autobind
@observer
class ClubDetailContainer extends React.Component<Props> {
  //
  static defaultProps = {
    onSuccess: () => {},
    onCancel: () => {},
  };

  componentDidMount() {
    //
    this.init();
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
    //
    const { clubId: prevClubId } = prevProps;
    const { clubId } = this.props;

    if (prevClubId !== clubId) {
      this.init();
    }
  }

  init() {
    //
    const { clubService, clubId } = this.props;

    clubService!.findClubById(clubId);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const { clubService } = this.props;

    const key = event.target.name;
    const value = event.target.value as never;

    clubService!.setClubProps(key, value);
  }

  async onModify(event: React.MouseEvent) {
    //
    const { clubService, onSuccess } = this.props;
    const { club } = clubService!;

    if (!club) {
      throw new Error('Travel club should not be null.');
    }

    await clubService!.modifyClub(club);
    onSuccess!();
  }

  async onRemove(event: React.MouseEvent) {
    //
    const { clubService, onSuccess } = this.props;
    const { club } = clubService!;

    if (!club) {
      throw new Error('Club should not be null.');
    }

    await clubService!.removeClub(club.id);
    onSuccess!();
  }

  onCancel(event: React.MouseEvent) {
    //
    const { onCancel } = this.props;

    onCancel!();
  }

  render() {
    //
    const { club } = this.props.clubService!;

    if (!club) {
      return null;
    }

    return (
      <React.Fragment>
        <ClubDetailCardView
          club={club}
          onChange={this.onChange}
          onRemove={this.onRemove}
        />
        <ActionButton
          onModify={this.onModify}
          onCancel={this.onCancel}
        />
      </React.Fragment>
    );
  }
}

export default ClubDetailContainer;
