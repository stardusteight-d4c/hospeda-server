import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.ethereal.email",
  auth: {
    user: "hospedaeventos.team@gmail.com",
    pass: process.env.TWO_STEP_VERIFICATION_PASS, 
  },
});