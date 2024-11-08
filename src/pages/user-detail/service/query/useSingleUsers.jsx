import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";



export const useSingleUsers = (id) => {
    return useQuery({
        queryKey: ["user-detail", id],
        queryFn: () => request.get(`/todos/${id}`).then((res) => res.data),
    });
}