import { SelectedPage } from "@c/shared/types";
import { configureStore } from "@reduxjs/toolkit";

// Define the interface for the state
export interface RootState {
  selectedPage: SelectedPage;
}

// Initial state type
const initialState: RootState = {
  selectedPage: SelectedPage.ROOT, // Initial selected page
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SELECTED_PAGE":
      return { ...state, selectedPage: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
