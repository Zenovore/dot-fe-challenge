import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quizCategory: "9",
  quizType: "multiple",
  quizScore: 0,
  questionNumber: 10,
  incorrectAnswer: 0,
  deadline: new Date(Date.parse(new Date())),
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
    setDeadline: (state, action) => {
      state.deadline = new Date(
        Date.parse(action.payload.deadline) + 20 * 1000
      );
    },
    setDefault: (state) => {
      state.quizCategory = "9";
      state.quizType = "multiple";
      state.quizScore = 0;
      state.questionNumber = 10;
      state.incorrectAnswer = 0;
      state.deadline = new Date(Date.parse(new Date()));
    },
  },
});
export const {
  setQuizCategory,
  setQuizType,
  setQuizScore,
  setIncorrectAnswer,
  setDeadline,
  setDefault,
} = quizSlice.actions;
export default quizSlice.reducer;
