import 'server-only'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '@/generated/prisma/client'

const globalForPrisma = globalThis

const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		adapter: new PrismaMariaDb(process.env.DATABASE_URL)
	})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { prisma }
