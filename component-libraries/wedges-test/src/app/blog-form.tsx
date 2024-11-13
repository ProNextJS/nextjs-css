"use client";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@lemonsqueezy/wedges";

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
      <Controller
        name="title"
        control={form.control}
        render={({ field }) => <Input placeholder="Title" {...field} />}
      />
      <Controller
        name="text"
        control={form.control}
        render={({ field }) => <Input placeholder="Content" {...field} />}
      />

      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
