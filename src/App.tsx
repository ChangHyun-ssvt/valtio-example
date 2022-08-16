import { useRef } from "react";
import { proxy, useSnapshot } from "valtio";
import { AddressValueKeys } from "./entities/address";
import { UserValueKeys } from "./entities/user";
import UserViewModel from "./viewModels/UserViewModel";

function App() {
  const viewModel = useRef(proxy(new UserViewModel())).current;
  const state = useSnapshot(viewModel);

  console.log(state.user);
  console.log(state.address);

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    viewModel.user[e.target.name as UserValueKeys] = e.target.value;
  };

  const handleAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    viewModel.address[e.target.name as AddressValueKeys] = e.target.value;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <input
        type="text"
        name="username"
        onChange={handleUserInputChange}
        value={state.user.username ?? ""}
      />
      <input
        type="password"
        name="password"
        onChange={handleUserInputChange}
        value={state.user.password ?? ""}
      />
      <input
        type="text"
        name="email"
        onChange={handleUserInputChange}
        value={state.user.email ?? ""}
      />
      <input
        type="text"
        name="companyName"
        onChange={handleUserInputChange}
        value={state.user.companyName ?? ""}
      />
      <input
        type="text"
        name="age"
        onChange={handleUserInputChange}
        value={state.user.age ?? ""}
      />
      <input
        type="text"
        name="address"
        onChange={handleAddressInputChange}
        value={state.address.address ?? ""}
      />
      <p>{state.user.isAdult() ? "성인입니다." : "어린이입니다."}</p>
      <p>{state.isValid() ? "validation 성공" : "validation 실패"}</p>
    </div>
  );
}

export default App;
