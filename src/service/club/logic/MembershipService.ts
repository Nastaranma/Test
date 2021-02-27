
import autobind from 'autobind-decorator';
import { action, observable, runInAction } from 'mobx';
import _ from 'lodash';

import { Membership, MembershipCdo } from '../../../model';
import MembershipApi from '../apiclient/MembershipApi';



@autobind
class MembershipService {
  //
  static instanceName = 'membershipService';
  static instance: MembershipService;

  private readonly memberShipApi: MembershipApi;


  @observable
  membership: Membership | null = null;


  constructor(memberShipApi: MembershipApi = MembershipApi.instance) {
    //
    this.memberShipApi = memberShipApi;
  }


  async registerMembership(memberShip: Membership): Promise<string> {
    
    //
    const memberShipCdo = MembershipCdo.fromModel(memberShip);

    return this.memberShipApi.registerMembership(memberShipCdo);
  }


  async modifyMembership(memberShip: Membership): Promise<void> {
    //
    const nameValueList = Membership.asNameValues(memberShip);

    return this.memberShipApi.modifyMembership(memberShip.id, nameValueList);
  }

  async removeMembership(memberId: string): Promise<void> {
    //
    return this.memberShipApi.removeMembership(memberId);
  }

  @action
  async findMembershipByClubIdAndMemberId(clubId: string, memberId: string): Promise<Membership | null> {
    //
    const membership = await this.memberShipApi.findMembershipByClubIdAndMemberId(clubId,memberId);

    runInAction(() => this.membership = membership);

    return membership;
  }

  @action
  setMembership(membership: Membership) {
    //
    this.membership = membership;
  }

  @action
  setMembershipProps(key: string, value: any) {
    //
    if (!this.membership) {
      throw new Error('Membership should not be null.');
    }

    this.membership = _.set(this.membership, key, value);
  }

  @action
  clearMembership() {
    //
    this.membership = null;
  }
}


MembershipService.instance = new MembershipService();

export default MembershipService;
