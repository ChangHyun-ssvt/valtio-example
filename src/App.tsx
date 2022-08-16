import { useRef } from "react";
import { proxy, useSnapshot } from "valtio";
import AdultLabel from "./components/AdultLabel";
import ValidationLabel from "./components/ValidationLabel";
import UserViewModel from "./viewModels/UserViewModel";

export default function App() {
  const viewModel = useRef(proxy(new UserViewModel())).current;
  const state = useSnapshot(viewModel);

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
        onChange={viewModel.handleUserInputChange.bind(viewModel)}
        value={state.user.username ?? ""}
      />
      <input
        type="password"
        name="password"
        onChange={viewModel.handleUserInputChange.bind(viewModel)}
        value={state.user.password ?? ""}
      />
      <input
        type="text"
        name="email"
        onChange={viewModel.handleUserInputChange.bind(viewModel)}
        value={state.user.email ?? ""}
      />
      <input
        type="text"
        name="companyName"
        onChange={viewModel.handleUserInputChange.bind(viewModel)}
        value={state.user.companyName ?? ""}
      />
      <input
        type="text"
        name="age"
        onChange={viewModel.handleUserInputChange.bind(viewModel)}
        value={state.user.age ?? ""}
      />
      <input
        type="text"
        name="address"
        onChange={viewModel.handleAddressInputChange.bind(viewModel)}
        value={state.address.address ?? ""}
      />
      <button onClick={viewModel.changeName.bind(viewModel)}>changeName</button>
      <AdultLabel isAdult={state.user.isAdult()} />
      <ValidationLabel isValid={state.isValid()} />
    </div>
  );
}
