import React from 'react';
import autobind from 'autobind-decorator';
import {inject, observer} from 'mobx-react';
import _ from 'lodash';

import {Membership} from '../../../../model';
import {ClubsService, MembershipService} from '../../../../service';
import MembershipRegistrationModalView from './MembershipRegistrationModalView';


interface Props {
    //
    membershipService?: MembershipService;
    clubsService?: ClubsService;
    onSuccess?: () => void;
}

interface State {
    //
    membership: Membership;
}


@inject(MembershipService.instanceName)
@inject(ClubsService.instanceName)
@autobind
@observer
class MembershipRegistrationModalContainer extends React.Component<Props, State> {
    //
    static defaultProps = {
        onSuccess: () => {
        },
    };

    state: State = {
        membership: new Membership('', ''),
    };

    componentDidMount() {
        //
        this.init();
    }

    init() {
        const {clubsService} = this.props;
        clubsService!.findAllClubs();
    }


    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        //
        const {membership} = this.state;


        const key = event.target.name;
        const value = event.target.value;

        const newmembership = _.set(membership, key, value);
        console.log("newmembership:" + JSON.stringify(newmembership));
        this.setState({membership: newmembership});
    }

    async onRegister() {
        //
        const {membershipService, onSuccess} = this.props;
        const {membership} = this.state;

        if (!membership) {
            throw new Error('Membership should not be null.');
        }

        const registeredMemberId = await membershipService!.registerMembership(membership);

        if (registeredMemberId) {
            onSuccess!();
            this.initMembership();
        }
    }

    onCancel() {
        //
        this.initMembership();
    }

    initMembership() {
        //
        this.setState({
            membership: new Membership('', ''),
        });
    }

    render() {
        //
        const {membership} = this.state;
        const {clubs} = this.props.clubsService!;

        return (
            <MembershipRegistrationModalView
                clubs={clubs}
                membership={membership}
                onChange={this.onChange}
                onRegister={this.onRegister}
                onCancel={this.onCancel}
            />
        );
    }
}

export default MembershipRegistrationModalContainer;
