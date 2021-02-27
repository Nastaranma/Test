
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';

import { MemberService } from '../../../service';
import { ActionButton } from '../shared';
import MemberDetailCardView from './view/MemberDetailCardView';


interface Props {
  //
  memberService?: MemberService;

  memberId: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}


@inject(MemberService.instanceName)
@autobind
@observer
class MemberDetailContainer extends React.Component<Props> {
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
    const { memberId: prevMemberId } = prevProps;
    const { memberId } = this.props;

    if (prevMemberId !== memberId) {
      this.init();
    }
  }

  init() {
    //
    const { memberService, memberId } = this.props;

    memberService!.findMemberById(memberId);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const { memberService } = this.props;

    const key = event.target.name;
    const value = event.target.value as never;

    memberService!.setMemberProps(key, value);
  }

  async onModify(event: React.MouseEvent) {
    //
    const { memberService, onSuccess } = this.props;
    const { member } = memberService!;

    if (!member) {
      throw new Error('Member should not be null.');
    }

    await memberService!.modifyMember(member);
    onSuccess!();
  }

  async onRemove(event: React.MouseEvent) {
    //
    const { memberService, onSuccess } = this.props;
    const { member } = memberService!;

    if (!member) {
      throw new Error('member should not be null.');
    }

    await memberService!.removeMember(member.id);
    onSuccess!();
  }

  onCancel(event: React.MouseEvent) {
    //
    const { onCancel } = this.props;

    onCancel!();
  }

  render() {
    //
    const { member } = this.props.memberService!;

    if (!member) {
      return null;
    }

    return (
      <React.Fragment>
        <MemberDetailCardView
          member={member}
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

export default MemberDetailContainer;
