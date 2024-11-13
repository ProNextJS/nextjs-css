"use client";
import { useForm, Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={form.control}
        render={({ field }) => (
          <Form.Group className="mb-3" controlId="title-input">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="title" {...field} />
          </Form.Group>
        )}
      />
      <Controller
        name="text"
        control={form.control}
        render={({ field }) => (
          <Form.Group className="mb-3" controlId="title-text">
            <Form.Label>content</Form.Label>
            <Form.Control type="textarea" placeholder="content" {...field} />
          </Form.Group>
        )}
      />

      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
