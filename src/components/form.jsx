import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form({dataSubmit}) {
  const { handleSubmit, register, reset } = useForm();
  const submit = (data) => {
   dataSubmit(data)
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
      <Stack spacing={2}>
      <TextField {...register("title")} label="Name" variant="outlined" />
        <TextField
          {...register("description")}
          label="Description"
          variant="outlined"
        />
        <Button variant="contained" type="submit">Submit</Button>
      </Stack>
      </form>
    </div>
  );
}
