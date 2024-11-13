"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { TextField, TextArea, Flex, Box } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";

import { addEntry } from "@/blog";

type FormFields = {
  title: string;
  text: string;
};

export default function BlogForm() {
  const { control, handleSubmit, reset } = useForm<FormFields>({
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (values) => {
    await addEntry(values);
    reset();
  };

  return (
    <Form.Root onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="4">
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Form.Field name="title">
              <Form.Label>Title</Form.Label>
              <Form.Control asChild>
                <TextField.Root {...field} />
              </Form.Control>
            </Form.Field>
          )}
        />
        <Controller
          name="text"
          control={control}
          render={({ field }) => (
            <Form.Field name="text">
              <Form.Label>Content</Form.Label>
              <Form.Control asChild>
                <TextArea placeholder="Content" {...field} />
              </Form.Control>
            </Form.Field>
          )}
        />

        <Box>
          <Form.Submit>Submit</Form.Submit>
        </Box>
      </Flex>
    </Form.Root>
  );
}
