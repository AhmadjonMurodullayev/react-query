import { Box, Button, Stack, Typography } from "@mui/material";
import { useDeleteUsers } from "../pages/home/service/mutation/useDeleteUsers";
import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Card({ title, description, id }) {
  const { mutate } = useDeleteUsers();
  const naviget = useNavigate()

  const userDelete = () => {
    mutate(id)
  };

  return (
    <Stack spacing={2} sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: "8px" }}>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" color="text.secondary">{description}</Typography>
      <Box>
        <Button onClick={userDelete} color="error" variant="contained">
          Delete
        </Button>
      </Box>
      <Box>
<Button onClick={()=>naviget(`/user-detail/${id}`)} color="success" variant="contained">Show</Button>
      </Box>
    </Stack>
  );
}
