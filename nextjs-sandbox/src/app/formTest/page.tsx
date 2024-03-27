"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { schema } from "./schema";
import { useFormState } from "react-dom";
import { action } from "./action";

const defaultValue = { email: "email@example.com", password: "" };

export default function testForm() {
  const [lastResult, formAction] = useFormState(action, undefined);

  const [form, fields] = useForm({
    lastResult,
    defaultValue: { email: "email@example.com", password: "" },
    // shouldValidate: "onBlur",
    // onValidate({ formData }) {
    //   return parseWithZod(formData, { schema });
    // },
  });

  console.log(lastResult, "🔴lastres🔴");

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={formAction} noValidate>
      <div>
        <label>email</label>
        <input type="text" name={fields.email.name} />
        <div>{fields.email.errors}</div>
      </div>
      <div>
        <label>Password</label>
        <input type="password" name={fields.password.name} />
        <div>{fields.password.errors}</div>
      </div>
      <button>Login</button>

      {form.errors?.map((message, i) => <p key={i}>{message}</p>)}
    </form>
  );
}
