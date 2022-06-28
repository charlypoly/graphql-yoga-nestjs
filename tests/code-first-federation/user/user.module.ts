import { Module } from "@nestjs/common";
import { UserResolver } from "./user.resolver.js";
import { PostModule } from "../post/post.module.js";

@Module({
  providers: [UserResolver],
  imports: [PostModule],
})
export class UserModule {}
