
import axios from 'axios';
import { Membership, MembershipCdo, NameValueList } from '../../../model';


class MembershipApi {
  //
  static instance: MembershipApi;

  membershipApiUrl = `${process.env.REACT_APP_API_URL}/membership`;


  registerMembership(membershipCdo: MembershipCdo): Promise<string> {
    //
    return axios.post(this.membershipApiUrl, membershipCdo)
      .then((response) => response && response.data);
  }

  findMembership(membershipId: string): Promise<Membership | null> {
    //
    return axios.get(`${this.membershipApiUrl}/${membershipId}`)
      .then((response) => response && response.data);
  }

  findMembershipByClubIdAndMemberId(clubId: string, memberId: string): Promise<Membership |null> {
    //
    const params = {
      params: {
        clubId,
        memberId,
      },
    };

    return axios.get(this.membershipApiUrl, params)
      .then((response) => response && response.data);
  }

  findAllMembershipsOfClub(clubId: string): Promise<Membership[]> {
    //
    const params = {
      params: {
        clubId,
      },
    };

    return axios.get(`${this.membershipApiUrl}/club`, params)
      .then((response) => response && response.data || []);
  }

  findAllMembershipsOfMember(memberId: string): Promise<Membership[]> {
    //
    const params = {
      params: {
        clubId: memberId,
      },
    };

    return axios.get(`${this.membershipApiUrl}/member`, params)
      .then((response) => response && response.data || []);
  }

  modifyMembership(membershipId: string, nameValueList: NameValueList): Promise<void> {
    //
    return axios.put(`${this.membershipApiUrl}/${membershipId}`, nameValueList)
      .then((response) => response && response.data);
  }

  removeMembership(membershipId: string): Promise<void> {
    //
    return axios.delete(`${this.membershipApiUrl}/${membershipId}`)
      .then((response) => response && response.data);
  }
}

MembershipApi.instance = new MembershipApi();

export default MembershipApi;
