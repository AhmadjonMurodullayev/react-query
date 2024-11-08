import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { toast } from "react-toastify";

export const useDeleteUsers = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id) => request.delete(`/todos/${id}`).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["todos"]);
      toast.success("success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
