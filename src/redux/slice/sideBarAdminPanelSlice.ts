import { createSlice } from '@reduxjs/toolkit';

interface SideBarState {
  isSideBarOpen: boolean;
}

const initialState: SideBarState = {
  isSideBarOpen: false,
};

export const sideBarAdminPanelSlice = createSlice({
  name: 'sideBarAdminPanelSlice',
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

export const { openSideBar, closeSideBar } = sideBarAdminPanelSlice.actions;

export default sideBarAdminPanelSlice.reducer;
