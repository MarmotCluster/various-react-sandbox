import { List } from "../types/ListTypes";
import { listSelector, listState } from "../store/listStores";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [result, setResult] = useRecoilState<List[]>(listState);

  const response = useRecoilValueLoadable(listSelector);

  const requestFetch = useCallback(() => {
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

  useEffect(() => {
    requestFetch();
  }, [requestFetch]);

  return {
    isLoading,
    isError,
    result,
  };
};

export default useFetch;
