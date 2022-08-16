import Address from "../entities/address";
import User from "../entities/user";

export default class UserViewModel {
  user = new User();
  address = new Address();

  isValid() {
    return (
      this.user.username &&
      this.user.password &&
      this.user.email &&
      this.user.companyName &&
      this.user.age &&
      this.address.address
    );
  }
}
