import * as fs from "node:fs";

export function renderForgotPassword(data: {
  name: string;
  redirectToken: string;
}): string {
  const { name, redirectToken } = data;
  const emailTemplate = fs.readFileSync(
    "src/shared/views/forgot-password/forgotPasswordTemplate.html",
    "utf8"
  );
  return emailTemplate
    .replace(/%NAME%/g, name)
    .replace(/%ORIGIN%/g, process.env.ORIGIN)
    .replace(/%REDIRECTTOKEN%/g, redirectToken);
}
