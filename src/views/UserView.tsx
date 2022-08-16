import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { proxy, useSnapshot } from "valtio";
import AdultLabel from "../components/AdultLabel";
import ValidationLabel from "../components/ValidationLabel";
import UserViewModel from "../viewModels/UserViewModel";

export default function UserView() {
  const navigate = useNavigate();
  const viewModel = useRef(proxy(new UserViewModel(navigate))).current;
  const state = useSnapshot(viewModel);

  return (
    <form onSubmit={(e) => viewModel.handleSubmit(e)}>
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
          onChange={(e) => viewModel.handleUserInputChange(e)}
          value={state.user.username ?? ""}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => viewModel.handleUserInputChange(e)}
          value={state.user.password ?? ""}
        />
        <input
          type="text"
          name="email"
          onChange={(e) => viewModel.handleUserInputChange(e)}
          value={state.user.email ?? ""}
        />
        <input
          type="text"
          name="companyName"
          onChange={(e) => viewModel.handleUserInputChange(e)}
          value={state.user.companyName ?? ""}
        />
        <input
          type="text"
          name="age"
          onChange={(e) => viewModel.handleUserInputChange(e)}
          value={state.user.age ?? ""}
        />
        <input
          type="text"
          name="address"
          onChange={(e) => viewModel.handleAddressInputChange(e)}
          value={state.address.address ?? ""}
        />
        <button type="button" onClick={() => viewModel.changeName()}>
          changeName
        </button>
        <button type="submit">submit</button>
        <AdultLabel isAdult={state.user.isAdult} />
        <ValidationLabel isValid={state.isValid} />
      </div>
    </form>
  );
}
