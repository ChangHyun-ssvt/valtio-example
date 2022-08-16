import Address from "../entities/address";
import User from "../entities/user";

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
}
