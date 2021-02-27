
import axios from 'axios';
import { MemberCdo, NameValueList, CommunityMember } from '../../../model';


class MemberApi {
  //
  static instance: MemberApi;

  memberApiUrl = `${process.env.REACT_APP_API_URL}/member`;


  registerMember(memberCdo: MemberCdo): Promise<string> {
    //
    return axios.post(this.memberApiUrl, memberCdo)
      .then((response) => response && response.data);
  }

  findMemberById(memberId: string): Promise<CommunityMember | null> {
    //
    return axios.get(`${this.memberApiUrl}/${memberId}`)
      .then((response) => response && response.data);
  }

  findMembersByName(name: string): Promise<CommunityMember[]> {
    //
    const params = {
      params: {
        name,
      },
    };

    return axios.get(this.memberApiUrl, params)
      .then((response) => response && response.data);
  }

  findAllMembers(): Promise<CommunityMember[]> {
    //
    return axios.get(`${this.memberApiUrl}/all`)
      .then(response => response.data);
  }

  modifyMember(memberId: string, nameValueList: NameValueList): Promise<void> {
    //
    return axios.put(`${this.memberApiUrl}/${memberId}`, nameValueList)
      .then((response) => response && response.data);
  }

  removeMember(memberId: string): Promise<void> {
    //
    return axios.delete(`${this.memberApiUrl}/${memberId}`)
      .then((response) => response && response.data);
  }
}

MemberApi.instance = new MemberApi();

export default MemberApi;
