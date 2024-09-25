import { PrismaClient } from "@prisma/client";

declare global{
    var prisma: PrismaClient | undefined
};

export const prismadb = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;