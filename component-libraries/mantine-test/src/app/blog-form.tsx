"use client";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group } from "@mantine/core";

import { addEntry } from "@/blog";

type FormFields = {
  title: string;
  text: string;
};

export default function BlogForm() {
  const form = useForm<FormFields>({
    mode: "uncontrolled",
    initialValues: {
      title: "",
      text: "",
    },
  });

  const onFinish = async (values: FormFields) => {
    await addEntry(values);
    form.reset();
  };

  return (
    <form onSubmit={form.onSubmit(onFinish)}>
      <TextInput
        label="Title"
        placeholder="Title"
        key={form.key("title")}
        {...form.getInputProps("title")}
      />
      <TextInput
        mt="md"
        label="Content"
        placeholder="Content"
        key={form.key("text")}
        {...form.getInputProps("text")}
      />

      <Group justify="center" mt="xl">
        <Button color="blue" variant="filled" type="submit">
          Submit
        </Button>
      </Group>
    </form>
  );
}
