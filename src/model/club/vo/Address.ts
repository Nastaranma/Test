
import AddressType from './AddressType';


class Address {
  //
  zipCode: string;
  zipAddress: string;
  streetAddress: string;
  country: string;
  addressType: AddressType;

  constructor(zipCode: string, zipAddress: string, streetAddress: string) {
    //
    this.zipCode = zipAddress;
    this.zipAddress = zipAddress;
    this.streetAddress = streetAddress;
    this.country = 'South Korea';
    this.addressType = AddressType.Home;
  }
}

export default Address;
