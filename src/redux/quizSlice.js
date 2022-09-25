import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quizCategory: "9",
  quizType: "multiple",
  quizScore: 0,
  questionNumber: 10,
  incorrectAnswer: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizCategory: (state, action) => {
      state.quizCategory = action.payload.quizCategory;
    },
    setQuizType: (state, action) => {
      state.quizType = action.payload.quizType;
    },
    setQuizScore: (state, action) => {
      state.quizScore += action.payload.quizScore;
    },
    setIncorrectAnswer: (state, action) => {
      state.incorrectAnswer += action.payload.incorrectAnswer;
    },
  },
});
export const {
  setQuizCategory,
  setQuizType,
  setQuizScore,
  setIncorrectAnswer,
} = quizSlice.actions;
export default quizSlice.reducer;
