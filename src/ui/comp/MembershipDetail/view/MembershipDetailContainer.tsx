
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';

import { MembershipService } from '../../../../service';
import { ActionButton } from '../../shared';
import MembershipDetailCardView from './MembershipDetailCardView';


interface Props {
  //
  memberShipService?: MembershipService;

  memberId: string;
  clubId: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}
  
@inject(MembershipService.instanceName)
@autobind
@observer
class MembershipDetailContainer extends React.Component<Props> {
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
    const { memberId: prevMemberId } = prevProps;
    const { memberId } = this.props;

    if (prevMemberId !== memberId) {
      this.init();
    }

  }

  init() {
    //
    const { memberShipService, clubId , memberId} = this.props;

    memberShipService!.findMembershipByClubIdAndMemberId(clubId, memberId);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const { memberShipService } = this.props;

    const key = event.target.name;
    const value = event.target.value as never;

    memberShipService!.setMembershipProps(key, value);
  }


  async onModify(event: React.MouseEvent) {
    //
    const { memberShipService, onSuccess } = this.props;
    const { membership } = memberShipService!;

    if (!membership) {
      throw new Error('Membership should not be null.');
    }

    await memberShipService!.modifyMembership(membership);
    onSuccess!();
  }

  async onRemove(event: React.MouseEvent) {
    //
    const { memberShipService, onSuccess } = this.props;
    const { membership } = memberShipService!;

    if (!membership) {
      throw new Error('Membership should not be null.');
    }

    await memberShipService!.removeMembership(membership.id);
    onSuccess!();
  }

  onCancel(event: React.MouseEvent) {
    //
    const { onCancel } = this.props;

    onCancel!();
  }

  render() {
    //
    const { membership } = this.props.memberShipService!;

    if (!membership) {
      return null;
    }

    return (
      <React.Fragment>
        <MembershipDetailCardView
          membership={membership}
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

export default MembershipDetailContainer;
