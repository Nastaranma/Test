
import autobind from 'autobind-decorator';
import { action, observable, runInAction } from 'mobx';

import { CommunityMember, TravelClub } from '../../../model';
import MemberApi from '../apiclient/MemberApi';


@autobind
class MembersService {
  //
  static instanceName = 'membersService';
  static instance: MembersService;

  private readonly travelClubApi: MemberApi;


  @observable
  members: CommunityMember[] = [];


  constructor(travelClubApi: MemberApi = MemberApi.instance) {
    //
    this.travelClubApi = travelClubApi;
  }


  @action
  async findAllMembers(): Promise<CommunityMember[]> {
    //
    const members = await this.travelClubApi.findAllMembers();

    runInAction(() => this.members = members);

    return members;
  }

  @action
  async findMembersByName(name: string): Promise<CommunityMember[]> {
    //
    const members = await this.travelClubApi.findMembersByName(name);

    runInAction(() => this.members = members);

    return members;
  }

  @action
  clearmembers() {
    //
    this.members = [];
  }
}

MembersService.instance = new MembersService();

export default MembersService;
