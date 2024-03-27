// action.ts
"use server";

import { schema } from "./schema";
import { parseWithZod } from "@conform-to/zod";

export async function action(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema,
  });

  if (submission.status !== "success") {
    return submission.reply({ formErrors: ["custom", "error massage"] });
  }

  // server side erros
  return submission.reply({
    formErrors: ["エラーメッセージ1", "エラーメッセージ2"],
  });
}
