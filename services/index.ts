import * as utils from "@/utils";

export const todosGetList = async () => {
  return await utils.HttpClient.get(`/api/todos`);
};
