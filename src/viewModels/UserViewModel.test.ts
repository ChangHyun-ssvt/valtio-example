import React from "react";
import UserViewModel from "./UserViewModel";

describe("UserViewModel", () => {
  let userViewModel: UserViewModel;

  beforeEach(() => {
    userViewModel = new UserViewModel();
  });

  describe("changeName", () => {
    it("changeName 메소드 호출 시 이름이 유저 이름이 changed로 변경", () => {
      // given
      // when
      userViewModel.changeName();

      // then
      expect(userViewModel.user.username).toBe("changed");
    });
  });

  describe("유저 필드 변경", () => {
    it("유저 필드 변경을 성공해야 한다.", () => {
      // given
      // when
      userViewModel.handleUserInputChange({
        target: { name: "username", value: "username" },
      } as React.ChangeEvent<HTMLInputElement>);

      // then
      expect(userViewModel.user.username).toBe("username");
    });

    it("유저 entity에 없는 필드 변경 시 에러를 발생시킨다.", () => {
      // given
      // when
      const changeWithNotExistsField = () =>
        userViewModel.handleUserInputChange({
          target: { name: "not-exists-field", value: "value" },
        } as React.ChangeEvent<HTMLInputElement>);

      // then
      expect(changeWithNotExistsField).toThrowError(
        "User entity has not not-exists-field field"
      );
    });
  });

  describe("주소 필드 변경", () => {
    it("주소 필드 변경을 성공해야 한다.", () => {
      // given
      // when
      userViewModel.handleAddressInputChange({
        target: { name: "address", value: "address" },
      } as React.ChangeEvent<HTMLInputElement>);

      // then
      expect(userViewModel.address.address).toBe("address");
    });

    it("주소 entity에 없는 필드 변경 시 에러를 발생시킨다.", () => {
      // given
      // when
      const changeWithNotExistsField = () =>
        userViewModel.handleAddressInputChange({
          target: { name: "not-exists-field", value: "value" },
        } as React.ChangeEvent<HTMLInputElement>);

      // then
      expect(changeWithNotExistsField).toThrowError(
        "Address entity has not not-exists-field field"
      );
    });
  });

  describe("validation", () => {
    it("필드를 전부 입력하지 않으면 validation을 통과하지 못한다.", () => {
      // given
      // when
      // then
      expect(userViewModel.isValid()).toBe(false);
    });

    it("모든 필드를 입력하면 validation을 통과해야 한다.", () => {
      // given
      // when
      userViewModel.handleUserInputChange({
        target: { name: "username", value: "username" },
      } as React.ChangeEvent<HTMLInputElement>);
      userViewModel.handleUserInputChange({
        target: { name: "password", value: "password" },
      } as React.ChangeEvent<HTMLInputElement>);
      userViewModel.handleUserInputChange({
        target: { name: "email", value: "email" },
      } as React.ChangeEvent<HTMLInputElement>);
      userViewModel.handleUserInputChange({
        target: { name: "companyName", value: "companyName" },
      } as React.ChangeEvent<HTMLInputElement>);
      userViewModel.handleUserInputChange({
        target: { name: "age", value: "15" },
      } as React.ChangeEvent<HTMLInputElement>);
      userViewModel.handleAddressInputChange({
        target: { name: "address", value: "address" },
      } as React.ChangeEvent<HTMLInputElement>);

      // then
      expect(userViewModel.isValid()).toBe(true);
    });
  });
});

export {};
