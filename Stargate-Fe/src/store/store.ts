import { createSlice, configureStore } from "@reduxjs/toolkit";

// createSlice를 통해 state를 만들어줘서 store로 보낸다
const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0, showCounter: true },
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

// store 만들어주는 configureStore
const store = configureStore({
    reducer: { counter: counterSlice.reducer },
})

// counterSlice의 reducers 내보내기
export const counterActions = counterSlice.actions;

export default store;