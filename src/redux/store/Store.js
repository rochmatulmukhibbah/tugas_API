import { createStore } from redux;
import Reducer from ./Reducer/Reducer;
const initialState = {
};

export const store = createStore(Reducer, initialState);