"use client";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { addEntry } from "@/blog";
import { Stack } from "@mui/material";

type FormFields = {
  title: string;
  text: string;
};

export default function BlogForm() {
  const form = useForm<FormFields>({
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const onSubmit = async (data: FormFields) => {
    await addEntry(data);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stack gap={2}>
        <Controller
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <InputLabel htmlFor="title">Title</InputLabel>
              <TextField
                id="title"
                aria-describedby="Title"
                {...field}
                variant="outlined"
              />
            </FormControl>
          )}
        />
        <Controller
          name="text"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <InputLabel htmlFor="content">Content</InputLabel>
              <TextField
                id="content"
                aria-describedby="Content"
                {...field}
                variant="outlined"
                multiline
                minRows={4}
              />
            </FormControl>
          )}
        />

        <div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </Stack>
    </form>
  );
}
