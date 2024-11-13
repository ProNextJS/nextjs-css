"use client";
import { useForm, Controller } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Stack,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";

import { addEntry } from "@/blog";

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
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-4"
    >
      <Stack spacing={4}>
        <Controller
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input {...field} />
            </FormControl>
          )}
        />
        <Controller
          name="text"
          control={form.control}
          render={({ field }) => (
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Input {...field} />
            </FormControl>
          )}
        />

        <Box>
          <Button type="submit">Submit</Button>
        </Box>
      </Stack>
    </form>
  );
}
