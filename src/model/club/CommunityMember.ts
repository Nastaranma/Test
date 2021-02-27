
import Address from './vo/Address';
import NameValueList from '../shared/NameValueList';
import { Entity, NameValue } from '../shared';


class CommunityMember extends Entity {
  //
  email: string;
  name: string;
  phoneNumber: string;
  nickName: string;
  birthDay: string;

  address: Address[];


  constructor(email: string, name: string, phoneNumber: string) {
    //
    super();

    this.email = email;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.nickName = '';
    this.birthDay = '';
    this.address = [];
  }

  static asNameValues(communityMember: CommunityMember): NameValueList {
    //
    return new NameValueList(
      new NameValue('name', communityMember.name),
      new NameValue('phoneNumber', communityMember.phoneNumber),
      new NameValue('nickName', communityMember.nickName),
      new NameValue('birthDay', communityMember.birthDay)
    );
  }
}

export default CommunityMember;
