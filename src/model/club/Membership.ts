
import RoleInClub from './vo/RoleInClub';
import { Entity, NameValue, NameValueList } from '../shared';


class Membership extends Entity {
  //
  clubId: string;
	memberId: string;
	role: RoleInClub;
  joinDate: string;


  constructor(clubId: string, memberId: string) {
    //
    super();

    this.clubId = clubId;
    this.memberId = memberId;
    this.role = RoleInClub.Member;
    this.joinDate = '';
  }

  static asNameValues(membership: Membership): NameValueList {
    //
    return new NameValueList(
      new NameValue('role', membership.role)
    );
  }
}

export default Membership;
