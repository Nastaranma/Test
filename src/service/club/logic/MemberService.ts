
import autobind from 'autobind-decorator';
import { action, observable, runInAction } from 'mobx';
import _ from 'lodash';


import { CommunityMember, MemberCdo } from '../../../model';
import MemberApi from '../apiclient/MemberApi';


@autobind
class MemberService {
  //
  static instanceName = 'memberService';
  static instance: MemberService;

  private readonly travelClubApi: MemberApi ;


  @observable
  member: CommunityMember | null = null;


  constructor(travelClubApi: MemberApi = MemberApi.instance) {
    //
    this.travelClubApi = travelClubApi;
  }


  async registerMember(CommunityMember: CommunityMember): Promise<string> {
    //
    const memberCdo = MemberCdo.fromModel(CommunityMember);

    return this.travelClubApi.registerMember(memberCdo);
  }


  async modifyMember (communityMember: CommunityMember): Promise<void> {
    //
    const nameValueList = CommunityMember.asNameValues(communityMember);

    return this.travelClubApi.modifyMember(communityMember.id, nameValueList);
  }


  async removeMember(memberId: string): Promise<void> {
    //
    return this.travelClubApi.removeMember(memberId);
  }

  @action
  async findMemberById(memberId: string): Promise<CommunityMember | null> {
    //
    const member = await this.travelClubApi.findMemberById(memberId);


    runInAction(() => this.member = member);

    return member;
  }

  
  @action
  setMember(member: CommunityMember) {
    //
    this.member = member;
  }

  @action
  setMemberProps(key: string, value: any) {
    //
    if (!this.member) {
      throw new Error('Member should not be null.');
    }

    this.member = _.set(this.member, key, value);
  }

  @action
  clearMember() {
    //
    this.member = null;
  }
}

MemberService.instance = new MemberService();

export default MemberService;
