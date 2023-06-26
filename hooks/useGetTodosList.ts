import * as services from "@/services";
import { useQuery } from "@tanstack/react-query";

const usetGetTodosList = () => {
  const data = useQuery<any>(
    ["todoslist"],
    async () => {
      const { data: axiosData } = await services.todosGetList();
      return axiosData;
    },
    { keepPreviousData: true }
  );
  return data;
};

export default usetGetTodosList;
