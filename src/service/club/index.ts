
import ClubService from './logic/ClubService';
import ClubsService from './logic/ClubsService';
import MemberService from './logic/MemberService';
import MembersService from './logic/MembersService';
import MembershipService from './logic/MembershipService';
import MembershipsService from './logic/MembershipsService';


export const store = {
  clubService: ClubService.instance,
  clubsService: ClubsService.instance,
  memberService:MemberService.instance,
  membersService:MembersService.instance,
  membershipService:MembershipService.instance,
  membershipsService:MembershipsService.instance
};

export {
  ClubService,
  ClubsService,
  MemberService,
  MembersService,
  MembershipService,
  MembershipsService
};

