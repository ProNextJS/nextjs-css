"use client";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

import { addEntry } from "@/blog";

type FormFields = {
  title: string;
  text: string;
};

export default function BlogForm() {
  const [form] = Form.useForm();

  const onFinish: FormProps<FormFields>["onFinish"] = async (values) => {
    await addEntry(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FormFields>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FormFields>
        label="Content"
        name="text"
        rules={[{ required: true, message: "Please input some content!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
