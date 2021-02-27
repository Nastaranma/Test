
import TravelClub from '../TravelClub';


class TravelClubCdo {
  //
  name: string;
  intro: string;

  constructor(name: string, intro: string) {
    //
    this.name = name;
    this.intro = intro;
  }

  static fromModel(model: TravelClub): TravelClubCdo {
    //
    return new TravelClubCdo(
      model.name,
      model.intro
    );
  }
}

export default TravelClubCdo;
