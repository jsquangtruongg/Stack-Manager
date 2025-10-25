import type { PayloadAction } from "@reduxjs/toolkit";
import * as types from "../constants/authConstants";

type IGlobal = {
  error: string;
};

const initialState: IGlobal = {
  error: "",
};

const globalReducer = (
  state = initialState,
  action: PayloadAction<Partial<IGlobal>>
) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_ERROR:
      return {
        ...state,
        error: payload.error || "",
      };

    default:
      return state;
  }
};

export default globalReducer;
