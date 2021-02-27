
import autobind from 'autobind-decorator';
import { action, observable, runInAction } from 'mobx';
import _ from 'lodash';

import { TravelClub, TravelClubCdo } from '../../../model';
import ClubApi from '../apiclient/ClubApi';


@autobind
class ClubService {
  //
  static instanceName = 'clubService';
  static instance: ClubService;

  private readonly travelClubApi: ClubApi;


  @observable
  club: TravelClub | null = null;


  constructor(travelClubApi: ClubApi = ClubApi.instance) {
    //
    this.travelClubApi = travelClubApi;
  }


  async registerClub(travelClub: TravelClub): Promise<string> {
    
    //
    const travelClubCdo = TravelClubCdo.fromModel(travelClub);

    return this.travelClubApi.registerClub(travelClubCdo);
  }

  async modifyClub(travelClub: TravelClub): Promise<void> {
    //
    const nameValueList = TravelClub.asNameValues(travelClub);

    return this.travelClubApi.modifyClub(travelClub.id, nameValueList);
  }

  async removeClub(clubId: string): Promise<void> {
    //
    return this.travelClubApi.removeClub(clubId);
  }

  @action
  async findClubById(clubId: string): Promise<TravelClub | null> {
    //
    const club = await this.travelClubApi.findClubById(clubId);

    runInAction(() => this.club = club);

    return club;
  }

  @action
  setClub(club: TravelClub) {
    //
    this.club = club;
  }

  @action
  setClubProps(key: string, value: any) {
    //
    if (!this.club) {
      throw new Error('Travel club should not be null.');
    }

    this.club = _.set(this.club, key, value);
  }

  @action
  clearClub() {
    //
    this.club = null;
  }
}

ClubService.instance = new ClubService();

export default ClubService;
