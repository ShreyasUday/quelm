import { PrismaClient } from "@prisma/client";
import config from ".";

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (!config.IS_PRODUCTION) {
  global.prisma = prisma;
}
