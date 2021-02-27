
import NameValue from './NameValue';


class NameValueList {
  //
  nameValues: NameValue[];


  constructor(...nameValues: NameValue[]) {
    //
    this.nameValues = nameValues;
  }
}

export default NameValueList;
