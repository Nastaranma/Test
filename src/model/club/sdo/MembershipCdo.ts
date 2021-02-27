
import RoleInClub from '../vo/RoleInClub';
import Membership from '../Membership';


class MembershipCdo {
  //
  clubId: string;
  memberId: string;
  role: RoleInClub;

  constructor(clubId: string, memberId: string, role: RoleInClub) {
    //
    this.clubId = clubId;
    this.memberId = memberId;
    this.role = role;
  }

  static fromModel(model: Membership): MembershipCdo {
    //
    return new MembershipCdo(
      model.clubId,
      model.memberId,
      model.role
    );
  }
}

export default MembershipCdo;
