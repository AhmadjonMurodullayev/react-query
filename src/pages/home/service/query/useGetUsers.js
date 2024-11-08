import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export function useGetUsers() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () =>  request.get("/todos").then((res) => res.data),
  });
}
