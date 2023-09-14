import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const [data, setData] = useState<Todo[]>([]);

  // axios
  //   .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  //   .then((res) => setData(res.data));
  // const fetchTodos = () =>
  // console.log(data);
  return data;

  // useQuery<Todo[], Error>({
  //   queryKey: ["todos"],
  //   queryFn: fetchTodos,
  // });
};
export default useTodos;
