import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { YogaFederationDriver } from "../../../src/drivers.js";
import { ConfigModule } from "./config/config.module.js";
import { ConfigService } from "./config/config.service.js";
import { UsersModule } from "./users/users.module.js";

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: YogaFederationDriver,
      useExisting: ConfigService,
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    UsersModule,
  ],
})
export class AppModule {}
