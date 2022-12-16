import axios from "axios";
import { atom, selectorFamily, selector } from "recoil";

export const testState = atom({
  key: "testState",
  default: 1,
});

export const testSelector = selector({
  key: "testSelector",
  get: async ({ get }) => {
    const param = get(testState);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/`, {
      params: { id: param },
    });
    return res;
  },
});
