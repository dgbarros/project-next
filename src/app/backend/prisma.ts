import { PrismaClient } from "@prisma/client";

declare global {
    // Adiciona uma propriedade ao objeto global em desenvolvimento
    var prisma: PrismaClient | undefined;
}

export const prisma =
    global.prisma ||
    new PrismaClient({
        log: ["query", "info", "warn", "error"], // Ativa logs para debug
    });

if (process.env.NODE_ENV !== "production") {
    global.prisma = prisma; // Evita múltiplas instâncias em desenvolvimento
}
