import * as fs from "node:fs";

export function renderConfirmEmail(data: {
  name: string;
  randomSixDigitCode: number;
}): string {
  const { name, randomSixDigitCode } = data;
  const randomSixDigitCodeArray = String(randomSixDigitCode).split("");
  const emailTemplate = fs.readFileSync(
    "src/shared/views/confirm-email/confirmEmailTemplate.html",
    "utf8"
  );
  return emailTemplate.replace(/%NAME%/g, name).replace(
    /%CODE%/g,
    randomSixDigitCodeArray
      .map(
        (digit: string) => `
      <span style="user-select: text; max-width: 47px; width: fit-content; display: inline; font-size: 24px; background-color: #f2f2f2; border: 1px solid #ddd; padding: 10px 16px; border-radius: 4px;">
        ${digit}
      </span>
    `
      )
      .join("")
  );
}
