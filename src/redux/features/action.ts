import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface actionState {
  sidebar: boolean,
  dashboardSidebar: boolean
}

const initialState: actionState = { 
    sidebar: false,
    dashboardSidebar: false,
};

const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
        state.sidebar = action.payload;
    },
    setDashboardSidebar: (state, action: PayloadAction<boolean>) => {
      state.dashboardSidebar = action.payload;
  },
  },
});

export const { setSidebar, setDashboardSidebar } = actionSlice.actions;
export default actionSlice.reducer;
