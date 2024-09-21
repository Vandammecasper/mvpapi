import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
  origin: ['http://localhost:5173', 'https://mvpvote.vercel.app'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
});
  await app.listen(3000);
  console.info(`Server is running on: ${await app.getUrl()}`)
  console.info(`GraphQL is running on: ${await app.getUrl()}/graphql`)
}
bootstrap();