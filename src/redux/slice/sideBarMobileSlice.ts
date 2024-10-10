import { createSlice } from '@reduxjs/toolkit';

interface SideBarMobileState {
  isSideBarOpen: boolean;
}

const initialState: SideBarMobileState = {
  isSideBarOpen: false,
};

export const sideBarMobileSlice = createSlice({
  name: 'sideBarMobileSlice',
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.isSideBarOpen = true;
    },
    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = sideBarMobileSlice.actions;

export default sideBarMobileSlice.reducer;
