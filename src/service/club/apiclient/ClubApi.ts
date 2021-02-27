
import axios from 'axios';
import { TravelClub, TravelClubCdo, NameValueList } from '../../../model';


class ClubApi {
  //
  static instance: ClubApi;

  clubApiUrl = `${process.env.REACT_APP_API_URL}/club`;


  registerClub(travelClubCdo: TravelClubCdo): Promise<string> {
    //
    return axios.post(this.clubApiUrl, travelClubCdo)
      .then((response) => response && response.data);
  }

  findClubById(clubId: string): Promise<TravelClub | null> {
    //
    return axios.get(`${this.clubApiUrl}/${clubId}`)
      .then((response) => response && response.data);
  }

  findClubsByName(name: string): Promise<TravelClub[]> {
    //
    const params = {
      params: {
        name,
      },
    };

    return axios.get(this.clubApiUrl, params)
      .then((response) => response && response.data);
  }

  findAllClubs(): Promise<TravelClub[]> {
    //
    return axios.get(`${this.clubApiUrl}/all`)
      .then(response => response.data);
  }

  modifyClub(clubId: string, nameValueList: NameValueList): Promise<void> {
    //
    return axios.put(`${this.clubApiUrl}/${clubId}`, nameValueList)
      .then((response) => response && response.data);
  }

  removeClub(clubId: string): Promise<void> {
    //
    return axios.delete(`${this.clubApiUrl}/${clubId}`)
      .then((response) => response && response.data);
  }
}

ClubApi.instance = new ClubApi();

export default ClubApi;
