import { Injectable } from "@nestjs/common";
import { join } from "path";
import { YogaDriverConfig, YogaDriverConfigFactory } from "../../src.js";

@Injectable()
export class ConfigService implements YogaDriverConfigFactory {
  createGqlOptions(): YogaDriverConfig {
    return {
      typePaths: [join(__dirname, "**", "*.graphql")],
    };
  }
}
