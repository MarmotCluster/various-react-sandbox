import { atom, useRecoilState } from "recoil";
import { List } from "../types/ListTypes";
import { listParam } from "../store/listStores";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const getData = (id: number): Promise<Response> =>
  axios.get(`https://jsonplaceholder.typicode.com/todos/`, {
    params: { id },
  });

const refetchCount = atom({
  key: "refetchCount",
  default: 0,
});

const GlobalVars = () => {
  const [param, setParam] = useRecoilState(listParam);
  const { isLoading, isError, result } = useFetch();

  const renderList = () => {
    if (isLoading) {
      return <div>데이따 로딩중...</div>;
    }

    if (isError) {
      return <div>F5 누르고 다시 시도.</div>;
    }

    return (
      <div>
        {result.map((i: List, index: number) => {
          return (
            <p key={index}>
              {i.id}: {i.title}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => setParam({ id: Math.round(Math.random() * 10) })}>
        갱신갱신
      </button>
      {renderList()}
    </div>
  );
};

export default GlobalVars;
