import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "./appStore";

// Define a type for the slice state
export interface TableData {
  projectName: string;
  status: string;
  assignedTo: string;
  completedTasks: string;
  activeTasks: string;
}

interface TableDataState {
  tableDatas: TableData[];
  filteredTableDatas: TableData[];
}

// Define the initial state using that type
const initialState: TableDataState = {
  tableDatas: [],
  filteredTableDatas: []
};

export const tableDataSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    addTableData: (
      state,
      action: PayloadAction<{
        projectName: string;
        status: string;
        assignedTo: string;
        completedTasks: string;
        activeTasks: string;
      }>
    ) => {
      state.tableDatas.push({
        projectName: action.payload.projectName,
        status: action.payload.status,
        assignedTo: action.payload.assignedTo,
        completedTasks: action.payload.completedTasks,
        activeTasks: action.payload.activeTasks
      });
    },
    addFilteredTableData:  (
        state,
        action: PayloadAction<{
          projectName: string;
          status: string;
          assignedTo: string;
          completedTasks: string;
          activeTasks: string;
        }>
      ) => {
        state.filteredTableDatas.push({
          projectName: action.payload.projectName,
          status: action.payload.status,
          assignedTo: action.payload.assignedTo,
          completedTasks: action.payload.completedTasks,
          activeTasks: action.payload.activeTasks
        });
      },
  },
});

export const { addTableData, addFilteredTableData } = tableDataSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const searchText = (state: RootState) => state.search.value;

export default tableDataSlice.reducer;
