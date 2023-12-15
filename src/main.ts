import { resolve } from "node:path";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication
} from "@nestjs/platform-fastify";
import fastifyCookie from "@fastify/cookie";
import fastifyStatic from "@fastify/static";
import multipart from "@fastify/multipart";
import { AppModule } from "./app.module";
import { corsOptions } from "./config/cors/corsOptions";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.register(fastifyCookie, {
    secret: process.env.FASTIFY_COOKIE_SECRET
  });
  app.register(fastifyStatic, {
    root: resolve(__dirname, "../tmp"),
    prefix: "/tmp"
  });

  app.enableCors(corsOptions);

  app.register(multipart, {
    limits: {
      fileSize: 6 * 1024 * 1024, // 6 MB
      files: 10
    }
  });

  app.listen(process.env.PORT, "0.0.0.0").then(() => {
    console.log("🚀 Server running on port:", process.env.PORT);
  });
}
bootstrap();
