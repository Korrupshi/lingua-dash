// import { createSlice } from "@reduxjs/toolkit";
// import { StudyData } from "../../domain/models/StudyData";

// export interface StudyState {
//   value: StudyData[];
// }

// const initialState: StudyState = { value: [{ date: "2024", readMin: 0 }] };

// export const studySlice = createSlice({
//   name: "study",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value.push({
//         date: "2024",
//         readMin: state.value[0].readMin++,
//       });
//     },
//     decrement: (state) => {
//       state.value.push({
//         date: "2024",
//         readMin: state.value[0].readMin--,
//       });
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement } = studySlice.actions;

// export default studySlice.reducer;
