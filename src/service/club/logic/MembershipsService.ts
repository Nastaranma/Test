
import autobind from 'autobind-decorator';
import { action, observable, runInAction } from 'mobx';

import { Membership, TravelClub } from '../../../model';
import MembershipApi from '../apiclient/MembershipApi';


@autobind
class MembershipsService {
  //
  static instanceName = 'membershipsService';
  static instance: MembershipsService;

  private readonly membershipApi: MembershipApi;


  @observable
  memberships: Membership[] = [];


  constructor(membershipApi: MembershipApi = MembershipApi.instance) {
    //
    this.membershipApi = membershipApi;
  }


  @action
  async findAllMembershipsOfClub(clubId: string): Promise<Membership[]> {
    //
    const memberships = await this.membershipApi.findAllMembershipsOfClub(clubId);

    runInAction(() => this.memberships = memberships);

    return memberships;
  }

  @action
  async  findAllMembershipsOfMember(memberId: string): Promise<Membership[]> {
    //
    const memberships = await this.membershipApi.findAllMembershipsOfMember(memberId);

    runInAction(() => this.memberships = memberships);

    return memberships;
  }

  @action
  clearMemberships() {
    //
    this.memberships = [];
  }
}

MembershipsService.instance = new MembershipsService();

export default MembershipsService;
