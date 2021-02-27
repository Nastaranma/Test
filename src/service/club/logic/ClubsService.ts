
import autobind from 'autobind-decorator';
import { action, observable, runInAction } from 'mobx';

import { TravelClub } from '../../../model';
import ClubApi from '../apiclient/ClubApi';


@autobind
class ClubsService {
  //
  static instanceName = 'clubsService';
  static instance: ClubsService;

  private readonly travelClubApi: ClubApi;


  @observable
  clubs: TravelClub[] = [];


  constructor(travelClubApi: ClubApi = ClubApi.instance) {
    //
    this.travelClubApi = travelClubApi;
  }


  @action
  async findAllClubs(): Promise<TravelClub[]> {
    //
    const clubs = await this.travelClubApi.findAllClubs();

    runInAction(() => this.clubs = clubs);

    return clubs;
  }

  @action
  async findClubsByName(name: string): Promise<TravelClub[]> {
    //
    const clubs = await this.travelClubApi.findClubsByName(name);

    runInAction(() => this.clubs = clubs);

    return clubs;
  }

  @action
  clearClubs() {
    //
    this.clubs = [];
  }
}

ClubsService.instance = new ClubsService();

export default ClubsService;
