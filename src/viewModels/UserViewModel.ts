import Address, { AddressValueKeys } from "../entities/address";
import User, { UserValueKeys } from "../entities/user";

export default class UserViewModel {
  user = new User();
  address = new Address();

  isValid() {
    return (
      Boolean(this.user.username) &&
      Boolean(this.user.password) &&
      Boolean(this.user.email) &&
      Boolean(this.user.companyName) &&
      Boolean(this.user.age) &&
      Boolean(this.address.address)
    );
  }

  handleUserInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.user[e.target.name as UserValueKeys] = e.target.value;
  }

  handleAddressInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.address[e.target.name as AddressValueKeys] = e.target.value;
  }

  changeName() {
    this.user.username = "changed";
  }
}
