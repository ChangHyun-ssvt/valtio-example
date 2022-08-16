import User from "./user";

describe("User entity", () => {
  let user: User;

  beforeEach(() => {
    user = new User();
  });

  describe("isAdult", () => {
    it("나이가 20세 이상이면 true를 반환한다.", () => {
      // given
      user.age = "20";

      // when
      // then
      expect(user.isAdult()).toBe(true);
    });

    it("나이가 20세 미만이면 false를 반환한다.", () => {
      // given
      user.age = "19";

      // when
      // then
      expect(user.isAdult()).toBe(false);
    });
  });

  describe("serialize", () => {
    it("직렬화된 객체를 반환한다.", () => {
      // given
      user.username = "username";
      user.password = "password";
      user.email = "email";
      user.companyName = "company";
      user.age = "20";

      // when
      const serialized = user.serialize();

      // then
      expect(serialized).toEqual({
        username: "username",
        password: "password",
        email: "email",
        companyName: "company",
        age: 20,
      });
    });
  });
});

export {};
