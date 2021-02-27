
import { Entity, NameValue, NameValueList } from '../shared';


class TravelClub extends Entity {
  //
  name: string;
  intro: string;
  foundationTime: number;


  constructor(name: string, intro: string) {
    //
    super();

    this.name = name;
    this.intro = intro;
    this.foundationTime = 0;
  }

  static asNameValues(travelClub: TravelClub): NameValueList {
    //
    return new NameValueList(
      new NameValue('name', travelClub.name),
      new NameValue('intro', travelClub.intro),
    );
  }
}

export default TravelClub;
