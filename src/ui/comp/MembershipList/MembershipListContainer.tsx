
import React from 'react';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';

import { Membership } from '../../../model';
import { MembershipsService } from '../../../service';
import MembershipListView from './view/MembershipListView';


interface Props {
  //
  membershipsService?: MembershipsService;

  keyword?: string;
  onClick?: (event: React.MouseEvent, membership: Membership) => void;
}


@inject(MembershipsService.instanceName)
@autobind
@observer
class MembershipListContainer extends React.Component<Props> {
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
    const { membershipsService, keyword } = this.props;

    if (keyword) {
      membershipsService!.findAllMembershipsOfMember(keyword);
    }
    else {
      membershipsService!.findAllMembershipsOfClub("1");
    }
  }
  
  onClick(event: React.MouseEvent, membership: Membership) {
    //
    const targetMembership = { ...membership };

    this.props.onClick!(event, targetMembership);
  }

  render() {
    //
    const { memberships } = this.props.membershipsService!;

    return (
      <MembershipListView
        memberships={memberships}
        onClick={this.onClick}
      />
    );
  }
}

export default MembershipListContainer;
