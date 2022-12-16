import axios from "axios";
import { atom, selector } from "recoil";
import { List, ListParam } from "../types/ListTypes";

export const listParam = atom<ListParam>({
  key: "listParam",
  default: {},
});

export const listState = atom<List[]>({
  key: "listState",
  default: [],
});

export const listSelector = selector({
  key: "dataSelector",
  get: async ({ get }) => {
    const { id } = get(listParam);

    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/`, {
      params: { id },
    });

    if (!res.data) {
      return [];
    }
    return res.data;
  },
});
