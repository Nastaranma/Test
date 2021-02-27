import React from 'react';
import autobind from 'autobind-decorator';
import { inject } from 'mobx-react';
import _ from 'lodash';

import { CommunityMember } from '../../../../model';
import { MemberService } from '../../../../service';
import MemberRegistrationModalView from './MemberRegistrationModalView';


interface Props {
  //
  memberService?: MemberService;

  onSuccess?: () => void;
}

interface State {
  //
  member: CommunityMember;
}


@inject(MemberService.instanceName)
@autobind
class MemberRegistrationModalContainer extends React.Component<Props, State> {
  //
  static defaultProps = {
    onSuccess: () => {},
  };

  state: State = {
   member: new CommunityMember ('', '',''),
  };


  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    //
    const { member } = this.state;

    const key = event.target.name;
    const value = event.target.value;

    const newmember= _.set(member, key, value);

    this.setState({ member: newmember });
  }

  async onRegister() {
    //
    const { memberService, onSuccess } = this.props;
    const { member } = this.state;

    if (!member) {
      throw new Error('Member should not be null.');
    }

    const registeredMemberId = await memberService!.registerMember(member);

    if (registeredMemberId) {
        onSuccess!();
        this.initMember();
    }
  }

  onCancel() {
    //
    this.initMember();
  }

  initMember() {
    //
    this.setState({
      member: new CommunityMember('', '',''),
    });
  }

  render() {
    //
    const { member } = this.state;

    return (
      <MemberRegistrationModalView
        CommunityMember={member}
        onChange={this.onChange}
        onRegister={this.onRegister}
        onCancel={this.onCancel}
      />
    );
  }
}

export default MemberRegistrationModalContainer;
