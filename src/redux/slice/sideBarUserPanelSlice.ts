import { createSlice } from '@reduxjs/toolkit';


interface SideBarUserPanelState {
  isSideBarOpen: boolean;
}

const initialState: SideBarUserPanelState = {
  isSideBarOpen: false,
};

export const sideBarUserPanelSlice = createSlice({
  name: 'sideBarUserPanelSlice',
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


export const { openSideBar, closeSideBar } = sideBarUserPanelSlice.actions;

export default sideBarUserPanelSlice.reducer;
