import React from "react";
import { useForm, Controller } from "react-hook-form";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function ProfileForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "" },
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        bgcolor: "grey.100",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 480,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight={700}>
            Edit Profile
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Update your account details. Changes will apply immediately.
          </Typography>
        </Box>

        <Divider />

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  fullWidth
                />
              )}
            />

            <Stack direction="row" spacing={1.5} justifyContent="flex-end">
              <Button variant="outlined" type="button">
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
