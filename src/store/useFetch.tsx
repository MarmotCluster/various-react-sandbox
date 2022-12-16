import axios from "axios";
import React, { useState } from "react";
import { atom, selector, useRecoilState, useRecoilValueLoadable } from "recoil";

export interface List {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface ListParam {
  id?: number;
}

export const listParam = atom<ListParam>({
  key: "listParam",
  default: {},
});

export const listState = atom<List[]>({
  key: "listState",
  default: [],
});

const listSelector = selector({
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

const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [result, setResult] = useRecoilState<List[]>(listState);

  const response = useRecoilValueLoadable(listSelector);

  const requestFetch = React.useCallback(() => {
    if (response === null || response === undefined) {
      return;
    }

    switch (response.state) {
      case "loading":
        setIsLoading(true);
        break;
      case "hasValue":
        setIsLoading(false);
        setResult(response.contents);
        break;
      case "hasError":
        setIsError(false);
        setIsLoading(false);
        break;
      default:
        return;
    }
  }, [setResult, response]);

  React.useEffect(() => {
    requestFetch();
  }, [requestFetch]);

  return {
    isLoading,
    isError,
    result,
  };
};

export default useFetch;
