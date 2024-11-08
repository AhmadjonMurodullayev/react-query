import React from "react";
import { useGetUsers } from "./service/query/useGetUsers";
import  Card from '../../components/card'
import { Container } from "@mui/material";
import Form from "../../components/form";
import { useCreateUsers } from "./service/mutation/useCreateUsers";

import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
export default function Home() {
  const { data, isLoading, isError } = useGetUsers();
  const {mutate} = useCreateUsers()
  const client = useQueryClient()
  const submit = (data) => {
    mutate(data,{
      onSuccess: (data) => {
        client.invalidateQueries(["todos"])
        toast.success("success")
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
    console.log(data);
    
  }
  return (
    <Container>
      <Form dataSubmit={submit} />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error</div>
      ) : (
        data.map((item) => <Card key={item.id} {...item} />)
      )}
    </Container>
  );
}
