
import CommunityMember from '../CommunityMember';


class MemberCdo {
  //
  email: string;
  name: string;
  nickName: string;
  phoneNumber: string;
  birthDay: string;

  constructor(email: string, name: string, nickName: string, phoneNumber: string, birthDay: string) {
    //
    this.email = email;
    this.name = name;
    this.nickName = nickName;
    this.phoneNumber = phoneNumber;
    this.birthDay = birthDay;
  }

  static fromModel(model: CommunityMember): MemberCdo {
    //
    return new MemberCdo(
      model.email,
      model.name,
      model.nickName,
      model.phoneNumber,
      model.birthDay
    );
  }
}

export default MemberCdo;
