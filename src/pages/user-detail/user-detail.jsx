import { Container, Typography, CircularProgress, Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useSingleUsers } from "./service/query/useSingleUsers";

export default function UserDetail() {
  const { id } = useParams();
  const { data, isLoading } = useSingleUsers(id);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container
      sx={{ p: 4, backgroundColor: "#f5f5f5", borderRadius: 2, boxShadow: 3 }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
      >
        {data?.title}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {data?.description}
      </Typography>
    </Container>
  );
}
